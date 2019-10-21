for (let n = 0; n < 100; )
  console.log((++n % 3 ? "" : "fizz") + (n % 5 ? "" : "buzz") || n);
