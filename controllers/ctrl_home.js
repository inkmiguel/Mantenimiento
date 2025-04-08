module.exports = {
    gethome: (req, res)=>{
        res.render('home', {
            title: 'Home'   
        });
    }
}

