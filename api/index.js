import express from 'express';
const app = express();

if(!process.env.PORT){
    throw new Error("Cannot run the API service. Port not specified")
}

app.get('/', function (req, res) {
    res.send({
        status: "ok"
    })
});

app.listen(process.env.PORT, () => {
    console.log(`DCX api started at port ${process.env.PORT}`)
})