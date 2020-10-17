export default function read(data) {
    return new Promise((resolve, reject) => {
      // эмуляция чтения файла
      setTimeout(() => {
        if(!data){
          reject('Передан пустой элемент');
        }
        return (input => {
          const buffer = new ArrayBuffer(input.length * 2);
          const bufferView = new Uint16Array(buffer);
          for (let i = 0; i < input.length; i++) {
            bufferView[i] = input.charCodeAt(i);
          }
          resolve(buffer);
        })(data);
      }, 1000); 
    });
  }