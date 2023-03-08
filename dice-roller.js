let dice = process.argv[2];
let rolls = ' '
for(let y = 0; y < dice; y++){
rolls += Math.floor(Math.random() * 6 + 1)
  if(y < dice - 1) {
  rolls += ', ';
  }
}


console.log(`Rolled ${process.argv[2]} die:` + rolls);
