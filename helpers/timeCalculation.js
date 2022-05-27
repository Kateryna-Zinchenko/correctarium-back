 const timeCalculation = (language, count, mimetype) => {

    let speed;
    let time;

    if (language === "uk" || language === "ru") {
        speed = 1333;
    } else if (language === "en"){
        speed = 333;
    }

        if (mimetype === ".doc" || mimetype === ".docx" || mimetype === ".rtf" || mimetype === undefined) {
            time = (count / speed + 0.5);
            time = Math.floor(time * 100) / 100;
            return time <= 1 ? 1 : time;
        } else {
            time = (count / speed + 0.5) * 1.2;
            time = Math.floor(time * 100) / 100;
            return time <= 1 ? 1 * 1.2 : time;
        }    

}

export default timeCalculation;