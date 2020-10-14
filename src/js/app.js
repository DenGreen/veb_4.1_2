import GameSavingLoader from './gameSavingLoader';

(async () => {
  try {
    let saving = await GameSavingLoader.load();
    console.log(saving);
  } catch(err) {
    console.log(err);
  }
})();