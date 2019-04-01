
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('nutrients').del()
    .then(function () {
      // Inserts seed entries
      return knex('nutrients').insert([
        {
          "name": "Vitamin C",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "60"
      },
      {
          "name": "Calcium",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "1000"
      },
      {
          "name": "Iron",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "18"
      },
      {
          "name": "Vitamin D",
          "units_of_measurement": "International Unit (IU)",
          "daily_value": "400"
      },
      {
          "name": "Vitamin E",
          "units_of_measurement": "International Unit (IU)",
          "daily_value": "30"
      },
      {
          "name": "Vitamin K",
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
          "name": "Vitamin B6",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "2"
      },
      {
          "name": "Folate",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "400"
      },
      {
          "name": "Vitamin B12",
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
          "name": "Phosphorus",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "1000"
      },
      {
          "name": "Iodine",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "150"
      },
      {
          "name": "Magnesium",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "400"
      },
      {
          "name": "Zinc",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "15"
      },
      {
          "name": "Selenium",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "70"
      },
      {
          "name": "Copper",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "2"
      },
      {
          "name": "Manganese",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "2"
      },
      {
          "name": "Chromium",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "120"
      },
      {
          "name": "Molybdenum",
          "units_of_measurement": "micrograms (µg)",
          "daily_value": "75"
      },
      {
          "name": "Chloride",
          "units_of_measurement": "milligrams (mg)",
          "daily_value": "3400"
      }
      ]);
    });
};
