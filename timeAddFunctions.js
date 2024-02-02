function addDaysToDate(dateInQuestion, daysForAdding) {
  let numberOfMlSeconds = dateInQuestion.getTime();
  // minus 1 because dates are inclusive, they work on the start and end dates
  let addMlSeconds = daysForAdding * 86400000;
  let newDateObj = new Date(numberOfMlSeconds + addMlSeconds);
  return newDateObj;
}

function subtractDaysFromDate(dateInQuestion, daysForSubtracting) {
  let numberOfMlSeconds = dateInQuestion.getTime();
  // minus 1 because dates are inclusive, they work on the start and end date
  let addMlSeconds = daysForSubtracting * 86400000;
  let newDateObj = new Date(numberOfMlSeconds - addMlSeconds);
  return newDateObj;
}

function subtractDateFromDate(date1, date2) {
  let MlSeconds1 = date1.getTime();
  let MlSeconds2 = date2.getTime();
  let daysDifference = (MlSeconds1 - MlSeconds2) / 86400000;

  return daysDifference;
}

// Function to convert date string to JS Date object
function convertToDate(dateString) {
  if (dateString && typeof dateString === "string") {
    const dateParts = dateString.split(" ");
    if (dateParts.length === 2) {
      const [month, day] = dateParts;
      const year = new Date().getFullYear(); // Assuming current year

      return new Date(`${month} ${day}, ${year}`);
    }
  }

  return null; // Return null for invalid date strings
}

export {
  addDaysToDate,
  subtractDaysFromDate,
  convertToDate,
  subtractDateFromDate,
};
