var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text:{
    type: String,
    required: true,
    minlengh: 1,
    trim: true
  },
  completed:{
    type: Boolean,
    default:false
  },
  completedAt:{
    type: Number,
    default:-1
  }
});

module.exports = { Todo }
