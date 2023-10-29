const connection = require('../config/connection');
const User = require('../models/User');
const Thought = require('../models/Thought');
const Reaction = require('../models/Thought'); 

const { users, thoughts, reactions } = require('./data');

connection.on('error', (err) => {
  console.error(err);
  process.exit(1);
});

connection.once('open', async () => {
  console.log('Connected to the database');

  // Use deleteMany to clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});
  await Reaction.deleteMany({});

  // Seed users
  await User.create(users);

  // Seed thoughts
  await Thought.create(thoughts);

  // Seed reactions
  await Reaction.create(reactions);

  console.log('Database seeded successfully!');
  process.exit(0);
});
