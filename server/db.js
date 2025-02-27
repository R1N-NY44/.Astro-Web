import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Fungsi untuk membuka koneksi database
export async function openDb() {
    return open({
        filename: './server/database.db',
        driver: sqlite3.Database
    });
}

// Fungsi untuk membuat tabel jika belum ada
export async function initializeDb() {
    const db = await openDb();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS assets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            type TEXT,
            location TEXT
        )
    `);
}
