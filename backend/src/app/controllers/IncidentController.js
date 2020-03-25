import Incident from '../models/Incident';
import Ong from '../models/Ong';

class IncidentController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const count = await Incident.count();

    const incidents = await Incident.findAll({
      limit: 5,
      offset: (page - 1) * 5,
      include: [
        {
          model: Ong,
          attributes: ['name', 'email', 'whatsapp'],
        },
      ],
    });

    res.header('X-Total-Count', count);

    return res.json(incidents);
  }

  async store(req, res) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const incident = await Incident.create({
      ong_id,
      title,
      description,
      value,
    });

    return res.json(incident);
  }

  async delete(req, res) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await Incident.findOne({
      where: { id },
    });

    if (!incident) {
      return res.status(400).json({ error: 'Incident does not exists' });
    }

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' });
    }

    await incident.destroy();

    return res.status(204).send();
  }
}

export default new IncidentController();
