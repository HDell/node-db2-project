
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate() //truncate() instead of del() because truncate() resets ids
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([ //remember to remove the id
          {VIN: '1HGBH41JXMN109186', Make: 'Toyota', Model: 'Camry', Mileage: '137323', TransmissionType: 'Manual', TitleStatus: 'Clean'},
          {VIN: '9HGBH49JXMN901968', Make: 'Ford', Model: 'Escape', Mileage: '237323', TransmissionType: 'Automatic', TitleStatus: 'Salvage'},
          {VIN: '123', Make: 'Nissan', Model: 'Sentra', Mileage: '321', TransmissionType: 'CVT'}
      ]);
    });
};
