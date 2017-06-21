module.exports =function(req, res, next) {
    res.header('Acess-Control-Allow-Orign','*')
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH')
    res.header('Acess-Control-Allow-Headers','Orign, X-Requested-With, Content-Type, Accept')
    next()
}