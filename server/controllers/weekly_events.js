import mongoose from 'mongoose';

import WeeklyEvents from '../models/weeklyEvents.js';

export const getWeeklyEvents = async (req, res) => {
  try {
    const weeklyEvents = await WeeklyEvents.find();

    res.status(200).json(weeklyEvents);
  } catch(err){
    res.status(404).json({message: err})
  }
}

export const setWeeklyEvents = async (req, res) => {
    const events = req.body;

    const newEvents = new WeeklyEvents(events);
  try {
    await newEvents.save();

    res.status(201).json(newEvents);
  } catch (err) {
    res.status(409).json({message: err})
  }
}
