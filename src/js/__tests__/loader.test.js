import loader from "../loader";

test("loader должен возвращать строку", async () => {
  const data = '{"id":9}'
  const response = await loader(data);
  const result ='{"id":9}';
  await expect(response).toEqual(result);
});

test("loader должен возвращать строку", async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}'
  const response = await loader(data);
  const result ='{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';
  await expect(response).toEqual(result);
});

test("loader должен выбрасовать ошибку при передаче пустого элемента", async () => {
  const data = '';
  const response = await loader(data);
  const result = 'Передан пустой элемент';
  await expect(response).toEqual(result);
});