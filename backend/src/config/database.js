module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'to_be_hero',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
