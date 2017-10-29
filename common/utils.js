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

//Localisation for Day and Month; the switch seems to be slower than the array...
export var weekday = {
	de: ["Sonntag", "Montag", "Dienstag", "Mitwoch", "Donnerstag", "Freitag", "Samstag"],
	da: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"],
	en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
	es: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
	fr: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
	nl: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
	it: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"],
	pt: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"],
	pl: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]/*,
	af: ["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"],
	bs: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
	ca: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
	cs: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"],
	cy: ["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"],
	et: ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"],
	eu: ["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"],
	fi: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
	fo: ["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"],
	gl: ["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"],
	hr: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
	hu: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
	id: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]*/
};

export var monthName = {
	de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
	da: ["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"],
	en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
	fr: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
	nl: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
	it: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"],
	pt: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"],
	pl: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]/*,
	af: ["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"],
	bs: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
	ca: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
	cs: ["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"],
	cy: ["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"],
	et: ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"],
	eu: ["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"],
	fi: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
	fo: ["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"],
	gl: ["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"],
	hr: ["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"],
	hu: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
	id: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"]*/
};
/*export var weekday = [];
export var monthName = [];
weekday["de"] = ["Sonntag", "Montag", "Dienstag", "Mitwoch", "Donnerstag", "Freitag", "Samstag"];
monthName["de"] = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
weekday["da"]=["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"];
monthName["da"]=["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"];
weekday["en"]=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
monthName["en"]=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
weekday["es"]=["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
monthName["es"]=["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
weekday["fr"]=["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
monthName["fr"]=["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
weekday["nl"]=["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];
monthName["nl"]=["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"];
weekday["it"]=["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
monthName["it"]=["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
weekday["pt"]=["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
monthName["pt"]=["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
weekday["pl"]=["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
monthName["pl"]=["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"];
weekday["af"]=["Sondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrydag", "Saterdag"];
monthName["af"]=["Januarie", "Februarie", "Maart", "April", "Mei", "Junie", "Julie", "Augustus", "September", "Oktober", "November", "Desember"];
weekday["bs"]=["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"];
monthName["bs"]=["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"];
weekday["ca"]=["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
monthName["ca"]=["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];
weekday["cs"]=["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"];
monthName["cs"]=["leden", "únor", "březen", "duben", "květen", "červen", "červenec", "srpen", "září", "říjen", "listopad", "prosinec"];
weekday["cy"]=["Dydd Sul", "Dydd Llun", "Dydd Mawrth", "Dydd Mercher", "Dydd Iau", "Dydd Gwener", "Dydd Sadwrn"];
monthName["cy"]=["Ionawr", "Chwefror", "Mawrth", "Ebrill", "Mai", "Mehefin", "Gorffennaf", "Awst", "Medi", "Hydref", "Tachwedd", "Rhagfyr"];
weekday["et"]=["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
monthName["et"]=["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
weekday["eu"]=["igandea", "astelehena", "asteartea", "asteazkena", "osteguna", "ostirala", "larunbata"];
monthName["eu"]=["urtarrila", "otsaila", "martxoa", "apirila", "maiatza", "ekaina", "uztaila", "abuztua", "iraila", "urria", "azaroa", "abendua"];
weekday["fi"]=["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"];
monthName["fi"]=["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
weekday["fo"]=["sunnudagur", "mánadagur", "týsdagur", "mikudagur", "hósdagur", "fríggjadagur", "leygardagur"];
monthName["fo"]=["januar", "februar", "mars", "apríl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"];
weekday["gl"]=["domingo", "luns", "martes", "mércores", "xoves", "venres", "sábado"];
monthName["gl"]=["xaneiro", "febreiro", "marzo", "abril", "maio", "xuño", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"];
weekday["hr"]=["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"];
monthName["hr"]=["siječanj", "veljača", "ožujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"];
weekday["hu"]=["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"];
monthName["hu"]=["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"];
weekday["id"]=["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
monthName["id"]=["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"];*/

