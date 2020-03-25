import crypto from 'crypto';

import Ong from '../models/Ong';

class OngController {
  async index(req, res) {
    const ongs = await Ong.findAll();

    return res.json(ongs);
  }

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await Ong.create({ id, name, email, whatsapp, city, uf });

    return res.json({ id });
  }
}

export default new OngController();
