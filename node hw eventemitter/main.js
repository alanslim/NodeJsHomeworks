const Events = require('events');

const log = console.log;

class Inp extends Events {

    constructor() {
        super()
    }


    start() {
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', (data) => {
            let input = data.trim();

            switch (true) {
                case input.startsWith('solve'): {
                    let expression = input.slice(6).trim();
                    this.emit('solve', expression);
                    break;
                }
                case input === 'exit': {
                    this.emit('exit');
                    break;
                }
                default: {
                    this.emit('input', input);
                    break;
                }
            }
        });

    }

    stop() {

        process.stdin.removeAllListeners('data');
    }

}
let inpt = new Inp();

inpt.on('input', (input) => {
    process.stdout.write(input);
});

inpt.on('solve', (expression) => {
    let res = eval(expression);
    log(res);
});

inpt.on('exit', () => {
    inpt.stop();
    process.exit();
});

inpt.start();