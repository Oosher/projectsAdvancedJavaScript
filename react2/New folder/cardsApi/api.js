
import  express  from "express";

import cors from 'cors';

import bodyParser from "body-parser";

import  jwt  from "jsonwebtoken";

import {v4 as uuidv4 }from "uuid"


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
            user_id: "4235234234mfnjasdasdry23",
            }
];


    const users = [
    {
        name: {
        first: "Tzach",
        middle: "",
        last: "Dabush",
        },
        phone: "055-5555555",
        email: "admin@admin.com",
        password: "Abc123!",
        address: {
        state: "Haifa",
        country: "Israel",
        city: "Haifa",
        street: "HaNasi",
        zip: 123456,
        houseNumber: 12,
        },
        image: {
        url: "www.example.com",
        alt: "profile image",
        },
        isBusiness: true,
        isAdmin:true,
        user_id: "4235234234mfnjrb2h3vbry23",
    },
    {
        name: {
        first: "Tzach1",
        middle: "",
        last: "Dabush1",
        },
        phone: "055-5555555",
        email: "admin1@admin.com",
        password: "Abc123!",
        address: {
        state: "Haifa",
        country: "Israel",
        city: "Haifa",
        street: "HaNasi",
        zip: 123456,
        houseNumber: 12,
        },
        image: {
        url: "www.example.com",
        alt: "profile image",
        },
        isBusiness: true,
        isAdmin:false,
        user_id: "4235234234mfnjasdasdry23",
    },
];


const api = express();





api.use(
    cors({
        origin:"*",
    }),
    bodyParser.json(),
    express.json(),
)


const key = "sec"

api.get("/getcards",(req,res)=>{

    res.send(cardsArray);

})


const verifyToken = (tokenFromClient) => {
    try {
        const userDataFromPayload = jwt.verify(tokenFromClient, key);
        return userDataFromPayload;
    } catch (error) {
        return null;
    }
};

api.post("/users/login", (req, res) => {
    const tokenFromClient = req.header("x-auth-token");

    if (tokenFromClient) {
        const userData = verifyToken(tokenFromClient);
        if (userData) {
        // User is already logged in, so send back the same token
        res.send(tokenFromClient);
        return;
        }
    }

    // User is not logged in, so check if the email and password are valid
    const { email, password } = req.body;
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
        // User not found or password incorrect
        res.status(401).json({ message: "Invalid email or password" });
        return;
    }

    // User found, so generate a new token and send it back
    const userDataForToken = { 
        email: user.email, 
        isAdmin: user.isAdmin ,
        business: user.isBusiness,
        name : user.name.first +" " + user.name.last, 
        id : user.user_id,
};
    const token = jwt.sign(userDataForToken, key);

    res.send(token);
});


api.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.user_id = uuidv4(); // generate a new UUID and add it to the newUser object
    users.push(newUser);
    res.status(201).send({ message: "User added successfully." });
});




api.listen("3001",()=>{
    console.log("is listening");
})




