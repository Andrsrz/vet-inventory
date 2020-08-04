var Food = require('../models/food');

/* Display list of Food */
exports.foods = (req, res, next) => {
	Food.find()
		.populate('food')
		.sort([['brand', 'ascending']])
		.exec((err, foods) => {
			if(err)
				return next(err);

			/* Success */
			res.json(foods);
		});
};

/* Create new Food */
exports.create_food = (req, res, next) => {
	let food = new Food({
		type: req.body.type,
		weigth: req.body.weigth,
		price_vet: req.body.price_vet,
		price_public: req.body.price_public,
		brand: req.body.brand,
		name: req.body.name
	});

	food.save((err) => {
		if(err)
			return next(err);

		/* Success */
		res.status(201).json(food);
	})
};
