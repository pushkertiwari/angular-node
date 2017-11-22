var express = require('express');
var Todo = require('../models/todo');
var router = express.Router();

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }
        res.json(todos); // return all todos in JSON format
    });
};

router.get('/api/todos', function (req, res, next) {
   getTodos(res);
});

router.post('/api/todos', function (req, res, next) {
      Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            console.log(todo);
            getTodos(res);
        });
});

router.delete('/api/todos/:todo_id', function (req, res, next) {
 Todo.remove({
            _id: req.params.todo_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getTodos(res);
        });
});
router.get('/edit_user/:id',function(req,res,next){
  //console.log(req.body);
  User.findById(req.params.id,function(err,user){
    console.log(user);
    if(err) return next(err);
    res.render('edituser',{title:'ediUser Template',user:user});
  });
});
router.post('/updateformHtml',function(req,res,next){
  //console.log(req.body);
  User.findByIdAndUpdate(req.body.id,req.body,function(err,user){
    if(err) return next(err);
    res.redirect('/');
  });
});

module.exports = router;
