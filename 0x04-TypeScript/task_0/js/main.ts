// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create two student objects
  const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "Nairobi"
  };
  
  const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Mombasa"
  };
  
  // Create an array of students
  const studentsList: Student[] = [student1, student2];
  
  // Render a table and append student information
  const table = document.createElement("table");
  const body = document.body;
  body.appendChild(table);
  
  // Iterate over the studentsList and create rows
  studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  