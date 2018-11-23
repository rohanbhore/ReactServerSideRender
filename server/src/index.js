// ROOT file of server
import express from 'express';
import home from './views/home';
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
    //res.send("asasasasa");
    let toDoData= [
        {
          "id": "1",
          "task": "get milk",
          "status": "Pending",
          "isDeleted": "false"
        },
        {
          "id": "2",
          "task": "meeting",
          "status": "Pending",
          "isDeleted": "false"
        },
        {
          "id": "3",
          "task": "Buy News paper",
          "status": "Completed",
          "isDeleted": "false"
        }
      ]
     res.send(home(toDoData));
});


app.listen(3000, () => {
    console.log('Listening on port 3000....');
});