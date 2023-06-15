const log = console.log;
const error = console.error;
import {prompt} from "./prompt.js";

async function main() {
    try {
      let name = await prompt("Привет, как тебя зовут?", 'Amir');
      log("Тебя зовут", name);
  
      let ageInput = await prompt("Сколько тебе лет?", 25);
      log("Твой возраст", age);

      let weight = await prompt('Сколько ты весишь?', 85.5);
      log('Ты весишь', weight);

      let p = await prompt('Тру или фолс?', false);
      log(p);
    } catch (error) {
      error("ERROR:", error);
    }
  }
  
  main();