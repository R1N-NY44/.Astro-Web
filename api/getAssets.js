import { openDb, initializeDb } from '../server/db';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        await initializeDb();
        const db = await openDb();
        const assets = await db.all('SELECT * FROM assets');
        res.status(200).json(assets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan!' });
    }
}
