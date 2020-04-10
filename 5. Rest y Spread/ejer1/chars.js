function chars(...args) {
  let res = [];

  for (const item of args) {
    res = [ ...res, ...item];
  }
  console.log(res);
}

chars("hola", "adios");
