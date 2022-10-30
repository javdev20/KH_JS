// Convert comma-separated data to an Array of string rows
const csvToRows = (str) => {
    let output = [];
    
    for (const row of str.split('\n')) {
      output.push(row);
    }

    return output;
};



// Remove duplicate rows from the Array
const removeDuplicateRows = (arr) => {
    let uniques = [...new Set(arr)];
    return uniques;
};

// Convert Array of string rows to objects using the row at index 0 as property names
const strRowsToObjects = (arr) => {
  const headers = arr[0].split(',');
  let rows = [];

  for (let i = 1; i < arr.length; i++) {
    rows.push(arr[i]);
  }

  const objects = rows.map(function (row) {
    const values = row.split(',');
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  return objects;
};

let employees = `id,first_name,last_name,email,designation,registeredOn
1,Kata,Petrollo,Kata@jscorp.co,Budget/Accounting Analyst IV,1586786455
2,Rafaellle,Francescone,Rafaellle@jscorp.co,Quality Engineer,1591762193
3,Hort,Shufflebotham,Hort@jscorp.co,Paralegal,1604920379
4,Raimundo,Beddingham,Raimundo@jscorp.co,Librarian,1590530472
5,Jamaal,Hyde,Jamaal@jscorp.co,Quality Engineer,1606653657
5,Jamaal,Hyde,Jamaal@jscorp.co,Quality Engineer,1606653657`;

// Convert the registeredOn epoch timestamps to Date objects
const timeToDate = (arr) => {
  
  arr.forEach(element => {
    element.registeredOn = new Date(element.registeredOn * 1000);
  });

  return arr;
};

// Sort the array alphabetically (ascending) by first_name
const sortByFirstName = (arr) => {
    arr.sort((a, b) => (a.first_name < b.first_name ? -1 : a.first_name > b.first_name ? 1 : 0));
    return arr;
};

// Add a new property named permissions to every object {admin: false,profile: true,billing: true,supervisor: false}
const addUserPermissions = (arr) => {
      const permission = {
          permissions: {
            admin: false,
            profile: true,
            billing: true,
            supervisor: false,
          }
      }

      let details = [];
      
      arr.forEach(element => {
          details.push(Object.assign({}, element, permission));
      });

      return details;
};

console.log(addUserPermissions(timeToDate(strRowsToObjects(removeDuplicateRows(csvToRows(employees)))))); 

// Find user objects with bad ill-formed/bad email IDs and return them as result
const findBadEmailIds = (arr) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
};

// Implement the data processing pipeline using the functions above and return an array of user objects with no duplicates, sorted by first_name, timestamps converted to date objects and the user permissions object added.
const processData = (data) => {};

