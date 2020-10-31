const router = require('express').Router();
let Spell = require('../models/spell.model');

//GET ALL
router.route('/').get((req, res) => {
    Spell.find()
        .then(spells => res.json(spells))
        .catch(err => res.status(400).json('Error: ' + err))
});

//GET SPECIFIC SPELL
router.route('/:id').get((req, res) => {
    Spell.findById(req.params.id)
        .then(spells => res.json(spells))
        .catch(err => res.status(400).json('Error: ' + err))
});

//ADD SPELL
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const element = req.body.element;
    const manaCost = req.body.manaCost;

    const newSpell = new Spell({name, element, manaCost});
    
    newSpell.save()
        .then(() => res.json('Spell Added' + res))
        .catch(err => res.status(400).json('Error: ' + err))
});

//UPDATE SPECIFIC SPELL
router.route('/update/:id').post((req, res) => {
    Spell.findById(req.params.id)
        .then(spell => {
            spell.name = req.body.name;
            spell.element = req.body.element;
            spell.manaCost = req.body.manaCost;

            spell.save()
                .then(() => res.json('Spell updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
});

//DELETE SPECIFIC SPELL
router.route('/delete/:id').delete((req, res) => {
    Spell.findByIdAndDelete(req.params.id)
        .then(() => res.json('Spell Deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;