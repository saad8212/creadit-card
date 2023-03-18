const fs = require('fs');
const express = require("express")
const router = express.Router();

router.get('/table',  (req, res) => {
    res.render("table.ejs");
});
router.get('/', (req,res) =>{
    res.render("index.ejs");
})

router.post('/card', (req, res) => {
    console.log(req.body);
    res.send(req.body);
})
router.delete('/table/:id', (req,res) => {
    res.send(req.params.id);
});
module.exports = router;
