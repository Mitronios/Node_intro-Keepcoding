import Agent from "../models/Agent.js";

export function index(req, res, next) {
  res.render("new-agent");
}

export async function postNew(req, res, next) {
  try {
    const { name, age } = req.body;

    // TODO validations
    // Create an agent instance in memory

    const agent = new Agent({ name, age });

    // Now we save it into DB
    await agent.save();

    res.redirect("/");
  } catch (error) {
    next(error);
  }
}
