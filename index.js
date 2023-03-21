var express = require('express');
var app = express();

app.use(express.json());

const PORT = 8080;

app.listen(PORT, ()=> {
    console.log("It is Live http://localhost:" + PORT);
});

app.post("/express/:id", (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;

    if (!name){
        res.status(418).send("Send name");
    }
    else{
        res.send(`Entered Name Is ${name}`);
    }
})
