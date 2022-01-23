module.exports={
    
    index:function (req, res) {

        res.render('libro/index', { title: 'Biblioteca con Node Js' });
    }
}