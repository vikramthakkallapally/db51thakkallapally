var express = require('express');
var router = express.Router();
var tree_controller = require('../controllers/tree'); 

// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('tree', { title: 'Tree Search Results' });
// });

// GET request for list of all Tree items. 
router.get('/', tree_controller.tree_view_all_Page); 

/* GET detail tree page */
router.get('/detail', tree_controller.tree_view_one_Page);

/* GET create tree page */
router.get('/create', tree_controller.tree_create_Page);

/* GET create update page */
router.get('/update', secured, tree_controller.tree_update_Page);

/* GET create tree page */
router.get('/delete', tree_controller.tree_delete_Page);

module.exports = router;
