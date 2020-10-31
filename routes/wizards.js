const router = require('express').Router();
let Wizard = require('../models/wizard.model');

router.route('/').get((req, res) => {
    Wizard.find()
        .then(wizards => res.json(wizards))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const name = req.body.name;
    const color = req.body.color;
    const wand = req.body.wand;

    const newWizard = new Wizard({name, color, wand});
    
    newWizard.save()
        .then(() => res.json('Wizard Added'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;