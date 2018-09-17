const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
};

// collback
Eos(config).getBlock(5656167, (error, blockInfo) => {
    if(error) {
        console.error(error);
    }

    console.log(blockInfo.transactions[3].trx.transaction.actions);
});

// promise
Eos(config).getBlock(1).then(console.log).catch(console.error);

// parameter object
Eos(config).getBlock({block_num_or_id: 1}).then(console.log).catch(console.error);
