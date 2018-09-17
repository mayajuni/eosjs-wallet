const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
};

Eos(config).getTableRows({
    json: true,
    code: 'eosio',
    scope: 'eosio',
    table: 'rammarket'
}, (error, tableInfo) => {
    if (error) {
        console.error(error);
    }

    console.log(tableInfo.rows);
});

Eos(config)
    .getTableRows({
        json: true,
        code: 'eosio',
        scope: 'eosio',
        table: 'rammarket'
    })
    .then(console.log)
    .catch(console.error);
