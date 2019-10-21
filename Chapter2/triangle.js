const makeTriangle = height => {
  let line = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    line += "\n";
  }
  return line + "\n";
};

console.log(makeTriangle(10));
