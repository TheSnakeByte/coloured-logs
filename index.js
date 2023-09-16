const c = require("ansi-colors");

const cons = {};
cons.success = function(string) {
  const start = c.green("[SUCCESS]");
  const currentTime = new Date();
  const hours = currentTime.getUTCHours().toString().padStart(2, '0');
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
  const timeString = c.yellow(`(${hours}:${minutes}:${seconds} UTC)`);
  console.log(`${start} ${timeString} ${string}`);
}
cons.info = function(string) {
  const start = c.yellow("[INFO]");
  const currentTime = new Date();
  const hours = currentTime.getUTCHours().toString().padStart(2, '0');
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
  const timeString = c.yellow(`(${hours}:${minutes}:${seconds} UTC)`);
  console.log(`${start} ${timeString} ${string}`);
}
cons.error = function(string) {
  const start = c.red("[ERROR]");
  const currentTime = new Date();
  const hours = currentTime.getUTCHours().toString().padStart(2, '0');
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
  const timeString = c.yellow(`(${hours}:${minutes}:${seconds} UTC)`);
  console.log(`${start} ${timeString} ${string}`);
}
cons.response = function(string) {
  const start = c.blue("Response:");
  const currentTime = new Date();
  const hours = currentTime.getUTCHours().toString().padStart(2, '0');
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
  const timeString = c.yellow(`(${hours}:${minutes}:${seconds} UTC)`);
  console.log(`${start} ${timeString} ${string}`);
}
cons.server = function(string) {
  const start = c.magenta("[SERVER]");
  const currentTime = new Date();
  const hours = currentTime.getUTCHours().toString().padStart(2, '0');
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, '0');
  const timeString = c.yellow(`(${hours}:${minutes}:${seconds} UTC)`);
  console.log(`${start} ${timeString} ${string}`);
}

module.exports = cons;