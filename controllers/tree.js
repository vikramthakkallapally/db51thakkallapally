var tree = require('../models/tree'); 
 
// List of all Trees

exports.tree_list = async function(req, res) { 
    try{ 
        theTree = await tree.find(); 
        res.send(theTree); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Tree. 
exports.tree_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tree detail: ' + req.params.id); 
}; 
 
// Handle Tree create on POST. 
exports.tree_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tree create POST'); 
}; 
 
// Handle Tree delete form on DELETE. 
exports.tree_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tree delete DELETE ' + req.params.id); 
}; 
 
// Handle Tree update form on PUT. 
exports.tree_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Tree update PUT' + req.params.id); 
};

exports.tree_view_all_Page = async function(req, res) { 
    try{ 
        theTree = await tree.find(); 
        res.render('tree', { title: 'Tree Search Results', results: theTree }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Tree create on POST. 
exports.tree_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new tree(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"treeColor":"Green", "age":10, "name":"Neem"} 
    console.log('the first'+req.body.treeColor)
    console.log('the second'+ req.body.age)
    document.treeColor = req.body.treeColor;
    console.log(document.treeColor)
    document.age = req.body.age; 
    document.name = req.body.name; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};