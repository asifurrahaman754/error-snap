import { nanoid } from "nanoid";
import ErrorsnapDb from "../classes/errorsnapdb.js";

export const sendError = async (req, res) => {
  const { message, projectId, source, lineno, colno, stack } = req.body;

  if (!message || !projectId || !source || !stack) {
    console.log("inside error", req.body);
    return res.status(400).json({ message: "Missing required fields" });
  }

  const errorId = nanoid(8);
  const values = {
    id: errorId,
    message,
    project_id: projectId,
    source,
    lineno,
    colno,
    stack,
  };

  try {
    const results = await ErrorsnapDb.insert("errorlogs", values);
    const responseId = results.insertId ? results.insertId : errorId;

    res
      .status(201)
      .json({ message: "Error logged successfully", id: responseId });
  } catch (error) {
    console.error("Error logging error:", error);
    res.status(500).json({ message: "Error logging error" });
  }
};
