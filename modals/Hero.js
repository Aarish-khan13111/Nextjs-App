const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "please name the super hero"],
    unique: true,
    trim: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, "please keep real name"],
  },
});

module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
