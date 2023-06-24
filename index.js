import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { exec } from "child_process";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCommand = ({ hostName }) => {
  let result = "";

  const platformName = process.platform;
  const platforms = [
    ["win32", "start"],
    ["linux", "xdg-open"],
    ["darwin", "open"],
  ];

  platforms.forEach((platform) => {
    const [name, platformCommand] = platform;
    if (name === platformName) result = `${platformCommand} ${hostName}`;
  });

  return result;
};

const execHandle = (command) =>
  new Promise((resolve, reject) => {
    exec(command, (error) => {
      if (error) return reject(error);
      resolve();
    });
  });

const init = async (body) => {
  try {
    const { port, host } = body;
    const hostName = `http://${host}:${port}`;

    const command = getCommand({ hostName });

    await execHandle(command);
    console.info(`Server Started : ${hostName}`);
  } catch (error) {
    console.error(error);
  }
};

export default ({
  port = 8000,
  joinHtml = "index.html",
  host = "localhost",
}) => {
  app.get("/", (_, res) => {
    res.sendFile(path.join(__dirname, joinHtml));
  });

  app.listen(port, () => {
    const body = {
      port,
      joinHtml,
      host,
    };

    init(body);
  });
};
