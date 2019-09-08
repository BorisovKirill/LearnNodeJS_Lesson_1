const ansi   = require("ansi");
const faker  = require("faker");

const cursor = ansi(process.stdout);

cursor.write("Wake up, ").red().bg.yellow().write(faker.internet.userName()).reset().bg.reset().write(" ...\n");
cursor.green().write("Follow the white rabbit ...").reset().write("\n");