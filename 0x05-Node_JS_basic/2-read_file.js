const fs = require('fs');

function countStudents(filepath) {
  /**
   * Reads a CSV file containing student data and counts the number of students in each field.
   *
   * @param {string} filepath - The path to the CSV file.
   * @throws {Error} If there's an error reading the file.
   */

  try {
    // Read the file synchronously and parse it into lines
    const data = fs.readFileSync(filepath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Initialize an object to store students by field
    const fields = {};

    // Iterate through the lines, skipping the header line
    for (const line of lines.slice(1)) {
      // Extract name and field from the line, ignoring unnecessary fields
      const [name, , , field] = line.split(',');

      // Add the name to the corresponding field's list
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    }

    // Print the total number of students
    console.log(`Number of students: ${lines.length - 1}`);

    // Print the number of students and their names for each field
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (err) {
    // Throw a custom error if there's an issue reading the file
    throw new Error('Cannot load the database');
  }

  // Export the function as a module
  module.exports = countStudents;
}