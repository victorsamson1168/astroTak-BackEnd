const exp = require("express");
const router = exp.Router();

const testimonialDataArray = [
  {
    name: "Victor samson",
    profile_pic:
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    place: "Nairobi,Ramsoner",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illum expedita, maxime amet, corporis repellendus assumenda ipsam etnumquam molestiae eius consequuntur ab officia deserunt eveniet nonsint impedit aliquam!",
  },
  {
    name: "Krishna samson",
    profile_pic:
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    place: "Ranchi,Jharkhand",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illum expedita, maxime amet, corporis repellendus assumenda ipsam etnumquam molestiae eius consequuntur ab officia deserunt eveniet nonsint impedit aliquam!",

  },
  {
    name: "Joseph samson",
    profile_pic:
      "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png",
    place: "Noida,UP",
    testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, illum expedita, maxime amet, corporis repellendus assumenda ipsam etnumquam molestiae eius consequuntur ab officia deserunt eveniet nonsint impedit aliquam!",

  },
];

router.get("/", async (req, res) => {
  try {
    res.status(200).json({
      httpStatus: "OK",
      httpStatusCode: 200,
      success: true,
      message: "Question categories fetched successfully.",
      apiName: "Get all testimonial.",
      data: testimonialDataArray,
    });
  } catch (err) {
    res.status(400).json("something went wrong");
    console.log("something went wrong", err);
  }
});

module.exports = router;
