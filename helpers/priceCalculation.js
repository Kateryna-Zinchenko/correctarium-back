const priceCalculation = (language, count, mimetype) => {
    let factor;
    let minPrice;

    if (language === "uk" || language === "ru") {
        factor = 0.05
        minPrice = 50
    } else if (language === 'en'){
        factor = 0.12
        minPrice = 120
    }
    
    if (language === 'uk' || language === 'ru'){
        if (mimetype === ".doc" || mimetype === ".docx" || mimetype === ".rtf" || mimetype === undefined) {
            return count > 1000 ? count * factor : minPrice;
        } else {
            return count > 1000 ? count * factor * 1.2 : minPrice * 1.2
        }
    }
    
    if (language === 'en'){
        if (mimetype === ".doc" || mimetype === ".docx" || mimetype === ".rtf" || mimetype === undefined) {
            return count > 1000 ? count * factor : minPrice;
        } else {
            return count > 1000 ? count * factor * 1.2 : minPrice * 1.2
        }
    }
}

export default priceCalculation;