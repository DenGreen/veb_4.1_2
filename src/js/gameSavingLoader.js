import read from "./reader";
import json from "./parser";

export default class GameSavingLoader {
  static async load(str) {
    const data = await read(str);
    const value = await json(data);
    return value;
  }
}
