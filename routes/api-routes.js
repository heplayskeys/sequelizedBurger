var db = require("../models");

module.exports = function(app) {

    app.get("/burgers", function(req, res) {
        db.Burger.findAll()
        .then(function(dbBurger) {

            var hbsObject = {
                burgers: dbBurger
            }

            res.render("index", hbsObject);
        });
    });

    app.post("/burgers", function(req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function(dbBurger) {

            console.log(dbBurger);
            var burgers = dbBurger.dataValues;

            res.status(200).json(burgers);
        }).catch(function(err) {
            res.status(500).json(err);
        });
    });

    app.put("/burgers/:id", function(req, res) {

        console.log(req.body);

        db.Burger.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbBurger) {
            res.json(dbBurger);
        }).catch(function(err) {
            res.status(500).json(err);
        });
    });

    // app.put("/burgers", function(req, res) {
    //     db.Burger.update({
    //         burger_name: req.body.burger_name,
    //         devoured: req.body.devoured
    //         }, {
    //         where: {
    //             id: req.body.id
    //         }
    //     }).then(function(dbBurger) {
    //         res.json(dbBurger);
    //     }).catch(function(err) {
    //         res.status(500).json(err);
    //     });
    // });

    app.get("/*", function(req, res) {
        res.redirect("/burgers");
    });
};