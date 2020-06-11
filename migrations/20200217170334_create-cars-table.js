
exports.up = function(knex) {
  // the change we want to make to our schema
    return knex.schema.createTable('cars', tbl => {
       tbl.increments();
       tbl.integer('VIN')
           .unique()
           .notNullable();
       tbl.text('Make')
           .notNullable();
       tbl.text('Model')
           .notNullable();
       tbl.integer('Mileage')
           .notNullable();
       tbl.text('TransmissionType');
       tbl.text('TitleStatus');
    });
};

exports.down = function(knex) {
  // undoing that change
    return knex.schema.dropTableIfExists('cars');
};
