
import  express  from "express";

import cors from 'cors';

import bodyParser from "body-parser";

const cardsArray =[{_id: "daslfjhbasfjba123124123",
            title: "second",
            subtitle: "subTitle",
            description: "testing",
            phone: "050-1111111",
            email: "text@text.com",
            web: "https://www.test.co.il",
            image: {
                url: "assets/images/business-card-top-imag.jpg",
                alt: "image",
            },
            address: {
                state: "TLV",
                country: "Israerl",
                street: "Dizingof",
                houseNumber: 2,
                city: "Tel Aviv",
                zip: 1312,
            },
            bizNumber: 222222,
            likes: [],
            user_id: "4235234234mfnjrb2h3vbry23",
            }
        ,{
            _id: "asdfaa54sdf158as4ass",
            title: "third",
            subtitle: "subTitle",
            description: "testing",
            phone: "050-1111111",
            email: "text@text.com",
            web: "https://www.test.co.il",
            image: {
                url: "assets/images/business-card-top-imag.jpg",
                alt: "image",
            },
            address: {
                state: "TLV",
                country: "Israerl",
                street: "Dizingof",
                houseNumber: 3,
                city: "Tel Aviv",
                zip: 1442,
            }, bizNumber: 333333,
            likes: [],
            user_id: "4235234234mfnjrb2h3vbry23",
            },    {
            _id: "eafeswfwr2326346tf3254f",
            title: "first",
            subtitle: "subTitle",
            description: "testing",
            phone: "050-1111111",
            email: "text@text.com",
            web: "https://www.test.co.il",
            image: {
                url: "assets/images/business-card-top-imag.jpg",
                alt: "image",
            },
            address: {
                state: "TLV",
                country: "Israerl",
                street: "Dizingof",
                houseNumber: 1,
                city: "Tel Aviv",
                zip: 13552,
            },
            bizNumber: 1111111,
            likes: [],
            user_id: "4235234234mfnjrb2h3vbry23",
            }
];

const api = express();


api.use(
    cors({
        origin:"*",
    }),
    bodyParser.json(),
)

api.get("/getcards",(req,res)=>{

    res.send(cardsArray);

})


api.listen("3001",()=>{
    console.log("is listening");
})