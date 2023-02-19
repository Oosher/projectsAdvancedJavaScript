
import { Grid, Typography } from '@mui/material';
import React from 'react'
import InfoCard from './card/InfoCard'

export default function Cards() {

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

const deleteFunc = (bizNumber)=>{

    console.log("delete"+bizNumber);
}

const likeFunction = (bizNumber,likes,event)=>{
    likes.push(1);
    console.log("like "+likes.length+" " +bizNumber);
    event.target.style.color="red";
    document.getElementById(bizNumber).innerHTML=likes.length;  
    console.log(document.getElementById(bizNumber).innerHTML);

}

const editFunction = (bizNumber)=>{

    console.log("edit"+bizNumber);

}

const phoneFunction = (phone)=>{

    console.log("call"+phone);
}

        //conditional rendering

        if (cardsArray===undefined || !cardsArray.length) {

            return <Typography variant="h1" color="initial" textAlign="center"> We did not found any products </Typography>
            
        }

            // if in a different format
            //x==3?<Typography variant="body1" color="initial"></Typography>:null;

    return (
    <Grid container spacing={10} justifyContent="center">
        {
            cardsArray.map((card)=>{

                return <Grid item xs={12} md={4} lg={3} key={card._id}> <InfoCard card={card} deleteFunc={deleteFunc} likeFunction={likeFunction} editFunction={editFunction} phoneFunction={phoneFunction} /></Grid>
            })
        }
    </Grid>
    )
    }
