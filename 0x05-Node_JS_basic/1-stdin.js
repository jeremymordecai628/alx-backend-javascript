process.stdout.write('Welcome to Holberton School, what is your name?\n')
process.stdin.on('data' , (input)=>{
    const name = input.toString().trim();
    console.log(`Your name is: ${name}`);
    process.exit()
})
process.on('exit', () => {
    console.log('This important software is now closing');
});