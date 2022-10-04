const { Command } = require('commander');
const program = new Command();

const { fetchTasks, fetchOutstandingTasks } = require('./lib/things');

const userId = process.env.HABITICA_USER_ID
const apiKey = process.env.HABITICA_API_KEY

const thingsDbPath = process.env.THINGS_DB_PATH || './things.db'

program
  .name('habitica-things-sync')
  .description('CLI to sync Habitica and Things')
  .version('0.0.1');

program.command('test').action(() => {
  console.log(thingsDbPath)
  const tasks = fetchOutstandingTasks(thingsDbPath)

  console.log(tasks)
})

program.parse()