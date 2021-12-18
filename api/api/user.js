import express from 'express';
import Response from '../utils/response';
import { UserService } from '../service/index';

// Import Errors
import { BadDataError } from '../utils/errors';

const app = express();


/**
 * Create a new user
 */

app.post('/api/user/register', async (req, res) => {

    try {

        const { publicAddress, username } = req.body;

        if (!publicAddress) {
            return Response.sendErrorResponse(res, new BadDataError(`publicAddress is null in request body.`))
        }

        // We just save this user in the DB. This user is unverified. 
        const user = await UserService.create({ publicAddress, username });

        return Response.sendItemResponse(res, { user });
    } catch (e) {
        return Response.sendErrorResponse(res, e);
    }
})


/**
 * Get user
 */
app.get('/api/user/:publicAddressOrUsername', async (req, res) => {

    try {

        const user = await UserService.findOne({
            $or: [
                {
                    publicAddress:
                    {
                        $eq: req.params.publicAddressOrUsername
                    }
                },
                {
                    username:
                    {
                        $eq: req.params.username
                    }
                }
            ]
        });

        return Response.sendItemResponse(res, { user });
    } catch (e) {
        return Response.sendErrorResponse(res, e);
    }
})


/**
 * Auth a user
 */

app.post('/api/user/authenticate/:publicAddress', async (req, res) => {
    // get the signed token from nonce and then reset the nonce. 
    try {
        const { signature } = req.body;
        const user = await UserService.authenticateUser(publicAddress, signature);
        return Response.sendItemResponse(res, { user });
    } catch (e) {
        return Response.sendErrorResponse(res, e);
    }
});
