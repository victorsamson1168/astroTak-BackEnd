const exp = require("express");
const router = exp.Router();


const horoscopeDataArray = [{
  "name":"aries",
  "date":"Mar 21 - Apr 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%2015-8.png?alt=media&token=90824a34-03f3-4570-b7cc-ea31350a86c5",
  "images":{
     "small":{
        "imageUrl":"",
        "id":34
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":19
     }
  },
  "urlSlug":"aries-daily-horoscope"
},
{
  "name":"taurus",
  "date":"Apr 21 - May 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%205-8.png?alt=media&token=65a5bf8b-950a-4869-acf6-254142335d8e",
  "images":{
     "small":{
        "imageUrl":"",
        "id":35
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":20
     }
  },
  "urlSlug":"taurus-daily-horoscope"
},
{
  "name":"gemini",
  "date":"May 21 - Jun 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%209-8.png?alt=media&token=feee51bd-72b0-47c1-a231-33bd23547078",
  "images":{
     "small":{
        "imageUrl":"",
        "id":36
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":21
     }
  },
  "urlSlug":"gemini-daily-horoscope"
},
{
  "name":"cancer",
  "date":"Jun 21 - Jul 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%2013-8.png?alt=media&token=3708456d-afc6-47c8-be79-63fc8c5a6356",
  "images":{
     "small":{
        "imageUrl":"",
        "id":37
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":22
     }
  },
  "urlSlug":"cancer-daily-horoscope"
},
{
  "name":"leo",
  "date":"Jul 21 - Aug 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%204-8.png?alt=media&token=5a693604-4bd9-4293-8bee-572d1ceb4e4f",
  "images":{
     "small":{
        "imageUrl":"",
        "id":38
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":23
     }
  },
  "urlSlug":"leo-daily-horoscope"
},
{
  "name":"virgo",
  "date":"Aug 21 - Sep 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%208-8.png?alt=media&token=5e4d6d91-99cd-4804-8e9c-48b8dde87c7b",
  "images":{
     "small":{
        "imageUrl":"",
        "id":39
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":24
     }
  },
  "urlSlug":"virgo-daily-horoscope"
},
{
  "name":"libra",
  "date":"Sep 21 - Oct 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%2012-8.png?alt=media&token=4cf1e863-a39c-4d4d-9069-f18fb552cbcb",
  "images":{
     "small":{
        "imageUrl":"",
        "id":40
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":25
     }
  },
  "urlSlug":"libra-daily-horoscope"
},
{
  "name":"scorpio",
  "date":"Oct 21 - Nov 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%206-8.png?alt=media&token=d26c38c0-0d52-4fb8-bbce-d78cc39f5704",
  "images":{
     "small":{
        "imageUrl":"",
        "id":41
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":26
     }
  },
  "urlSlug":"scorpio-daily-horoscope"
},
{
  "name":"sagittarius",
  "date":"Nov 21 - Dec 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%2010-8.png?alt=media&token=b14b34ad-d913-4d72-b135-132e0df66ed5",
  "images":{
     "small":{
        "imageUrl":"",
        "id":42
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":27
     }
  },
  "urlSlug":"sagittarius-daily-horoscope"
},
{
  "name":"capricorn",
  "date":"Dec 21 - Jan 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%207-8.png?alt=media&token=fc514de7-98de-44d5-a7c2-0eeb1add9fd1",
  "images":{
     "small":{
        "imageUrl":"",
        "id":43
     },
     "large":{
        "imageUrl":null,  
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":28
     }
  },
  "urlSlug":"capricon-daily-horoscope"
},
{
  "name":"aquarius",
  "date":"Jan 21 - Feb 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%2011-8.png?alt=media&token=1e26d5f3-49ba-4e8b-bb9f-e60788396a38",
  "images":{
     "small":{
        "imageUrl":"",
        "id":44
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":29
     }
  },
  "urlSlug":"aquarius-daily-horoscope"
},
{
  "name":"pisces",
  "date":"Feb 21 - Mar 20",
  "img":"https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/Asset%2014-8.png?alt=media&token=05c5c510-bf2b-49a7-b97a-d68e60dbb385",
  "images":{
     "small":{
        "imageUrl":"",
        "id":45
     },
     "large":{
        "imageUrl":null,
        "id":null
     },
     "medium":{
        "imageUrl":"",
        "id":30
     }
  },
  "urlSlug":"pisces-daily-horoscope"
}];

router.get("/", async (req, res) => {
  try {
    res.status(200).json(
      {
        "httpStatus":"OK",
        "httpStatusCode":200,
        "success":true,
        "message":"fetched successfully",
        "apiName":"Get all daily horoscopes",
        "data":horoscopeDataArray
     }
    );
  } catch (err) {
    res.status(400).json("something went wrong");
    console.log("something went wrong", err);
  }
});

module.exports = router;
