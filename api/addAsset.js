import { openDb, initializeDb } from '../server/db';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, type, location } = req.body;
    if (!name || !type || !location) {
        return res.status(400).json({ message: 'Semua field harus diisi!' });
    }

    try {
        await initializeDb();
        const db = await openDb();
        await db.run('INSERT INTO assets (name, type, location) VALUES (?, ?, ?)', [name, type, location]);
        res.status(200).json({ message: 'Data berhasil ditambahkan!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan!' });
    }
}
