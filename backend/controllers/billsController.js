const Bill = require('../models/billModel')

exports.getList = (req,res) =>{
    Bill.find({}, (err,obj) => {
        if(err){
            console.log(err);
            return res.send(500);
        }
        res.send(obj)
    });

    console.log('Get all atteint');
}

exports.getItem = (req,res) =>{
   
    Bill.findOne({_id: req.params.id}, (err, obj) => {
        if(err) {
          console.log(err);
          return res.send(500);
        }
        return res.send(obj);
      });
    console.log('Recherche par id atteint');
}

exports.postItem = (req,res) =>{
console.log('post atteint');
 if(!req.body.billNumber || !req.body.date){
     res.status(403).send('Date et billNumber sont obligatoires ! ')
 }
 const bill = new Bill({
     ...req.body
 })

 bill.save().then(() => {
res.status(200).send('Facture créée')
 }).catch(error => res.status(400).json({error}))

}


exports.putItem = (req,res) =>{
console.log('put atteint');
Bill.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, upsert: true, setDefaultsOnInsert: true, runValidators: true}, (err, obj) => {
    if(err) {
      console.log(err);
      return res.send(500);
    }
    return res.send(obj);
  });

}


exports.deleteItem = (req,res) =>{
console.log('Delete atteint');


Bill.deleteOne({_id: req.params.id}, (err, obj) => {
    if(err) {
      console.log(err);
      return res.send(500);
    }
    return res.status(200).send('Facture supprimée !');
  });

}