export function getRandomColor(){
    let r = random();
    let g = random();
    let b = random(); 
  
    return `rgb(${r},${g},${b})`
    
  }

  function random (){
    return Math.floor(Math.random() * 256);
  }
  