/**
 * Date objects = OBjects that contain values that represent dates and times
 * These date objects can be changed and formatted
 */

const date = new Date();
console.log(date);

//custom date
//Date = (year, month, day, hour, minute, second, ms)
const birthday = new Date(2025, 10, 11, 12, 30, 0);
console.log(birthday);

//get specific values
const year = birthday.getFullYear();
console.log(year);

const month = birthday.getMonth(); //0-11
console.log(month);

const monthDay = birthday.getDate(); //1-31
console.log(monthDay);

const dayOfWeek = birthday.getDay(); //0-6
console.log(dayOfWeek);

const hours = birthday.getHours(); //0-23
console.log(hours);

const minutes = birthday.getMinutes(); //0-59
console.log(minutes);

const seconds = birthday.getSeconds(); //0-59
console.log(seconds);

const ms = birthday.getMilliseconds(); //0-999
console.log(ms);

//Set date
const newDate = new Date();
newDate.setFullYear(2030);
newDate.setMonth(11);
newDate.setDate(31);
newDate.setHours(23);
newDate.setMinutes(59);
newDate.setSeconds(59);
newDate.setMilliseconds(999);
console.log(newDate);

//compare dates

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if (date2 > date1) {
	console.log("Happy new year!");
}
