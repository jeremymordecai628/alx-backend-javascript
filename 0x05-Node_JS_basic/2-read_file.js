const fs = require('fs')
function countStudents(filepath){

    try{
        const data = fs.readFileSync(filepath , 'utf-8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const field ={};
        for (const line of lines.slice(1)) {
            const [name, , , field] = line.split(',');
            if (!fields[field]) fields[field] = [];
            fields[field].push(name);
        }

        console.log(`Number of students: ${lines.length - 1}`);
        for (const [field, students] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    }catch (err) {
        throw new Error('Cannot load the database');
    }
    module.exports =countStudents;
}