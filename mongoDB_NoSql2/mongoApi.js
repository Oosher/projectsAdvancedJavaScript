const workEnvironment = require("./Db/databaseService.js");
const {createCard,getCards,getCard} = require("./cards/models/cardsService.js");


const cards = [
    {
        title: "firstZ",
        subtitle: "subTitle",
        description: "testing",
        phone: "050-1111111",
        email: "text@text45.com",
        web: "https://www.test.co.il",
        image: {
        url: "https://www.test.co.il",
        alt: "image",
        },
        address: {
        state: "TLV",
        country: "Israerl",
        street: "Dizingof",
        houseNumber: 1,
        city: "Tel Aviv",
        zip: 1312,
        },
        bizNumber: 1111111,
        likes: [],
        user_id: "5f78c5a5e9a38b2e77c42345",
    },
    {
        title: "second",
        subtitle: "subTitle",
        description: "testing",
        phone: "050-1111111",
        email: "text@text2.com",
        web: "https://www.test.co.il",
        image: {
        url: "https://www.test.co.il",
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
        user_id: "5f78c5a5e9a38b2e77c42345",
    },
    {
        title: "third",
        subtitle: "subTitle",
        description: "testing",
        phone: "050-1111111",
        email: "text@text3.com",
        web: "https://www.test.co.il",
        image: {
        url: "https://www.test.co.il",
        alt: "image",
        },
        address: {
        state: "TLV",
        country: "Israerl",
        street: "Dizingof",
        houseNumber: 3,
        city: "Tel Aviv",
        zip: 1312,
        },
        bizNumber: 333333,
        likes: [],
        user_id: "6123456789abcdef01234563",
    },
    ];



async function test (){

            workEnvironment("development");
            setTimeout(()=>{},1000);
            getCard("646e35f4b1d87159b0c8146a")
        

}

test()