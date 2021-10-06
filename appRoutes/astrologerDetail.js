const exp = require("express");
const router = exp.Router();

const horoscopeDataArray = [
  {
    id: 31,
    urlSlug: "anshika-saxena",
    namePrefix: null,
    firstName: "anshika",
    lastName: "saxena",
    aboutMe: "Hello I am here",
    profliePicUrl:
      "https://www.fsia.in/upload_pic/1602332037profile%20pic.jpg",
    experience: 1,
    languages: ["hindi", "english", "nepali"],
    minimumCallDuration: 5,
    minimumCallDurationCharges: 100,
    additionalPerMinuteCharges: 10.0,
    isAvailable: true,
    rating: 6.3,
    skills: ["vedic","astrology","taro card reading","palmistry"],
    isOnCall: false,
    images: {
      large: {
        imageUrl: "",
        id: 92,
      },
      medium: {
        imageUrl:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        id: 123,
      },
    },
    availability: {
      days: ["MON", "WED", "THU", "FRI"],
      slot: {
        toFormat: "PM",
        fromFormat: "AM",
        from: "10",
        to: "7",
      },
    },
  },
  {
    id: 23,
    urlSlug: "victor-samson",
    namePrefix: null,
    firstName: "Rahul",
    lastName: "Verma",
    aboutMe: "Hello I am here",
    profliePicUrl:
      "https://gumlet.assettype.com/afaqs%2Fimport%2Fall%2Fnews%2Fimages%2Fnews_story_grfx%2F2018%2F05%2F52859%2FKaran-Kumar.jpg?auto=format%2Ccompress&w=640&dpr=1.3",
    experience: 10,
    languages: ["hindi", "english", "bengali"],
    minimumCallDuration: 5,
    minimumCallDurationCharges: 150,
    additionalPerMinuteCharges: 10.0,
    isAvailable: true,
    rating: 4.9,
    skills: ["taro card reading","palmistry"],
    isOnCall: false,
    images: {
      large: {
        imageUrl: "",
        id: 92,
      },
      medium: {
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVcY9tfglawLyC9WGWIsdgr2GIb3ajDhdOvw&usqp=CAU",
        id: 123,
      },
    },
    availability: {
      days: ["MON", "WED", "THU", "FRI"],
      slot: {
        toFormat: "PM",
        fromFormat: "AM",
        from: "10",
        to: "7",
      },
    },
  },
  {
    id: 23,
    urlSlug: "Manu-Sahi",
    namePrefix: null,
    firstName: "Neha",
    lastName: "Sinha",
    aboutMe: "Hello I am here",
    profliePicUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOYa39OyqOf7wKhV1iqds4HLJazCkEaq6yVP1jtxeKnL6NPIMKiG7w8gKC5mftEX1Iy8&usqp=CAU",
    experience: 15,
    languages: ["hindi", "english", "nepali"],
    minimumCallDuration: 5,
    minimumCallDurationCharges: 5,
    additionalPerMinuteCharges: 10.0,
    isAvailable: true,
    rating: 3.1,
    skills: ["vastu","future prediction","taro card reading","palmistry"],
    isOnCall: false,
    images: {
      large: {
        imageUrl: "",
        id: 92,
      },
      medium: {
        imageUrl:
          "https://tak-astrotak-av-dev.s3.ap-south-1.amazonaws.com/astro-images/agents/1.png",
        id: 123,
      },
    },
    availability: {
      days: ["MON", "WED", "THU", "FRI"],
      slot: {
        toFormat: "PM",
        fromFormat: "AM",
        from: "10",
        to: "7",
      },
    },
  },
  {
    id: 23,
    urlSlug: "RA-Sahi",
    namePrefix: null,
    firstName: "Kok",
    lastName: "Shini",
    aboutMe: "Hello I am here",
    profliePicUrl:
      "https://gumlet.assettype.com/afaqs%2Fimport%2Fall%2Fnews%2Fimages%2Fnews_story_grfx%2F2018%2F12%2F54044%2FNimesh-Shah.jpg?auto=format&fit=fill&bg=000000&q=35&w=1200",
    experience: 3,
    languages: ["english"],
    minimumCallDuration: 5,
    minimumCallDurationCharges: 750,
    additionalPerMinuteCharges: 10.0,
    isAvailable: true,
    rating: 3.1,
    skills: ["taro card reading","palmistry","vastu","future prediction"],
    isOnCall: false,
    images: {
      large: {
        imageUrl: "",
        id: 92,
      },
      medium: {
        imageUrl:
          "https://tak-astrotak-av-dev.s3.ap-south-1.amazonaws.com/astro-images/agents/1.png",
        id: 123,
      },
    },
    availability: {
      days: ["MON", "WED", "THU", "FRI"],
      slot: {
        toFormat: "PM",
        fromFormat: "AM",
        from: "10",
        to: "7",
      },
    },
  },
  {
    id: 29,
    urlSlug: "Manu-Sahi",
    namePrefix: null,
    firstName: "Manish",
    lastName: "Mittal",
    aboutMe: "Hello I am here",
    profliePicUrl:
      "http://www.cse.iitm.ac.in/images/AC.jpg",
    experience: 15,
    languages: ["hindi", "english", "nepali"],
    minimumCallDuration: 5,
    minimumCallDurationCharges: 345,
    additionalPerMinuteCharges: 10.0,
    isAvailable: true,
    rating: 3.1,
    skills: ["vastu","future prediction","taro card reading","palmistry"],
    isOnCall: false,
    images: {
      large: {
        imageUrl: "",
        id: 92,
      },
      medium: {
        imageUrl:
          "https://tak-astrotak-av-dev.s3.ap-south-1.amazonaws.com/astro-images/agents/1.png",
        id: 123,
      },
    },
    availability: {
      days: ["MON", "WED", "THU", "FRI"],
      slot: {
        toFormat: "PM",
        fromFormat: "AM",
        from: "10",
        to: "7",
      },
    },
  },
  {
    id: 23,
    urlSlug: "RA-Sahi",
    namePrefix: null,
    firstName: "Joshi",
    lastName: "Patel",
    aboutMe: "Hello I am here",
    profliePicUrl:
      "https://www.pbsiddhartha.ac.in/pbs_@admin/admin/contentimages/03-10-2018-1538539162chv.jpg",
    experience: 3,
    languages: ["english"],
    minimumCallDuration: 5,
    minimumCallDurationCharges: 530,
    additionalPerMinuteCharges: 10.0,
    isAvailable: true,
    rating: 3.1,
    skills: ["taro card reading","palmistry","vastu","future prediction"],
    isOnCall: false,
    images: {
      large: {
        imageUrl: "",
        id: 92,
      },
      medium: {
        imageUrl:
          "https://tak-astrotak-av-dev.s3.ap-south-1.amazonaws.com/astro-images/agents/1.png",
        id: 123,
      },
    },
    availability: {
      days: ["MON", "WED", "THU", "FRI"],
      slot: {
        toFormat: "PM",
        fromFormat: "AM",
        from: "10",
        to: "7",
      },
    },
  },
];

router.get("/", async (req, res) => {
  try {
    res.status(200).json({
      httpStatus: "OK",
      httpStatusCode: 200,
      success: true,
      message: "fetched successfully",
      apiName: "Get all astrologer details",
      data: horoscopeDataArray,
    });
  } catch (err) {
    res.status(400).json("something went wrong");
    console.log("something went wrong", err);
  }
});

module.exports = router;
