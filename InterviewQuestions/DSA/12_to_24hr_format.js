// Given the 12hr time format , convert it to 24hr format.
// 01:02 PM --> 13:02

const convert12to24 = (time12h) => {
  let [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');

  if (hours === '12') hours = '00';

  if (modifier === 'PM') hours = parseInt(hours) + 12;

  return `${hours}:${minutes}`;
};

console.log(convert12to24('02:02 PM'));
console.log(convert12to24('04:06 PM'));
console.log(convert12to24('12:00 PM'));
console.log(convert12to24('12:00 AM'));
