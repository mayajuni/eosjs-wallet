const Eos = require('eosjs');
const ecc = Eos.modules.ecc;

const config = {
    httpEndpoint: 'https://proxy.eosnode.tools',
    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
};

async function updateAuth(accountName, changePermissionName, changePublicKey, eosio_code=false) {
    const actionData = {
        account: 'eosio',
        name: 'updateauth',
        authorization: [
            {
                actor: accountName,
                permission: 'owner'
            }
        ],
        data: {
            account: accountName,
            permission: changePermissionName,
            parent: changePermissionName === 'active' ? 'owner' : '',
            auth: {
                threshold: 1,
                keys: [{
                    key: changePublicKey,
                    weight: 1,
                }],
                accounts: [],
                waits: []
            }
        }
    };

    if(eosio_code) {
        actionData.data.auth.accounts.push({
            permission: {
                actor: accountName,
                permission: 'eosio.code'
            },
            weight: 1
        })
    }

    return await Eos(config).transaction({
        actions: [actionData]
    });
}


const main = async () => {
    const name = '';
    const permiss = 'active';
    const privateKey = await ecc.randomKey();
    const publicKey = ecc.privateToPublic(privateKey);
    config.keyProvider = '';
    const a = await updateAuth(name, permiss, publicKey);
    console.log('publicKey: ', publicKey);
    console.log('privateKey: ', privateKey);
    console.log(a);
};

main();
