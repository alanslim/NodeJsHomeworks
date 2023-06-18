import fs from "fs";
const log = console.log;

fs.open('test.txt', 'w', (err) => {
    if (err) throw err;
    log("Файл создан");

    let text = "Мама мыла раму";
    fs.writeFile('test.txt', text, (err) => {
        if (err) throw err;
        log("Файл записан");
    });
});

fs.readFile('package.json', (err, data) => {
    if (err) throw err;
    log(data);
});

