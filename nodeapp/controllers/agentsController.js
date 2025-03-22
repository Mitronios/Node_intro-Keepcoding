import Agent from "../models/Agent.js";

export function index(req, res, next) {
  res.render("new-agent");
}

export async function postNew(req, res, next) {
  try {
    const { name, age } = req.body;
    const userId = req.session.userId;

    // TODO validations
    // Create an agent instance in memory

    const agent = new Agent({ name, age, owner: userId });

    // Now we save it into DB
    await agent.save();

    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

export async function deleteAgent(req, res, next) {
  try {
    const userId = req.session.userId;
    const agentId = req.params.agentId;

    await Agent.deleteOne({ _id: agentId, owner: userId });

    res.redirect("/");
  } catch (error) {
    next(error);
  }
}
