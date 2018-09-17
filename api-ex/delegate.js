const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    keyProvider: ['5JQBXN6FxToDa4ZVJXVpqz36HS5HrJTQMDJoqyvB1R3nD9XJt9F'],
};

Eos(config).transaction(tr => {
   tr.delegatebw({
       from: 'zxcvbasdfg11',
       receiver: 'zxcvbasdfg12',
       stake_cpu_quantity: '0.1000 EOS',
       stake_net_quantity: '0.1000 EOS',
       transfer: 0,
   });
})
    .then(console.log)
    .catch(console.error);
