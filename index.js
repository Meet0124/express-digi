import 'dotenv/config'
import express from "express";

const app = express(); //this app comes from express and can do many things

// most common to listen on port
const port = process.env.PORT ||3000;

// app.get("/",(req,res)=>{  // handle request on slash port home port
//     res.send("Hello from meet!")

// })

// app.get("/ice-tea", (req, res) => {

//   res.send("What ice tea would you prefer?");
// });
// app.get("/twitter", (req, res) => {
//   res.send("meet.com");
// });

app.use(express.json()); // any data that comes in json we accept that

let teaData = [];
let nextId = 1;

// ADD A NEW TEA

// developing a crud application
// majority time when you save data you use post
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  // we create object to store data
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});
//  GET ALL TEA
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});
// GET TEA WITH ID
app.get("/teas/:id", (req, res) => {
  teaData.find(t =>t.id === parseInt(req.params.id)) //if anything comes via body you use body if comes from url you call params
  //anything comes from url is in string format
  if(!id){
    return res.status(404).send('Tea not found')
  }
  res.status(200).send(tea)
});


// update tea

app.put('/teas/:id', (req,res)=>{
   const tea = teaData.find(t =>t.id === parseInt(req.params.id))
   if(!tea){
    res.status(404).send('Tea not found')
   }
   const {name, price} =req.body
   tea.name=name
   tea.price= price
   res.send(200),send(tea)
})

// Delete tea

app.delete('/teas/:id',(req,res)=>{
    const index=teaData.findIndex(t => t.id=== parseInt(req.params.id))
    if(index === -1){
        return res.status(404).send('Tea not found')

    }
    teaData.splice(index,1) // from that index just delete that particular thing
    return res.status(204).send('deleted')
    
})

app.listen(port, () => {
  console.log(`Serve is running at port:${port}...`);
});
