const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const spell = require('./spell.model').schema;

const wizardSchema = new Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    wand: {
        type: String
    }
}, {
    timestamps: true
});

const Wizard = mongoose.model('Wizard', wizardSchema);

module.exports = Wizard;