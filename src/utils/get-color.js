import brain from 'brain.js/src';

const hexToRgb = (hex) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (result) {
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return [r, g, b];
  }
  return null;
};

const network = new brain.NeuralNetwork();
network.train([
  { input: { red: 0, green: 0, blue: 0 }, output: { color: 1 } },
  { input: { red: 1, green: 1, blue: 1 }, output: { color: 0 } },
  { input: { red: 0, green: 1, blue: 0 }, output: { color: 0 } },
  {
    input: { red: 0, green: 0.43, blue: 1 },
    output: { color: 1 }
  },
  { input: { red: 1, green: 0, blue: 0 }, output: { color: 1 } }
]);

const getTextColor = (color) => {
  const colorToRgb = hexToRgb(color);

  const entry = {
    red: colorToRgb[0] / 255,
    green: colorToRgb[1] / 255,
    blue: colorToRgb[2] / 255
  };
  const result = network.run(entry);

  console.log(result);
  return result.color > 0.5 ? 'white' : 'black';
};

export default getTextColor;
