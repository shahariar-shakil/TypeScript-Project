// enum: store constant -> duplicate value is not allowed here
// enum type: numeric, string, heterogeneous

// enum data type
enum requestType {
  readData = 1,
  saveData,
  deleteData,
}
console.log(requestType);

// string enum
enum requestType2 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
}
console.log(requestType2.deleteData);

// heterogeneous enum
enum requestType3 {
  readData = "READ_DATA",
  deleteData = "DELETE_DATA",
  Id = 121,
}
console.log(requestType2.deleteData);
