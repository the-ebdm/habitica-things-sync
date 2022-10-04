
const sqlite3 = require('better-sqlite3')

function initDb(dbPath) {
  return sqlite3(dbPath, {});
}

function fetchTasks(dbPath) {
  const db = initDb(dbPath)

  const tasks = db.prepare('SELECT * FROM TMTask WHERE trashed = 0 AND type = 0').all();

  // Status 3 is "completed"
  // Status 0 is "open"

  return tasks
}

function fetchOutstandingTasks(dbPath) {
  const tasks = fetchTasks(dbPath)

  return tasks.filter(task => task.status === 0)
}

module.exports = {
  fetchTasks,
  fetchOutstandingTasks
}