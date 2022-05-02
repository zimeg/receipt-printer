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
  if (msg.length > 805) res.status(400).send("`msg` is too long (>800)");
  fs.writeFile(fileName, msg, function (err) {
    if (err) res.status(500).send(err);
  });

  exec(`lpr -l ${fileName}`, (err, stdout, stderr) => {
    if (err) res.status(500).send(stderr);
  });
  res.send('success: `msg` is printing!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
