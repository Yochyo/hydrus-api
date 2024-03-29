import HydrusApi from './hydrus-api';

// const api = new HydrusApi({ host: 'http://localhost:47869/', accessKey: 'ef78e3862e8848347ba9ad463326aeceaed47ad24e20699a410061f8176692aa' });
const api = new HydrusApi({ host: 'https://desktop-hp.peacock-boa.ts.net/', accessKey: '1961a1878a2e8f8899ac992805b8daa415fbc514f412966f26e7c59318e9f876' });
void (async () => {
  // await api.searchFiles({
  //   tags: ['comm:completed', 'character:sherry'],
  // })
  const a = await api.getApiVersion();
  console.log(JSON.stringify(a));
  // console.log(
  //   await api.requestNewPermissions({
  //     name: 'api',
  //     basicPermissions: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  //   })
  // );
})();

// todo tag helper class (negate with -, system predicates...)
