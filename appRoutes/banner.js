const exp = require("express");
const router = exp.Router();


const bannerDataArray = [
  {
    id: 1,
    name: "someBanner1",
    landingUrl: "https://www.astrotak.com/ask-question",
    orderType: "REPORT_GENERATION",
    metaData: {
      productCode: "CP",
      productName: "Yearly Horoscope 2020",
      professionalSlug: "career-business-horoscope-report",
    },
    images: {
      medium: {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/This%20banner%20redirects%20to%20(2).png?alt=media&token=daba7e30-5f69-460d-a55d-c11ee08d91f7",
        id: 141,
      },
    },
  },
  {
    id: 2,
    name: "someBanner2",
    landingUrl: "https://www.astrotak.com/vastu",
    orderType: "REPORT_GENERATION",
    metaData: {
      productCode: "CP",
      productName: "Yearly Horoscope 2020",
      professionalSlug: "career-business-horoscope-report",
    },
    images: {
      medium: {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/This%20banner%20redirects%20to.png?alt=media&token=5bd3bcf2-fd99-4867-9cfd-0efa5daf74aa",
        id: 141,
      },
    },
  },
  {
    id: 3,
    name: "someBanner3",
    landingUrl: "https://www.astrotak.com/reports",
    orderType: "REPORT_GENERATION",
    metaData: {
      productCode: "CP",
      productName: "Yearly Horoscope 2020",
      professionalSlug: "career-business-horoscope-report",
    },
    images: {
      medium: {
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/tribal-legacy-tattoo.appspot.com/o/This%20banner%20redirects%20to%20(1).png?alt=media&token=bd3e3223-020a-4e11-91b3-d8111b89d471",
        id: 141,
      },
    },
  },
];

// router.get("/:id", (req, res) => {});

router.get("/", async (req, res) => {
  try {
    res.status(200).json({
      httpStatus: "OK",
      httpStatusCode: 200,
      success: true,
      message: "Banners fetched successfully",
      apiName: "Fetch Banner",
      data: bannerDataArray,
    });
  } catch (err) {
    res.status(400).json("something went wrong");
    console.log("something went wrong", err);
  }
});

module.exports = router;
