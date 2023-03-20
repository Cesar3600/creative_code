const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    quantity= 7
    border=100
    gap = 30
    squareVal = ((width+gap-(border*2))/quantity )-gap
    pad = squareVal*0.1

    for (let i = 0; i < quantity; i++) {
      for (let j = 0; j < quantity; j++) {
        context.beginPath()
        let x = border+(squareVal+gap)*i
        let y = border+(squareVal+gap)*j
        context.rect(x,y,squareVal,squareVal)
        context.stroke()

        if(Math.random() > 0.5){
           
          let bIntX = squareVal-(pad*2)
          let bTintY = squareVal-(pad*2)
          context.beginPath()
          context.rect(x+pad, y+pad,bIntX,bTintY)
          context.stroke()
        }
      }
    }





  };
};

canvasSketch(sketch, settings);
