const exp = require('express');
const app = exp();
const bp = require('body-parser');
const cs = require('cors');
const mc = require('mongodb').MongoClient;
const conn_url ='mongodb://localhost:27017/';

app.use(bp.json);
app.use(cs());

app.post('/register', (rq, rs) =>{
 mc.connect(conn_url, (err, db) =>
 {
    if(err)
    {
      throw err;
    }
    else{
    const db_o = db.db("MongoDBEmployee");
    var obj = {name:rq.body.Name, company:rq.body.Company}
    db_o.collection("employees").insertOne(obj, (err)=>
    {
      if(err)
      {
        throw err;
      }
      db.close();
    });
  }
 });
});

app.listen(3001, (err)=>
{
 console.log("Running on port 3001.");
});


