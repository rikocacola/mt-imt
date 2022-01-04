import mongoose from 'mongoose';

const weeklyEventSchema = mongoose.Schema({
  title: String,
  place: String,
  date: Date,
  time: String,
  poster: String,
})

const WeeklyEvents = mongoose.model('WkeklyEvents', weeklyEventSchema)

export default WeeklyEvents;
