var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');

var id ='wa4d6618cdfa7a429ca41424';

/*Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todos', todo);
});*/

Todo.findById(id).then((todo)=>{
  console.log('Todos by id', todo);
}).catch((e) => console.log(e));
