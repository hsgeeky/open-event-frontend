(function(a,e){"object"==typeof exports&&"undefined"!=typeof module&&"function"==typeof require?e(require("../moment")):"function"==typeof define&&define.amd?define(["../moment"],e):e(a.moment)})(this,function(a){"use strict"
var e="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")
function j(a,j,r,t){var n=function(a){var j=Math.floor(a%1e3/100),r=Math.floor(a%100/10),t=a%10,n=""
j>0&&(n+=e[j]+"vatlh")
r>0&&(n+=(""!==n?" ":"")+e[r]+"maH")
t>0&&(n+=(""!==n?" ":"")+e[t])
return""===n?"pagh":n}(a)
switch(r){case"ss":return n+" lup"
case"mm":return n+" tup"
case"hh":return n+" rep"
case"dd":return n+" jaj"
case"MM":return n+" jar"
case"yy":return n+" DIS"}}return a.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(a){var e=a
return e=-1!==a.indexOf("jaj")?e.slice(0,-3)+"leS":-1!==a.indexOf("jar")?e.slice(0,-3)+"waQ":-1!==a.indexOf("DIS")?e.slice(0,-3)+"nem":e+" pIq"},past:function(a){var e=a
return e=-1!==a.indexOf("jaj")?e.slice(0,-3)+"Hu’":-1!==a.indexOf("jar")?e.slice(0,-3)+"wen":-1!==a.indexOf("DIS")?e.slice(0,-3)+"ben":e+" ret"},s:"puS lup",ss:j,m:"wa’ tup",mm:j,h:"wa’ rep",hh:j,d:"wa’ jaj",dd:j,M:"wa’ jar",MM:j,y:"wa’ DIS",yy:j},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})})

//# sourceMappingURL=tlh.map