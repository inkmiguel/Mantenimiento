module.exports = {
    gethome: (req, res)=>{
        res.render('calendar', {
            title: 'Home'   
        });
    }
}

