function getAccountInfo() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('error').style.display = 'none';

    const accountName = document.getElementById('accountName').value;
    if(accountName) {
        document.getElementById('info').style.display = 'block';
    } else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('errorMessage').innerHTML = 'EOS Account Name을 입력해주세요.';
    }
}
