const Beer = require('../models/Beer');

const beerService = {
    getAllBeers: async (queryFilters) => {
        return await Beer.find(queryFilters);
    },
    
    getBeerById: async (id) => {
        const beer = await Beer.findById(id);
        if (!beer) throw new Error('Recurso no encontrado');
        return beer;
    },
    
    createBeer: async (beerData) => {
        const newBeer = new Beer(beerData);
        return await newBeer.save();
    },
    
    updateBeer: async (id, updateData) => {
        const updatedBeer = await Beer.findByIdAndUpdate(id, updateData, { 
            new: true, 
            runValidators: true 
        });
        if (!updatedBeer) throw new Error('Recurso no encontrado');
        return updatedBeer;
    },
    
    deleteBeer: async (id) => {
        const deletedBeer = await Beer.findByIdAndDelete(id);
        if (!deletedBeer) throw new Error('Recurso no encontrado');
        return deletedBeer;
    }
};

module.exports = beerService;