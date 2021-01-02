const newsRouter = require('./news.router.js')
const siteRouter = require('./site.js')

function router(app) {

    app.use('/news', newsRouter)
    app.use('/', siteRouter)

    // app.get('/search', (req, res) => {
    //     res.render('search')
    // })

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.render('search')
    // })
}

module.exports = router;