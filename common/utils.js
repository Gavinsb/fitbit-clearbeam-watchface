// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Add a dot between hundreds and thousands
export function thsdDot(num) {
  var retString = num;
  if ( num > 999 ) {
    let dotFill = ".";
    let hundreds = num-Math.floor(num/1000)*1000;
    if ( hundreds < 10 ) {
      dotFill =".00";
    } else if ( hundreds < 100 ) {
      dotFill = ".0";
    }
    retString = Math.floor(num/1000) + dotFill + hundreds;
  }
  return retString;
}

// Simulate mono-fonts
export function monoDigits(digits) {
  var ret = "";
  var str = digits.toString();
  for (var index = 0; index < str.length; index++ ) {
    var num = str.charAt(index);
    ret = ret.concat(hex2a("0x1" + num));
  }
  return ret;
}

export function hex2a(hex) {
  var str = "";
  for (var index = 0; index < hex.length; index += 2 ) {
    var val = parseInt(hex.substr(index, 2), 16);
    if (val) str += String.fromCharCode(val);
  }
  return str.toString();
}

//Formats the hour based on the user pref
export function formatHour(hour, clockPref) {
  if (clockPref == '12h'){
    if(hour > 12) {
      hour -= 12;
    } else if(hour == 0) {
      hour = "12";
    }
  }
  return hour;
}

//Localisation for Day and Month the switch seems to be slower than the array...
/*export function getWeekDay(lang, num) {
	var weekday = [];
	var prefix = lang.substring(0,2);
	switch (prefix) {
		case "de":
			weekday = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
			break;
		case "en":
			weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			break;
		case "es":
			weekday = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
			break;
		case "fr":
			weekday = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
			break;
		case "it":
			weekday = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
			break;
		case "pt":
			weekday = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
			break;
		case "nl":
			weekday = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
			break;
		case "bs":
			weekday = ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"];
			break;
		case "ca":
			weekday = ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
			break;
		case "et":
			weekday = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
			break;
		case "eu":
			weekday = ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"];
			break;
		case "fi":
			weekday = ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
			break;
		case "fo":
			weekday = ["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"];
			break;
		case "gl":
			weekday = ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"];
			break;
		case "hr":
			weekday = ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"];
			break;
		case "hu":
			weekday = ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
			break;
		case "id":
			weekday = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
			break;
		case "pl":
			weekday = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
			break;
		default:
			weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	}
	return weekday[num];
}

export function getMonthName(lang, num) {
	var monthname = [];
	var prefix = lang.substring(0,2);
	switch (prefix) {
		case "de":
			monthname = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
			break;
		case "en":
			monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			break;
		case "es":
			monthname = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
			break;
		case "fr":
			monthname = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
			break;
		case "it":
			monthname = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
			break;
		case "pt":
			monthname = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
			break;
		case "nl":
			monthname = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
			break;
		case "bs":
			monthname = ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"];
			break;
		case "ca":
			monthname = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];
			break;
		case "et":
			monthname = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
			break;
		case "eu":
			monthname = ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"];
			break;
		case "fi":
			monthname = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
			break;
		case "fo":
			monthname = ["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"];
			break;
		case "gl":
			monthname = ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"];
			break;
		case "hr":
			monthname = ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"];
			break;
		case "hu":
			monthname = ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"];
			break;
		case "id":
			monthname = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"];
			break;
		case "pl":
			monthname = ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
			break;
		default:
			monthname = ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"];
	}
	return monthname[num];
}*/

export var weekday = [];
export var monthName = [];
weekday["de-DE"] = ["Sonntag", "Montag", "Dienstag", "Mitwoch", "Donnerstag", "Freitag", "Samstag"];
monthName["de-DE"] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
weekday["da-DK"]=["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
monthName["da-DK"]=["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];
weekday["de-AT"]=["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
monthName["de-AT"]=["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
weekday["de-CH"]=["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
monthName["de-CH"]=["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
weekday["de-LI"]=["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
monthName["de-LI"]=["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
weekday["de-LU"]=["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
monthName["de-LU"]=["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
weekday["en-GB"]=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
monthName["en-GB"]=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
weekday["en-US"]=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
monthName["en-US"]=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
weekday["es-ES"]=["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
monthName["es-ES"]=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
weekday["fr-BE"]=["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
monthName["fr-BE"]=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
weekday["fr-FR"]=["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
monthName["fr-FR"]=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
weekday["nl-BE"]=["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
monthName["nl-BE"]=["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
weekday["nl-NL"]=["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
monthName["nl-NL"]=["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
weekday["it-CH"]=["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
monthName["it-CH"]=["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
weekday["it-IT"]=["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
monthName["it-IT"]=["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
