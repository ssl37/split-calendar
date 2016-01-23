// app/routes.js

// grab the splits model we just created
var express = require('express');
var db = require('./config/db.js');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

	// ROUTES FOR OUR API
	// =============================================================================
	var router = express.Router();              // get an instance of the express Router
        var userRoutes = require('./models/users.js');
        var splitsRoutes = require('./models/splits.js');
	// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
        router.param('user', userRoutes.userLookup);
        router.param('weeknite', splitsRoutes.splitsLookup);
        router.route('/splits').get( splitsRoutes.pullAllSplits );
//                res.json([{ week: 2, night: 'Wednesday', name: ['Lutz'], upcoming: ['Nov 11','Dec 9','Jan 13'] },
//			  { week: 2, night: 'Thursday', name: ['Yeardley', null], upcoming: ['Nov 12','Dec 10','Jan 14'] },
//			  { week: 3, night: 'Thursday', name: ['Silski', 'Martinez'], upcoming: ['Nov 19','Dec 17','Jan 21'] }
//]); // return all splits in JSON format
//            });
        router.route('/splits/:weeknite').get( splitsRoutes.pullSplitsbyNight );
        router.route('/splits/:weeknite/:user')
        .post( splitsRoutes.updateNight )
        .delete( splitsRoutes.deleteNight );
        router.route('/users')
        .get( userRoutes.pullAllUsers )
        .post( userRoutes.addUser );
        router.route('/users/:user')
        .get( userRoutes.pullUserbyName )
        .delete( userRoutes.deleteUser );

//	router.get('/', function(req, res) {
//	    res.json({ message: 'hooray! welcome to our api!' });   
//	});
	// REGISTER OUR ROUTES -------------------------------
	// all of our routes will be prefixed with /api
	app.use('/api', router);
        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./client/html/index.html'); // load our public/index.html file
        });

    };



//addusers
//deleteusers
//adduser to night
//removeuser from night
//list all splits
//list splits for specific night
//splits/:nite (get) (pullSplitsbyNight)
//splits (get) (pullAllSplits)
//splits/:nite/:user (delete) (deleteNight)
//splits/:nite/:user (post null) (updateNight)
//users (get) (pullAllUsers)
//users (post user) (addUser)
//users/:user delete (deleteUser)
//users/:user (get) (pullUserbyName)