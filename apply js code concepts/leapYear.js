// 4 year por por leapYear ase so 4 die soman vabe divide hobe and remainder thakbe na jevabe amra even and odd number ber korci oivabe
function findLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        console.log("this year is a Leap year");
    }
    else{
        console.log("this year is not a Leap year", year);
    }
}
const thisYear = 2023;
const checkLeapYear = findLeapYear(thisYear);