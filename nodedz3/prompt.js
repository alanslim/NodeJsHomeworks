export function prompt(question, defaultValue) {
    return new Promise((resolve) => {
      process.stdout.write(question + ' ');
  
      process.stdin.once('data', (data) => {
        const input = data.toString().trim();
  
        if (defaultValue === undefined) {
          resolve(input);
          return;
        }
  
        let parsedValue;
  
        switch (typeof defaultValue) {
          case 'number':
            parsedValue = parseFloat(input);
            if (Number.isNaN(parsedValue)) {
              resolve(defaultValue);
            } else {
              resolve(parsedValue);
            }
            break;
            

  
          case 'boolean':
            if (input.toLowerCase() === 'true') {
              resolve(true);
            } else if (input.toLowerCase() === 'false') {
              resolve(false);
            } else {
              resolve(defaultValue);
            }
            break;
  
          case 'string':
            if (input.length === 0) {
              resolve(defaultValue);
            } else {
              resolve(input);
            }
            break;
  
          case 'object':
            if (Array.isArray(defaultValue)) {
              try {
                parsedValue = JSON.parse(input);
                if (Array.isArray(parsedValue)) {
                  resolve(parsedValue);
                } else {
                  resolve(defaultValue);
                }
              } catch (error) {
                resolve(defaultValue);
              }
            }
            break;
  
          default:
            resolve(defaultValue);
            break;
        }
      });
    });
  }