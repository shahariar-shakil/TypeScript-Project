// Public, private, protected, readonly
// Setter and getter
class User {
  readonly userName: string;
  public age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}

class Student extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, id: ${this.studentId}`
    );
  }

  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }

  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("monir", 31, 1302020015);
student1.setStudentId(1302020017);
console.log(student1.getStudentId());

let user1 = new User("rabin", 23);
console.log(user1.userName);
