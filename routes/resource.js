var express = require('express'); 
var router = express.Router(); 

// Require controller modules.
var api_controller = require('../controllers/api'); 
var tree_controller = require('../controllers/tree'); 
 
/// API ROUTE /// 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Tree.  
router.post('/tree', tree_controller.tree_create_post); 
 
// DELETE request to delete Tree. 
router.delete('/tree/:id',tree_controller.tree_delete); 
 
// PUT request to update Tree. 
router.put('/tree/:id', 
tree_controller.tree_update_put); 
 
// GET request for one Tree. 
router.get('/tree/:id', tree_controller.tree_detail);
 
// GET request for list of all Tree items. 
router.get('/tree', tree_controller.tree_view_all_Page); 
 
module.exports = router;