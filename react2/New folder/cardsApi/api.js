
import  express  from "express";

import cors from 'cors';

import bodyParser from "body-parser";

const api = express();


api.use(
    cors({
        origin:"*",
    }),
    bodyParser.json(),
)