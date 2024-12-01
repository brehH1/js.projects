function script3(){
  
  const luku = parseInt(prompt("Syötä luku:"));

  for (let i = 0; i <= luku; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  
}