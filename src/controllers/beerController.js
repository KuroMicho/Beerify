const beerService = require("../services/beerService");
const catchAsync = require("../utils/catchAsync");

const beerController = {
  getAll: catchAsync(async (req, res) => {
    const beers = await beerService.getAllBeers(req.query);
    res
      .status(200)
      .json({ status: "success", results: beers.length, data: beers });
  }),

  getById: catchAsync(async (req, res) => {
    const beer = await beerService.getBeerById(req.params.id);
    res.status(200).json({ status: "success", data: beer });
  }),

  create: catchAsync(async (req, res) => {
    const beerData = req.body;

    if (req.file) {
      beerData.image = req.file.path;
    }

    const newBeer = await beerService.createBeer(beerData);
    res.status(201).json({ status: "success", data: newBeer });
  }),

  update: catchAsync(async (req, res) => {
    const updateData = req.body;

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedBeer = await beerService.updateBeer(req.params.id, updateData);
    res.status(200).json({ status: "success", data: updatedBeer });
  }),

  remove: catchAsync(async (req, res) => {
    await beerService.deleteBeer(req.params.id);
    res.status(204).json({ status: "success", data: null });
  }),
};

module.exports = beerController;
