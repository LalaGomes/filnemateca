module.exports = (req, res, next) => {
    let data = new Date();
    let hora = data.getHours();
    if (hora < 8 || hora >= 20) {
        res.send("Já está tarde.. vá para su casa");
    } else {
        console.log('next indo')
        next();
        console.log('next voltando')
    }
};