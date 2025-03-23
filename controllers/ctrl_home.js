module.exports = {
    gethome: (res, req)=>{
        res.render('home', {
            title: 'Home'   
        });
    }
}

