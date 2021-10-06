const exp = require("express");
const router = exp.Router();


const reportsDataArray = [
  {
    "name":"PalmReading",
    "productCode":"HS",
    "imageUrl":"https://image.winudf.com/v2/image1/Y29tLmludGVybmV0ZGVzaWduem9uZS5wYWxtcmVhZGluZ19zY3JlZW5fMF8xNjI0MDAwOTMyXzA4MQ/screen-0.jpg?fakeurl=1&type=.jpg",
    "description":"In-depth Horoscope will give you detailed life prediction reports and remedieson everything going to happen in 25 years of your life.",
    "availableLanguages":[
       
    ],
    "indepthPoints":[
       
    ],
    "price":"251",
    "offerPrice":"51"
 },
  {
     "name":"Horoscope",
     "productCode":"HS",
    //  "imageUrl":"https://assets.sentinelassam.com/h-upload/2021/09/01/500x300_251886-234636-ezgifcom-webp-to-jpg1.webp?w=400&dpr=2.6",
    "imageUrl":"https://gumlet.assettype.com/thebridgechronicle%2F2021-06%2F49840adb-604f-456a-8268-fcb5a25d2ac2%2FBC_Article_Banner__7_.png?rect=0%2C0%2C1920%2C1080&format=auto",

     "description":"In-depth Horoscope will give you detailed life prediction reports and remedieson everything going to happen in 25 years of your life.",
     "availableLanguages":[
        
     ],
     "indepthPoints":[
        
     ],
     "price":"321",
     "offerPrice":"51"
  },
  {
    "name":"futurePrediction",
    "productCode":"HS",
    "imageUrl":"https://gumlet.assettype.com/freepressjournal/2020-05/bbaca7f9-3e1a-4bdf-8d44-e74787b17d7f/clock_5147022_960_720.jpg?format=webp&w=400&dpr=2.6",
    "description":"In-depth Horoscope will give you detailed life prediction reports and remedieson everything going to happen in 25 years of your life.",
    "availableLanguages":[
       
    ],
    "indepthPoints":[
       
    ],
    "price":"234",
    "offerPrice":"51"
 }
]

// router.get("/:id", (req, res) => {});

router.get("/", async (req, res) => {
  try {
    res.status(200).json(
      {
        "httpStatus":"OK",
        "httpStatusCode":200,
        "success":true,
        "message":"Services fetched successfully.",
        "apiName":"Get all services.",
        "data":{
           "services":reportsDataArray
        }
     }
    );
  } catch (err) {
    res.status(400).json("something went wrong");
    console.log("something went wrong", err);
  }
});

module.exports = router;
