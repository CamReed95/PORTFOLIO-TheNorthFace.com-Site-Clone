module.exports = {
  getCategoryByGender: (req, res, next) => {

    const db = req.app.get( 'db' );
    const { params, query } = req;

    if(req.query) {
      db.read_products_limited( [params.gender, params.category, query.count] )
    .then( (products) => {
      res.status(200).send( products )
    } )
    .catch( (err)=> {
      console.log(err)
    res.status(500).send()
  }
  )
    } else {
      db.read_products( [params.gender, params.category] )
    .then( (products) => {
      res.status(200).send( products )
    } )
    .catch( (err)=> {
      console.log(err)
    res.status(500).send()
  }
  )};
  }
}
