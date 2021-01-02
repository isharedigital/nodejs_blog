const Course = require('../models/Course')

class SiteController {
    home(req, res) {

        Course.find({}, function(err, courses) {
            if (!err) {
                res.json(courses)
            } else {
                res.status(400).json({ errors: 'ERROR' })
            }
        })
        // res.render('home')
    }
    search(req, res) {
        res.render('search')
    }
    contact(req, res) {
        res.render('contact')
    }
}

module.exports = new SiteController;