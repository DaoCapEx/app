
export default class Response {
    
    static sendEmptyResponse(res) {
        return res.status(200).send();
    };

    static sendErrorResponse(res, message, statusCode) {

        //Log error to the console.
        // eslint-disable-next-line no-console
        console.error(`Error: ${statusCode} ${message}`);
        return res.status(statusCode || '500').send({ message: message || 'Server Error.' });

    }

    static sendErrorResponse(res, error) {

        if(!error){
            throw new Error(`error is null`);
        }

        if(!(error instanceof Error)){
            throw new Error(`error should be an instanceof Error. It is currently an instanceof ${error.constructor.name}`)
        }

        return this.sendErrorResponse(res, error.message, error.code);
    }

    sendItemResponse(res, item) {
        return res.status(200).send(item);
    }

    sendFileResponse(res, file) {
        /** create read stream */
        // const gfs = new Mongoose.mongo.GridFSBucket(mongoose.connection.db, {
        //     bucketName: 'uploads',
        // });

        // const readstream = gfs.openDownloadStreamByName(file.filename);

        /** set the proper content type */
        res.set('Content-Type', file.contentType);
        res.status(200);
        /** return response */
        readstream.pipe(res);
    }
}



