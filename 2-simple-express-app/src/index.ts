import express from "express";

//export it so that our library can import it
export const app = express();

app.use(express.json());

app.post("/sum", (req,res)=>{
    const a = req.body.a;
    const b = req.body.b;
    const ans = a + b;

    res.json({
        ans
    });
});


//No need to write app.listen(3000);
// As if we have a server that run when we write npm run test
// and have another terminal to run same cmd then it won't work
// that's why we never start a server while running the test and move
// the running port logic to somewhere else
