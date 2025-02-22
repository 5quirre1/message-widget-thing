const { createCanvas } = require('canvas');

module.exports = (req, res) => {
  const message = req.query.message || 'Hello, World!';

  const canvas = createCanvas(600, 600);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#003366'; 
  ctx.fillRect(0, 0, 600, 600);


  ctx.font = '30px Arial';
  ctx.fillStyle = '#A9D6E5';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';


  ctx.fillText(message, 300, 300);


  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer('image/png'));
};
