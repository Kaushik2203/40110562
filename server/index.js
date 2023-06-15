import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();


app.get('/', (req, res) => {
    res.send('Working..!')
})

app.use(cors());

app.get('/numbers', async (req, res) => {
    const link = req.query.url;
    let train = [];
    let count = 0;
    link.forEach(async (url) => {
        try {
            const {data} = await axios.get(url);
            train.push(...data.numbers)
            count++;
            if(count == link.length) {
                const sort = (a) => {
                    let single = [];
                    a.forEach(element => {
                        if(!single.includes(element)) {
                            single.push(element);
                        }
                    })
                    single.sort((a, b) => a - b);
                    return single;
                }
                train = sort(train);
                res.send(train);
            }
        } catch (error) {
            console.log(error.message);
        }
    })
})

const PORT = 8008;
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})