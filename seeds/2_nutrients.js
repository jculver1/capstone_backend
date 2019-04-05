
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nutrients').del()
    .then(function () {
      // Inserts seed entries
      return knex('nutrients').insert([
        {
            "name": "Vitamin A, IU",
            "units_of_measurement": "International Unit (IU)",
            "daily_value": "5000"
        },
        {
          "name": "Vitamin C, total ascorbic acid",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "60"
      },
      {
          "name": "Calcium, Ca",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "1000"
      },
      {
          "name": "Iron, Fe",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "18"
      },
      {
          "name": "Vitamin D",
          "units_of_measurement": "International Unit (IU)",
          "daily_value": "400"
      },
      {
          "name": "Vitamin E (alpha-tocopherol)",
          "units_of_measurement": "International Unit (IU)",
          "daily_value": "30"
      },
      {
          "name": "Vitamin K (phylloquinone)",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "80"
      },
      {
          "name": "Thiamin",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "1.5"
      },
      {
          "name": "Riboflavin",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "1.7"
      },
      {
          "name": "Niacin",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "20"
      },
      {
          "name": "Vitamin B-6",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "2"
      },
      {
          "name": "Folate, total",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "400"
      },
      {
          "name": "Vitamin B-12",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "6"
      },
      {
          "name": "Biotin",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "300"
      },
      {
          "name": "Pantothenic acid",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "10"
      },
      {
          "name": "Phosphorus, P",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "1000"
      },
      {
          "name": "Iodine, I",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "150"
      },
      {
          "name": "Magnesium, Mg",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "400"
      },
      {
          "name": "Zinc, Zn",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "15"
      },
      {
          "name": "Selenium, Se",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "70"
      },
      {
          "name": "Copper, Cu",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "2"
      },
      {
          "name": "Manganese, Mn",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "2"
      },
      {
          "name": "Chromium, Cr",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "120"
      },
      {
          "name": "Molybdenum, Mo",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "75"
      },
      {
          "name": "Chloride, Cl",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "3400"
      },
      {
        "name": "Potassium, K",
        "units_of_measurement": "milligrams (mg)",
        "daily_value": "3500"
    }
      ]);
    });
};
