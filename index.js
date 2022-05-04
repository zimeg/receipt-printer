const { exec } = require('child_process');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Usage: POST / {"msg": message}');
});

app.post('/', (req, res) => {
  const fileName = `prints/${Date.now().toString()}.in`;
  const msg = `${req.body.msg}\n\n\n\n\n`; // flush the output for a clean tear
  if (msg.length > 805) return res.status(400).send("`msg` is too long (>800)");
  fs.writeFile(fileName, msg, (err) => {
    if (err) return res.status(500).send('error saving message');
  });

  exec(`lpr -l ${fileName}`, (err, stdout, stderr) => {
    if (err) return res.status(500).send(stderr);
  });
  res.status(200).send('success: `msg` is printing!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
