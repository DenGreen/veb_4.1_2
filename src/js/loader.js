import GameSavingLoader from './gameSavingLoader';

const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

export default async function loader(str) {
  try {
    let saving = await GameSavingLoader.load(str);
    console.log(saving);
    return saving;
  } catch(err) {
    console.log(err);
    return err;
  }
};

loader(data);