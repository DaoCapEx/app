export class UnauthorizedError extends Error{
    constructor(message){
        super(message);
        this.code = 401;
    }
}

export class BadDataError extends Error{
    constructor(message){
        super(message);
        this.code = 400;
    }
}