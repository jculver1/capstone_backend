
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
          {
              "usda_id": "11739",
              "name": "broccoli"
          },
          {
              "usda_id": "11124",
              "name": "carrot"
          },
          {
              "usda_id": "09040",
              "name": "banana"
          },
          {
              "usda_id": "09203",
              "name": "orange"
          },
          {
            "usda_id": "14553",
            "name": "wine"
        },
        {
          "usda_id": "09326",
          "name": "watermelon"
        }
      ]);
    });
};
