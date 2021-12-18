import jwt from 'jsonwebtoken';
import { BadDataError } from './errors';

export default class JWT {
    static decode(message) {
        if (!message) {
            throw new BadDataError('message is null');
        }
        return jwt.verify(message, process.env.JWT_TOKEN_SIGNING_SECRET);
    }

    static sign(message, expires) {
        if (!message) {
            throw new BadDataError('message is null');
        }

        if (typeof message === 'string') {
            throw new BadDataError('message should be of type json');
        }

        return jwt.sign(
            {
                data: JSON.stringify(message),
            },
            process.env.JWT_TOKEN_SIGNING_SECRET,
            { expiresIn: expires || '30d' }
        );
    }
}
