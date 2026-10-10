const mongoose = require("mongoose");

const beerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
    },
    style: { type: String, required: [true, "El estilo es obligatorio"] },
    abv: { type: Number, required: true, min: 0 },
    ibu: { type: Number, min: 0 },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, default: 0, min: 0 },
    image: {
      type: String,
      default: "https://via.placeholder.com/150?text=Cerveza",
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

module.exports = mongoose.model("Beer", beerSchema);
