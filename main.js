// Convert comma-separated data to an Array of string rows
const csvToRows = (str) => {
    
};

// Remove duplicate rows from the Array
const removeDuplicateRows = (arr) => {};

// Convert Array of string rows to objects using the row at index 0 as property names
const strRowsToObjects = (arr) => {};

// Convert the registeredOn epoch timestamps to Date objects
const timeToDate = (arr) => {};

// Sort the array alphabetically (ascending) by first_name
const sortByFirstName = (arr) => {};

// Add a new property named permissions to every object {admin: false,profile: true,billing: true,supervisor: false}
const addUserPermissions = (arr) => {};

// Find user objects with bad ill-formed/bad email IDs and return them as result
const findBadEmailIds = (arr) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
};

// Implement the data processing pipeline using the functions above and return an array of user objects with no duplicates, sorted by first_name, timestamps converted to date objects and the user permissions object added.
const processData = (data) => {};

// PLEASE DO NOT DELETE/MODIFY THE CODE BELOW
module.exports = {
  csvToRows,
  removeDuplicateRows,
  strRowsToObjects,
  timeToDate,
  sortByFirstName,
  addUserPermissions,
  findBadEmailIds,
  processData,
};
