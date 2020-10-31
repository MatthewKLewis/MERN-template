const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const spellSchema = new Schema({
    name : {
        type: String,
        unique: true,
        trim: true,
        minlength: 2
    },
    element : {
        type: String,
        trim: true,
        minlength: 2
    },
    manaCost : {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});

const Spell = mongoose.model('Spell', spellSchema);

module.exports = Spell;