/**
 * Migration layout file.
 * Assign your table name to the tableName variable.
 * Remember, it's always in plural
 */
let tableName = "posts";
exports.up = function (migration) {
  return migration.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.string("title").notNullable();
    table.string("content").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function (migration) {
  return migration.schema.dropTable(tableName);
};
