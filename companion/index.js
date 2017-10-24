import { settingsStorage } from "settings";
import * as messaging from "messaging";
import { me } from "companion";

let WATCH_COLOR = "watchColor";
let STEP_COLOR = "stepColor";
let CAL_COLOR = "calColor";
let STAIR_COLOR = "stairColor";
let ACTIVE_COLOR = "activeColor";

// Settings have been changed
settingsStorage.onchange = function(evt) {
  sendValue(evt.data.key, evt.data.newValue);
}

// Settings were changed while the companion was not running
if (me.launchReasons.settingChanged) {
  // Send the value of the setting
  sendValue(WATCH_COLOR, settingsStorage.getItem(WATCH_COLOR));
  sendValue(STEP_COLOR, settingsStorage.getItem(STEP_COLOR));
  sendValue(CAL_COLOR, settingsStorage.getItem(CAL_COLOR));
  sendValue(ACTIVE_COLOR, settingsStorage.getItem(ACTIVE_COLOR));
}

function sendValue(key, val) {
  if (val) {
    sendSettingData({
      key: val
    });
  }
}
function sendSettingData(data) {
  // If we have a MessageSocket, send the data to the device
  if (messaging.peerSocket.readyState === messaging.peerSocket.OPEN) {
    messaging.peerSocket.send(data);
  } else {
    console.log("No peerSocket connection");
  }
}