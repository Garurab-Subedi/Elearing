const mongoose = require("mongoose");

const Joi = require("joi");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 30 },

  isEnrolled: {
    type: Boolean,
    default: false,
  },

  Phone: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 25,
  },
});

const Student = mongoose.model("Student", studentSchema);

function validateDate(student) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    Phone: Joi.string().min(5).max(50).required(),
    isEnrolled: Joi.boolean(),
  };
  return Joi.validate(student, schema);
}

exports.Student = Student;
exports.validate = validateDate;
