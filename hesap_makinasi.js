var baglan_button = document.getElementById("baglan");
var topla_button = document.getElementById("topla");
var carpma_button = document.getElementById("carpma");
var cikarma_button = document.getElementById("cikarma");
var bolme_button = document.getElementById("bolme");

var contract;
var wallet;

async function load() {
    /* connect near */
    const near = await new nearApi.Near({
        keyStore: new nearApi.keyStores.BrowserLocalStorageKeyStore(),
        networkId: 'testnet',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org'
    });
    // connect to the NEAR Wallet
    wallet = new nearApi.WalletConnection(near, 'hesapmakinasi');
    // connect to a NEAR smart contract
    contract = new nearApi.Contract(wallet.account(), 'dev-1650140529355-49775129596989', {
        viewMethods: ["sayi"],
        changeMethods: ['topla', 'carpma', 'bolme', 'cikar']
      });
    if(wallet.isSignedIn()){
        baglan_button.textContent='sign out';
    }
    
}


load();

baglan_button.addEventListener('click', async function() {
    console.log(wallet);
    if(!wallet.isSignedIn()){
        wallet.requestSignIn(
            "dev-1650140529355-49775129596989" // contract address
        );
    } else {
        wallet.signOut();
        baglan_button.textContent="sign in";
    }
});

async function sayi_getir(){
    var response = await contract.sayi({})
    document.getElementById("sonuc").value = response;
}




topla_button.addEventListener('click', async function(){
    var response = await contract.topla({
        "a": parseInt(document.getElementById("birinci_sayi").value),
        "b": parseInt(document.getElementById("ikinci_sayi").value)
        
    })
    sayi_getir();
})

carpma_button.addEventListener('click', async function(){
    var response = await contract.carpma({
        "a": parseInt(document.getElementById("birinci_sayi").value),
        "b": parseInt(document.getElementById("ikinci_sayi").value)
        
    })
    sayi_getir();
})

cikarma_button.addEventListener('click', async function(){
    var response = await contract.cikar({
        "a": parseInt(document.getElementById("birinci_sayi").value),
        "b": parseInt(document.getElementById("ikinci_sayi").value)
        
    })
    sayi_getir();
})
bolme_button.addEventListener('click', async function(){
    var response = await contract.bolme({
        "a": parseInt(document.getElementById("birinci_sayi").value),
        "b": parseInt(document.getElementById("ikinci_sayi").value)
        
    })
    sayi_getir();
})