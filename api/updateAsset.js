import { openDb, initializeDb } from '../server/db';

export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id, name, type, location } = req.body;
    if (!id || !name || !type || !location) {
        return res.status(400).json({ message: 'Semua field harus diisi!' });
    }

    try {
        await initializeDb();
        const db = await openDb();
        await db.run('UPDATE assets SET name = ?, type = ?, location = ? WHERE id = ?', [name, type, location, id]);
        res.status(200).json({ message: 'Data berhasil diperbarui!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan!' });
    }
}
