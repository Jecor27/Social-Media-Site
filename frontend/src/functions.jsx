export function setTextColor(){
    let r = random();
    let g = random();
    let b = random(); 
  
    setColor(`rgb(${r},${g},${b})`)
    
  }

  export function setBackgroundColor(){
    let r = random();
    let g = random();
    let b = random(); 
  
    setColor(`rgb(${r},${g},${b})`)
  }

  function random (){
    return Math.floor(Math.random() * 256);
  }
  
  // setInterval(() => {
  
  //   let r = random();
  //   let g = random();
  //   let b = random(); 
  
  //   setColor(`rgb(${r},${g},${b})`)
  
  // }, 1000)