import * as fs from 'fs';
import * as path from 'path';

// Укажите корневую директорию вашего проекта
const directoryPath = path.join(__dirname, 'src');

// Функция для замены путей в файле
function replaceInFile(filePath: string): void {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    // Замена относительных путей на абсолютные
    let result = data.replace(/(\.\.\/)+/g, '');

    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) console.log(err);
    });
  });
}

// Функция для обхода директорий
function walkDirectory(directory: string): void {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      fs.stat(filePath, (err, stat) => {
        if (err) {
          console.log(err);
          return;
        }

        if (stat.isDirectory()) {
          walkDirectory(filePath); // Рекурсивный вызов для вложенных директорий
        } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.ts') || filePath.endsWith('.tsx')) {
          replaceInFile(filePath); // Замена путей в файлах .js, .jsx, .ts и .tsx
        }
      });
    });
  });
}

// Запуск обхода директории
walkDirectory(directoryPath);