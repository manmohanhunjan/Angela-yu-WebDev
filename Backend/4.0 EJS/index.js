import express from 'express'

const app = express()

app.get('/', (req, res) => {
    const today = new Date()
    const day = today.getDay()

    // console.log(day)
    let type = ''
    let adv = ''

    day === 0 || day === 6
        ? ((type = 'the weekend'), (adv = "it's time to have fun"))
        : ((type = 'a weekday'), (adv = "it's time to work hard"))

    res.render('index.ejs', {
        dayType: type,
        advice: adv,
    })
})

app.listen(3000, () => {
    console.log('Server started on port http://localhost:3000')
})
