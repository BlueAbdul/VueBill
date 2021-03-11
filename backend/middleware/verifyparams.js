const verifyParams = (req, res, next) => {
    console.log(req.params)
   
      next()
    // si je ne fais pas next, le server n'envoie pas de réponse !!!
  }
  
  
  module.exports = verifyParams