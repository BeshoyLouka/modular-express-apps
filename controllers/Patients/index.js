exports.else = function(req, res){
    res.render('patients/else', { title: 'Route Separation Example' });
};
exports.list = function(req, res){
    res.render('patients/list', { title: 'Route Separation Example' });
};
