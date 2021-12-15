export const isEthereumInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum);
};

export const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(isEthereumInstalled() && ethereum.isMetaMask);
};

export const getAccounts = async () => {
    if(isEthereumInstalled()){
    return await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
}

export const onAccountChanged = (callback) => {
    if (isEthereumInstalled()) {
        window.ethereum.on('accountsChanged', (accounts) => {
           if(callback){
               callback();
           }
        });
    }
}