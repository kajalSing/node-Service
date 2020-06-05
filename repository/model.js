import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const testSchema = new Schema({
  task:String,
  dueDate: Date,
  timeToAchieve: Number,
  status: String,
});

const TestModel = mongoose.model('TEST_APP', testSchema);

export { TestModel };