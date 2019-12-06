const sqlite3 = require('sqlite3').verbose();

class mapDb {
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.createTable()
    }

    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS marks (
                name text PRIMARY KEY, 
                lonigtude real,
                latitude real)`
        return this.db.run(sql);
    }

    selectByName(name, callback) {
        return this.db.get(
            `SELECT * FROM marks WHERE name = ?`,
            [name], function (err, row) {
                callback(err, row)
            })
    }

    selectAll(callback) {
        return this.db.all(`SELECT * FROM marks`, function (err, rows) {
            callback(err, rows)
        })
    }

    insert(mark, callback) {
        return this.db.run(
            'INSERT INTO marks (name,longitude,latitude) VALUES (?,?,?)',
            mark, (err) => {
                callback(err)
            })
    }

    delete(name, callback) {
        return this.db.run(
            'DELETE FROM marks WHERE name = ',
            name, (err) => {
                callback(err)
            })
    }
}

module.exports = mapDb 