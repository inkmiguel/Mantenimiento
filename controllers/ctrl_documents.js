module.exports = {
    getdocuments: (res, req)=>{
        res.render('documents', {
            title: 'Documents'   
        });
    }
}