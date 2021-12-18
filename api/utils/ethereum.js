import EthUtil from 'ethereumjs-util';

export default class EthereumUtil {
    // Has the message been signed from this publicAddress
    static validateSigature(publicAddress, message, signature) {
        // We now are in possession of msg, publicAddress and signature. We
        // can perform an elliptic curve signature verification with ecrecover
        const msgBuffer = EthUtil.toBuffer(message);
        const msgHash = EthUtil.hashPersonalMessage(msgBuffer);
        const signatureBuffer = EthUtil.toBuffer(signature);
        const signatureParams = EthUtil.fromRpcSig(signatureBuffer);
        const publicKey = EthUtil.ecrecover(
            msgHash,
            signatureParams.v,
            signatureParams.r,
            signatureParams.s
        );
        const addressBuffer = EthUtil.publicToAddress(publicKey);
        const address = EthUtil.bufferToHex(addressBuffer);

        return address.toLowerCase() === publicAddress.toLowerCase();
    }
}
