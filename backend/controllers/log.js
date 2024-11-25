import { nanoid } from "nanoid";
import Errorlog from "../classes/errorlog.js";
import Project from "../classes/project.js";
import Slack from "../classes/slack.js";

export const sendProjectError = async (req, res) => {
  const { message, projectId, source, lineno, colno, stack, os, browser } =
    req.body;

  if (!message || !projectId || !source || !stack) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // check if project exists
  const project = await Project.getById(projectId);
  if (!project) {
    return res.status(400).json({ message: "Project not exists!" });
  }

  const errorId = nanoid(8);
  const values = {
    id: errorId,
    message,
    project_id: projectId,
    source,
    lineno,
    colno,
    os,
    browser,
    stack,
    status: 0,
  };

  try {
    const results = await Errorlog.insert(values);
    const responseId = results.insertId ? results.insertId : errorId;

    res
      .status(201)
      .json({ message: "Error logged successfully", id: responseId });

    Slack.sendMessage(values, projectId);
  } catch (error) {
    console.error("Error logging error:", error);
    res.status(500).json({ message: "Error logging error" });
  }
};

export const getProjectErrors = async (req, res) => {
  const { projectId } = req.params;

  if (!projectId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const results = await Errorlog.selectByProjectId(projectId, req.query);
    res.status(200).json({ message: "", data: results });
  } catch (error) {
    console.error("Error getting error logs:", error);
    res.status(500).json({ message: "Error getting error logs" });
  }
};

export const getError = async (req, res) => {
  const { errorId } = req.params;

  if (!errorId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const results = await Errorlog.selectById(errorId);

    const userIsProjectOwner = await Project.getUserProjectById(
      results?.project_id
    );
    if (!userIsProjectOwner.length) {
      return res.status(404).json({ message: "Error not found!" });
    }

    res.status(200).json({ message: "", data: results });
  } catch (error) {
    console.error("Error getting error logs:", error);
    res.status(500).json({ message: "Error getting error logs" });
  }
};

export const assignUserToError = async (req, res) => {
  const { userId, errorId } = req.body;

  if (!errorId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await Errorlog.assignUser(userId, errorId);
    res.status(201).json({ message: "Assign successfull" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error assigning user failed!" });
  }
};

export const resolveError = async (req, res) => {
  const { errorId } = req.body;

  if (!errorId) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await Errorlog.resolve(errorId);
    res.status(201).json({ message: "Error resolved successfull" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error resolving failed!" });
  }
};

export const getAssignedErrors = async (req, res) => {
  try {
    const results = await Errorlog.assigned();
    res.status(201).json({ message: "", data: results });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Fetching assigned errors failed!" });
  }
};
