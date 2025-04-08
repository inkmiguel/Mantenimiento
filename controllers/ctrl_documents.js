module.exports = {
    getdocuments: (req, res)=>{
        res.render('documents', {
            title: 'Documents'   
        });
    }
}