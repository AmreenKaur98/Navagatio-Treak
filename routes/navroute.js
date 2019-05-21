const express = require('express');
const routes = express.Router();
const NavSchema = require('../navmodel');

routes.route('/').get(function(req, res) {
    NavSchema.find(function(err, obj) {
        if (err) {
            console.log(err);
        } else {
            res.json(obj);
        }
    });
});
routes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    NavSchema.findById(id, function(err, obj) {
        res.json(obj);
    });
})
routes.route('/add').post(function(req, res) {
    let obj = new NavSchema(req.body);
    obj.save()
        .then(obj => {
            res.status(200).json({'obj': 'obj added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new obj failed');
        });
});
routes.route('/update/:id').post(function(req, res) {
    NavSchema.findById(req.params.id, function(err, obj) {
        if (!obj)
            res.status(404).send('data is not found');
        else
            obj.name_of_place = req.body.name_of_place;

            obj.save().then(obj => {
                res.json('obj updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

routes.route('/delete/:id').get(function (req, res) {
    NavSchema.findByIdAndRemove({_id: req.params.id}, function(err, obj){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});
module.exports = routes;
