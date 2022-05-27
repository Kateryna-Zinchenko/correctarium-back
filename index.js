import express from "express";

import priceCalculation from './helpers/priceCalculation.js';
import timeCalculation from './helpers/timeCalculation.js';
import deadlineCalculation from './helpers/deadlineCalculation.js';
import deadlineTimeCalculation from './helpers/deadlineTimeCalculation.js';
import moment from "moment";

const PORT = 5001;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

    const {language, count, mimetype} = req.body
    const price = priceCalculation(language, count, mimetype);
    const time = timeCalculation(language, count, mimetype);
    let startTime = moment();
    const deadline = deadlineCalculation(startTime, time);
    const deadline_time = deadlineTimeCalculation(deadline);

    res.json({
        price, 
        time, 
        deadline, 
        deadline_time});
})

app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT)); 

