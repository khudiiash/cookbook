const router = require('express').Router();
let Recipe = require('../models/Recipe');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => {res.json(recipes)})
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const ingredients = req.body.ingredients;
  const preparation = req.body.preparation;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newRecipe = new Recipe({
    title,
    description,
    ingredients,
    preparation,
    duration,
    date,
  });

  newRecipe.save()
  .then(() => res.json('Recipe added'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id)
    .then(Recipe => res.json(Recipe))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json('Recipe deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id)
    .then(Recipe => {
      Recipe.title = req.body.title;
      Recipe.description = req.body.description;
      Recipe.ingredients = req.body.ingredients;
      Recipe.preparation = req.body.preparation;
      Recipe.duration = Number(req.body.duration);
      Recipe.date = Date.parse(req.body.date);

      Recipe.save()
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;