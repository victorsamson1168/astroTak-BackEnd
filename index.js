const exp = require("express");
const Banner =require("./appRoutes/banner");
const Horoscope =require("./appRoutes/horoscope");
const Astro =require("./appRoutes/astrologerDetail");
const Reports =require("./appRoutes/reports");
const Questions =require("./appRoutes/questions");
const Testimonial =require("./appRoutes/testimonial");
const dotenv=require("dotenv");
const cors=require("cors");
dotenv.config();

app = exp();
app.use(exp.json());
app.use(cors());

app.use("/banner",Banner);
app.use("/horoscope",Horoscope);
app.use("/astrologer",Astro);
app.use("/reports",Reports);
app.use("/questions",Questions);
app.use("/testimonials",Testimonial);

app.listen(process.env.PORT,()=>{
console.log(`listning on port ${process.env.PORT}`)});


app.get("/",async(req,res)=>{
    try{
        res.status(200).json({ status: "success", message: "Welcome to the API...test direct push new"}).end();
    }
    catch(err)
    {
        res.status(400).send("something went wrong");
        console.log("something went wrong",err);
    }
});