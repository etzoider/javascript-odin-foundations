/// function leapYear( Number year) : return boolean

function leapYear(year) {
    if (year % 4 == 0) {
        if ((year % 100 == 0) && !(year % 400 == 0)) {
            return false
        } return true
    } return false
}



tests = [[1996, true], [1997, false], [34992, true], [1900, false], [1600, true], [700, false]]

let year; let result;

for (i=0;i<tests.length;i++) {
    year = tests[i][0];
    result = tests[i][1];
    isLeapYear = leapYear(year);
    console.log(`Test ${(isLeapYear == result) ? "Success" : "Fail"}\n\n`)

}