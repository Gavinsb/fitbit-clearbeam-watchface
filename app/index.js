import clock from "clock";
import document from "document";
import userActivity from "user-activity";
import { HeartRateSensor } from "heart-rate";
import { user } from "user-profile";
//import { battery } from "power";
import * as messaging from "messaging";

import * as util from "../common/utils";

// Update the clock every second
clock.granularity = "seconds";

// Get a handle on the <text> element
let myHour = document.getElementById("myHour");
let myMinute = document.getElementById("myMinute");
let mySecond = document.getElementById("mySecond");
let myDate = document.getElementById("myDate");
let myDay = document.getElementById("myDay");
let myBat = document.getElementById("myBattery");
let dailysteps = document.getElementById("mySteps");
let dailystairs = document.getElementById("myStairs");
let dailycals = document.getElementById("myCals");
let dailymins = document.getElementById("myMins");
let currentheart = document.getElementById("myHR");
let restingheart = document.getElementById("myRestHR");
let heartRing = document.getElementById("hrtArc");
let stepRect = document.getElementById("stepsRect");
let calRect = document.getElementById("calsRect");
let stairRect = document.getElementById("stairsRect");
let minRect = document.getElementById("minsRect");
let heart = document.getElementById("myHR");
let stepgrad = document.getElementById("stepGradient");
let calgrad = document.getElementById("calGradient");
let stairgrad = document.getElementById("stairGradient");
let activegrad = document.getElementById("activeGradient");
let otherData = document.getElementById("otherData");
var weekday = new Array(7);
weekday[0] = "SONNTAG";
weekday[1] = "MONTAG";
weekday[2] = "DIENSTAG";
weekday[3] = "MITTWOCH";
weekday[4] = "DONNERSTAG";
weekday[5] = "FREITAG";
weekday[6] = "SAMSTAG";
var monthName = new Array(12);
monthName[1]  = "JANUAR";
monthName[2]  = "FEBRUAR";
monthName[3]  = "MÄRZ";
monthName[4]  = "APRIL";
monthName[5]  = "MAI";
monthName[6]  = "JUNI";
monthName[7]  = "JULI";
monthName[8]  = "AUGUST";
monthName[9]  = "SEPTEMBER";
monthName[10] = "OKTOBER";
monthName[11] = "NOVEMBER";
monthName[12] = "DEZEMBER";

function updateStats() {
  // Get Goals to reach and curent values
  const distanceGoal = userActivity.goals.distance;
  const metricSteps = "steps";  // distance, calories, elevationGain, activeMinutes
  const amountSteps = userActivity.today.adjusted[metricSteps] || 0;
  const stepsGoal = userActivity.goals[metricSteps];
  const metricCals = "calories";  // distance, calories, elevationGain, activeMinutes
  const amountCals = userActivity.today.adjusted[metricCals] || 0;
  const caloriesGoal = userActivity.goals[metricCals];
  const metricActive = "activeMinutes";
  const amountActive = userActivity.today.adjusted[metricActive] || 0;
  const activeGoal = userActivity.goals[metricActive];
  const metricElevation = "elevationGain";
  const amountElevation = userActivity.today.adjusted[metricElevation] || 0
  const elevationGoal = userActivity.goals[metricElevation];
  let stepString = util.thsdDot(amountSteps);//amountSteps;
  let calString = util.thsdDot(amountCals);
  // The delivered values for caloriesGoal and elevationGoal are strange... thus a (personal) correction - if necessary
  if (caloriesGoal > 5000) {
    caloriesGoal = 3029;
  }
  if (elevationGoal > 80) {
    elevationGoal = 10;
  }
  if (activeGoal > 180) {
    activeGoal = 30;
  }
  dailysteps.innerText = stepString; 
  let stepWidth = Math.floor(100-100*(amountSteps/stepsGoal));
  if ( stepWidth < 0 ) {
    stepWidth = 0;
  }
  stepRect.width = stepWidth;
  dailycals.innerText = calString; 
  let calWidth = Math.floor(100-100*(amountCals/caloriesGoal));
  if ( calWidth < 0 ) {
    calWidth = 0;
  }
  calRect.width = calWidth;
  dailystairs.innerText = amountElevation; 
  let stairWidth = Math.floor(100-100*(amountElevation/elevationGoal));
  if ( stairWidth < 0 ) {
    stairWidth = 0;
  }
  stairRect.width = stairWidth;
  dailymins.innerText = amountActive; 
  let activeWidth = Math.floor(100-100*(amountActive/activeGoal));
  if ( activeWidth < 0 ) {
    activeWidth = 0;
  }
  minRect.width = activeWidth;
}

var hrm = new HeartRateSensor();

hrm.onreading = function () {
  console.log(hrm.heartRate);
  currentheart.innerText=hrm.heartRate;
  let heartAngle = Math.floor(360*(hrm.heartRate/190));
  if ( heartAngle > 360 ) {
    heartAngle = 360;
  }
  heartRing.sweepAngle = heartAngle;
}
hrm.start();

// Update the <text> element with the current time
function updateClock() {
  let today = new Date();
  let day = today.getDate();
  let wday = today.getDay();
  let month = today.getMonth()+1;
  let year = today.getFullYear();
  let hours = util.monoDigits(util.zeroPad(today.getHours()));
  let mins = util.monoDigits(util.zeroPad(today.getMinutes()));
  let secs = util.zeroPad(today.getSeconds());
  let bat = util.monoDigits(78);//util.monoDigits(Math.floor(battery.chargeLevel));
  let rest = (user.restingHeartRate || "--");
  myHour.innerText = `${hours}`;
  myMinute.innerText = `${mins}`;
  mySecond.innerText = `${secs}`;
  myBat.innerText = `${bat}` + "%";
  myDate.innerText = `${day}. ${monthName[month]}`;
  myDay.innerText = `${weekday[wday]}`;
  restingheart.innerText = "R:"+`${rest}`;
  updateStats();
}

// Update Settings
messaging.peerSocket.onmessage = function(evt) {
  myMinute.style.fill = evt.data.watchColor;
  mySecond.style.fill = evt.data.watchColor;
  stepgrad.style.gradientColor2 = evt.data.watchColor;
  calgrad.style.gradientColor2 = evt.data.watchColor;
  stairgrad.style.gradientColor2 = evt.data.watchColor;
  activegrad.style.gradientColor2 = evt.data.watchColor;
  stepgrad.style.gradientColor1 = evt.data.stepColor;
  calgrad.style.gradientColor1 = evt.data.calColor;
  stairgrad.style.gradientColor1 = evt.data.stairColor;
  activegrad.style.gradientColor1 = evt.data.activeColor;
}

// Update the clock every tick event
clock.ontick = () => updateClock();

// Don't start with a blank screen
updateClock();