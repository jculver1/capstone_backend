
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('foods').del()
    .then(function () {
      // Inserts seed entries
      return knex('foods').insert([
          {
              "usda_id": "11739",
              "name": "Broccoli"
          },
          {
              "usda_id": "11124",
              "name": "Carrot"
          },
          {
              "usda_id": "9040",
              "name": "Banana"
          },
          {
              "usda_id": "9203",
              "name": "Orange"
          }
      ]);
    });
};
