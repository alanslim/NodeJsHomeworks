import fs from 'fs';
const log = console.log;

fs.readFile('file.json', 'utf-8', (err, data) => {
    if (err) throw err;  // VN: бросать исключение там, где можно просто вывести сообщение об ошибке, нехорошо
    try {
        const json = JSON.parse(data);

        log("Текущее значение count: ", json.count);

        json.count += 1;


        fs.writeFile('file.json', JSON.stringify(json), 'utf-8', (err) => {
            if (err) throw err;  // VN: то же самое
        });

        log('Файл успешно обновлен');
    } catch (err) {
        console.error('Ошибка в парсинге JSON', err);
    }



});