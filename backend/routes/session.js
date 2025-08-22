// Placeholder for session routes
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// POST /session
router.post('/', async (req, res) => {
  try {
    const { title, description, duration, tags } = req.body;
    const session = await prisma.session.create({
      data: {
        title,
        description,
        duration,
        tags: {
          connectOrCreate: tags.map(tag => ({
            where: { name: tag },
            create: { name: tag },
          })),
        },
      },
    });
    res.status(201).json(session);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create session' });
  }
});

// GET /sessions?from=...&to=...
router.get('/', async (req, res) => {
  try {
    const { from, to } = req.query;
    const sessions = await prisma.session.findMany({
      where: {
        date: {
          gte: new Date(from),
          lte: new Date(to),
        },
      },
      include: { tags: true },
    });
    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch sessions' });
  }
});

module.exports = router;
