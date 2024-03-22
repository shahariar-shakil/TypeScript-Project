// build in data type: string, number, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let userActivated: boolean;

userId = 789645;
firstName = "shahriar";
lastName = "shakil";
userActivated = true;

fullName = firstName.concat(lastName);

console.log(`your ID:${userId}, name:${fullName}, identify:${userActivated}`);

console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display(): void {
  console.log("Hi I'm a display function");
}
display();
