const sqlite3 = require('sqlite3').verbose();

class userDb {
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.createTable()
    }

    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS user (
                id integer PRIMARY KEY, 
                login text,
                password text)`
        return this.db.run(sql);
    }

    selectByLogin(login, callback) {
        return this.db.get(
            `SELECT * FROM user WHERE login = ?`,
            [login], function (err, row) {
                callback(err, row)
            })
    }

    selectAll(callback) {
        return this.db.all(`SELECT * FROM user`, function (err, rows) {
            callback(err, rows)
        })
    }

    insert(user, callback) {
        return this.db.run(
            'INSERT INTO user (login,password) VALUES (?,?)',
            user, (err) => {
                callback(err)
            })
    }
}

module.exports = userDb 