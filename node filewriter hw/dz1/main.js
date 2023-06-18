import { writeFileSync } from 'fs';
import { stdout, stdin } from 'process';

function clearLine() {
  stdout.write('\r\x1b[K');
}

stdout.write('Введите имя файла, в который вы хотите записать данные: ');

stdin.on('data', (filename) => {
  const trimmedFilename = filename.toString().trim();

  clearLine();
  stdout.write('Введите ваше имя: ');

  stdin.on('data', (name) => {
    const trimmedName = name.toString().trim();

    clearLine();
    stdout.write('Введите вашу фамилию: ');

    stdin.on('data', (lastname) => {
      const trimmedLastname = lastname.toString().trim();

      clearLine();
      stdout.write('Введите вашу дату рождения: ');

      stdin.on('data', (birthdate) => {
        const trimmedBirthdate = birthdate.toString().trim();

        const data = `Имя: ${trimmedName}\nФамилия: ${trimmedLastname}\nДата рождения: ${trimmedBirthdate}`;

        writeFileSync(trimmedFilename, data);

        clearLine();
        stdout.write('Данные успешно записаны в файл.\n');
        process.exit();
      });
    });
  });
});
