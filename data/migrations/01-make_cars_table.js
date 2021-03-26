// DO YOUR MAGIC


exports.up = function(knex) {
  return knex.schema
  .createTable('cars', tbl => {
    tbl.increments();
    tbl.string('vin', 255)
      .unique()
      .notNullable()
    tbl.string('make').notNullable()
    tbl.string('model').notNullable()
    tbl.string('mileage').notNullable()
    tbl.string('title')
    tbl.string('transmission')
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("friends");
};
