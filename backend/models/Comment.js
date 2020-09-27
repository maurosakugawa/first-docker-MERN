//Modelo para Mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

/*
//Schema para comentários
const CommentSchema = new Schema({
    message: {
        type: String,
    },
    create_at: {
        type: Date,
        default: Date.now
    }
},
{
    collection: 'Comments'
})

module.exports = mongoose.model('Comment', CommentSchema)


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
*/
let Task = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    details: {
      type: String,
    },
    creation_date: {
      type: Date,
      default: Date.now()
    },
    conclusion_date: {
      type: Date,
    },
    remember_me_date: {
      type: Date,
    },
  }
);

module.exports = mongoose.model('Task', Task);