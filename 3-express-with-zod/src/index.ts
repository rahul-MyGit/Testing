import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a : z.number(),
    b: z.number()
});

app.post('/sum', (req,res) => {
    const response = sumInput.safeParse(req.body);

    if(!response.success){
        return res.status(411).json({
            message: "Invalid inputs"
        });
    }

    const ans = response.data.a + response.data.b;

    res.json({
        ans
    });
});

app.get('/sum', (req,res) => {
    const response = sumInput.safeParse({
        a : Number(req.headers["a"]),
        b: Number(req.headers["b"])
    });

    if(!response.success) {
        return res.status(411).json({
            message: "Invalid inputs"
        });
    }

    const ans = response.data.a + response.data.b;

    res.json({
        ans
    });
});
