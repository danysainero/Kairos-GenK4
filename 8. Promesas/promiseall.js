function getPosts() {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", "https://jsonplaceholder.typicode.com/posts");

    req.onload = function () {
      if (req.status == 200) {
        resolve(JSON.parse(req.response));
      } else {
        reject();
      }
    };

    req.send();
  });
}

function foo() {
  const resApi = getPosts();
  console.log(resApi);
}

Promise.allSettled(promises).then((results) => {
  console.log(results);
});
