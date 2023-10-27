const connection = require('../config/connection');
const { User, Thought } = require('../models');
const Reaction = require('../models/Thought')
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

  // Assign users to thoughts and reactions
  thoughts.forEach(async (thought) => {
    const user = users.find((u) => u.username === thought.username);
    thought.userId = user._id;
    await Thought.create(thought);
  });

  reactions.forEach(async (reaction) => {
    const user = users.find((u) => u.username === reaction.username);
    const thought = thoughts[0]; 
    reaction.userId = user._id;
    reaction.thoughtId = thought._id;
    await Reaction.create(reaction);
  });

  console.log('Database seeded successfully!');
  process.exit(0);
});
