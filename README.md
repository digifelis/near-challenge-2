# near-challenge-2
https://near-challenge-2.vercel.app/

https://github.com/digifelis/near-challenge-2/raw/main/video.mp4
 
[![Near Knowledge Demo](https://raw.githubusercontent.com/digifelis/near-challenge-2/main/screen2.png)](https://loom.com/share/80b022ad7358465b8daaf8236473e673)

### How to develop
## Compile the contract
```bash
cargo build --target wasm32-unknown-unknown --release
```

## Deploy to testnet
```bash
near dev-deploy --wasmFile ./target/wasm32-unknown-unknown/release/hesapmakinasi.wasm
```

## Test to smartcontract
```bash
near view dev-1650140529355-49775129596989 sayi '{}' --account-id mansurbestas.testnet
```

```bash
near call hesap.mansurbestas.testnet topla '{\"a\": 1, \"b\": 5}' --accountId mansurbestas.testnet
```

# Deploy to production

```bash
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
    contract = new nearApi.Contract(wallet.account(), '<contract address>', {
        viewMethods: ["sayi"],
        changeMethods: ['topla', 'carpma', 'bolme', 'cikar']
      });
    if(wallet.isSignedIn()){
        baglan_button.textContent='sign out';
    }
    
}


baglan_button.addEventListener('click', async function() {
    console.log(wallet);
    if(!wallet.isSignedIn()){
        wallet.requestSignIn(
            "<contract addressv>" // contract address
        );
    } else {
        wallet.signOut();
        baglan_button.textContent="sign in";
    }
});
```
