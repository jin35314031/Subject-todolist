const express = require('express');
const mysql = require('mysql');
let moment = require('moment');
const app = express();
app.locals.moment = require('moment');

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'list_app'
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  connection.query(
    'SELECT * FROM items',
    (error, results) => {
      console.log(results);
      res.render('index.ejs', {items: results});
    }
  );
});

app.get('/new', (req, res) => {
  res.render('new.ejs');
});

app.post('/create', (req, res) => {
  connection.query(
    'INSERT INTO items (name) VALUES (?)',
    [req.body.itemName],
    (error, results) => {
      res.redirect('/index');
    }
  );
});

app.post('/delete/:id', (req, res) => {
  connection.query(
    'DELETE FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.redirect('/index');
    }
  );
});

app.get('/edit/:id', (req, res) => {
  connection.query(
    'SELECT * FROM items WHERE id = ?',
    [req.params.id],
    (error, results) => {
      res.render('edit.ejs', {item: results[0]});
    }
  );
});

app.post('/update/:id', (req, res) => {
  // 選択されたメモを更新する処理を書いてください
  connection.query(
    'UPDATE items SET name = ? WHERE id = ?',
    [req.body.itemName, req.params.id],
    (error,results)=>{
     res.redirect('/index'); 
    }
  );
  // 以下の一覧画面へリダイレクトする処理を削除してください
 
});

//done
app.post('/done/:id', (req, res) => {
  const doneDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
  connection.query(
    'UPDATE items SET done = ?, doneTime = ? WHERE id = ?',
    ['1',doneDateTime,req.params.id],
    (error, results) => {
      res.redirect('/index'); 
    }
  );
});

//return
app.post('/return/:id', (req, res) => {  
  connection.query(
    'UPDATE items SET done = ?, doneTime = NULL WHERE id = ?',
    ['0',req.params.id],
    (error, results) => {
      res.redirect('/index'); 
    }
  );
});

app.listen(3000);