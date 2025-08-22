// Placeholder for stats routes
const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// GET /stats?range=month
router.get('/', async (req, res) => {
  try {
    const { range } = req.query;
    const now = new Date();
    let startDate;

    if (range === 'month') {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    } else if (range === 'week') {
      const day = now.getDay();
      startDate = new Date(now);
      startDate.setDate(now.getDate() - day);
    } else if (range === 'day') {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else {
      return res.status(400).json({ error: 'Invalid range' });
    }

    const stats = await prisma.tag.findMany({
      include: {
        sessions: {
          where: {
            date: {
              gte: startDate,
              lte: now,
            },
          },
        },
      },
    });

    const result = stats.map(tag => ({
      tag: tag.name,
      totalDuration: tag.sessions.reduce((sum, session) => sum + session.duration, 0),
    }));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
});

module.exports = router;
