const Eos = require('eosjs');

const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
    keyProvider: ['5JQBXN6FxToDa4ZVJXVpqz36HS5HrJTQMDJoqyvB1R3nD9XJt9F'],
};

const publicKey = 'EOS5HDF1yC7mvLdqxiRN6uzk7gp1j4uw8o41mahnVSZ7BPezSfkHe'


Eos(config).transaction(tr => {
    tr.newaccount({
        creator: 'zxcvbasdfg11',
        name: 'zxcvbasdfg15',
        owner: publicKey,
        active: publicKey
    });

    tr.buyrambytes({
        payer: 'zxcvbasdfg11',
        receiver: 'zxcvbasdfg15',
        bytes: 8192
    });

    tr.delegatebw({
        from: 'zxcvbasdfg11',
        receiver: 'zxcvbasdfg15',
        stake_net_quantity: '1.0000 EOS',
        stake_cpu_quantity: '1.0000 EOS',
        transfer: 0
    });
}).then(console.log).catch(console.error);
