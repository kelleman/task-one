const app = require('express')();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.status(200).send({
        slackUsername: 'Kelleman',
        backend: true,
        age: 27,
        bio: 'My name is Atser Godfrey Tilenenge, i hailed from Benue state Nigeria, a university graduate and Tech enthusiast'
    });
});
app.listen(port, () => {
    console.log(`listening at https://localhost:${port}`);
});