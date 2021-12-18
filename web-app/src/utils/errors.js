export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.code = 401;
    }
}

export class BadDataError extends Error {
    constructor(message) {
        super(message);
        this.code = 400;
    }
}

export class NotImplementedError extends Error {
    constructor(message) {
        super(message);
        this.code = 501;
    }
}

export class WalletNotInstalledError extends Error {
    constructor(message) {
        super(message);
        this.code = 424;
    }
}

export class WalletProviderNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.code = 424;
    }
}
