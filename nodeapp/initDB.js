import readline from "node:readline/promises";
import connectMongoose from "./lib/connectMongoose.js";
import Agent from "./models/Agent.js";
import User from "./models/User.js";

const connection = await connectMongoose();
console.log("Conected to MongoDB:", connection.name);

//Readline, could be replace with inquirer
const answer = await ask(
  "You will delete the DataBase collections, do you want to continue? (n)"
);
if (answer.toLowerCase() !== "y") {
  console.log("Process aborted");
  process.exit();
}

await initUsers();
await initAgents();

await connection.close();

async function initAgents() {
  //delete all agents
  const result = await Agent.deleteMany();
  console.log(`Deleted ${result.deletedCount} agents.`);

  const [admin, user] = await Promise.all([
    User.findOne({ email: "admin@example.com" }),
    User.findOne({ email: "user@example.com" }),
  ]);

  //create agents
  const insertResult = await Agent.insertMany([
    { name: "Smith", age: 45, owner: admin._id },
    { name: "Brown", age: 33, owner: admin._id },
    { name: "Jones", age: 24, owner: user._id },
  ]);
  console.log(`Inserted ${insertResult.length} agents.`);
}
async function initUsers() {
  //delete all users
  const result = await User.deleteMany();
  console.log(`Deleted ${result.deletedCount} users.`);

  //create users
  const insertResult = await User.insertMany([
    { email: "admin@example.com", password: await User.hashPassword("1234") }, //We should save a hash not the password
    { email: "user@example.com", password: await User.hashPassword("123444") },
  ]);
  console.log(`Inserted ${insertResult.length} users.`);
}

async function ask(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const result = await rl.question(question);
  rl.close();
  return result;
}
