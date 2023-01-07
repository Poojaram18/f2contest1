/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  //----------------------------------Map Function------------------------------
  function PrintDeveloperswithMap() {
    // employees who have the profession of a developer using the map function.
    arr.map(mapfun); 
    function mapfun(arrayItem) {
      if (arrayItem.profession === "developer") { //=== strictly equal
        console.log(arrayItem);
      }
    }
  }
  
  //----------------------------------For Each Function------------------------------
  function PrintDeveloperbyForEach() {
    //employees who have the profession of a developer using the for each function.
    arr.forEach(foreach); 
    function foreach(arrayItem) {
      if (arrayItem.profession === "developer") { //=== strictly equal
        console.log(arrayItem);
      }
    }
  }
  
  //----------------------------------Add Data Function------------------------------
  function addData() {
    //add new data
    let newdata = { id: 4, name: "susan", age: "20", profession: "intern" };//new data from question
    arr.push(newdata);// arr from top
    console.log(arr);
  }
  
  //----------------------------------Remove Admin Function------------------------------
  function removeAdmin() {
    // remove the object where the profession is admin. console.log the changed array.
    let remove = arr.filter(function (val) {
      if (val.profession !== "admin") {
        return val;
      }
    });
    console.log(remove);
  }
  
  //----------------------------------Concatinate Function------------------------------
  function concatenateArray() {
    //creating new array with 3 objects
    let arr2 = [
      { id: 5, name: "pooja", age: "22", profession: "Programmer" },
      { id: 6, name: "ram", age: "23", profession: "devloper" },
      { id: 7, name: "raj", age: "26", profession: "developer" },
    ];
  
    let concatenate = arr.concat(arr2);
    console.log(concatenate);
  }
  
