import { openDb, initializeDb } from '../server/db';

export default async function handler(req, res) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: 'ID harus disertakan!' });
    }

    try {
        await initializeDb();
        const db = await openDb();
        await db.run('DELETE FROM assets WHERE id = ?', [id]);
        res.status(200).json({ message: 'Data berhasil dihapus!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan!' });
    }
}
