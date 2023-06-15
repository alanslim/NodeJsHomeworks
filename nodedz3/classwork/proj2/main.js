const log = console.log;
//log("Hello, what's yoyr name? ")

//log(process.stdin)
process.stdout.write("Hello, what's yoyr name? ");

user_ask_lastname = false;

process.stdin.on('data', (data) => {
    uname = data.toString();
    log("your name is ", uname);
    process.stdin.pause();
    user_ask_lastname = true;
});



setTimeout(()=>{
    if (user_ask_lastname) {
        process.stdout.write("So what's your last name? ");
        process.stdin.resume();
    }
}, 10000);

process.stderr.write("ERRORR!!");