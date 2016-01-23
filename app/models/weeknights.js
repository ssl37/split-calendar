'use strict';

var nights = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];


function parseWeeknight ( wn ) {
    return wn.match(/(\w+)(\d+)/);
}

function checkWeek ( week ) {
    if ( !isNaN(week) ) {
        if( week > 0 && week < 6) {
            return true;
        }
    }
    return false;
}

function checkNight ( nite ) {
    if (nights.indexOf(nite) > -1) { return true; }
    return false;
}

module.exports = {
    parseWeeknight: parseWeeknight,
    checkNight: checkNight,
    checkWeek: checkWeek
};