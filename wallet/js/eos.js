const config = {
    httpEndpoint: 'https://api-kylin.eosasia.one',
    chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
};

function getAccountInfo() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    const accountName = document.getElementById('accountName').value;
    if (accountName) {
        Eos(config).getAccount(accountName).then(account => {
            document.getElementById('account').innerHTML = account.account_name;

            const stake = account.voter_info ? account.voter_info.staked / 10000 : 0;
            const unstake = Number(account.core_liquid_balance.replace('EOS', ''));
            const refund = account.refund_request ?
                Number(account.refund_request.net_amount.replace('EOS', '')) + Number(account.refund_request.cpu_amount.replace('EOS', ''))
                : 0;
            const total = stake + unstake + refund;

            document.getElementById('total').innerHTML = total + ' EOS';
            document.getElementById('stake').innerHTML = stake + ' EOS';
            document.getElementById('unstake').innerHTML = unstake + ' EOS';
            document.getElementById('refund').innerHTML = refund + ' EOS';

            document.getElementById('cpu').innerHTML =
                account.cpu_limit.used + 'up / ' + account.cpu_limit.max + 'up (' + account.total_resources.cpu_weight + ')';
            document.getElementById('net').innerHTML =
                account.net_limit.used + 'bytes / ' + account.net_limit.max + 'bytes (' + account.total_resources.net_weight + ')';
            document.getElementById('ram').innerHTML =
                account.ram_quota + 'bytes / ' + account.ram_quota + 'bytes';

            document.getElementById('info').style.display = 'block';
        }).catch(e => {
            document.getElementById('error').style.display = 'block';
            document.getElementById('errorMessage').innerHTML = e.message;
        });
    } else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorMessage').innerHTML = 'EOS Account Name을 입력해주세요.';
    }
}
