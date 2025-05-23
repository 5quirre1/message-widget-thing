const { createCanvas, registerFont } = require('canvas');
const path = require('path');
registerFont(path.join(__dirname, 'fonts', 'ComicSansMS.ttf'), { family: 'Comic Sans MS' });

module.exports = (req, res) => {
  const message = req.query.message || 'Hello, World!';

  const canvas = createCanvas(600, 600);
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#003366';
  ctx.fillRect(0, 0, 600, 600);

  ctx.font = '30px "Comic Sans MS"';
  ctx.fillStyle = '#A9D6E5';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(message, 300, 300);

  const buffer = canvas.toBuffer('image/png');

  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Content-Length', buffer.length);
  res.status(200).send(buffer);
};
