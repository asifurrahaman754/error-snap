import { nanoid } from "nanoid";
import ErrorsnapDb from "../classes/errorsnapdb.js";
import Project from "../classes/project.js";

export const postProject = async (req, res) => {
  const { user_id, name, description } = req.body;

  if (!name || !user_id) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const id = nanoid(8);
  const values = {
    id,
    user_id,
    name,
    description,
  };

  const prevProject = await Project.getProjectWithName(name);
  if (prevProject) {
    res.status(201).json({ message: "Already added a project with same name" });
    return;
  }

  try {
    await ErrorsnapDb.insert("project", values);
    res.status(201).json({ message: "Project added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Project add failed!" });
  }
};
