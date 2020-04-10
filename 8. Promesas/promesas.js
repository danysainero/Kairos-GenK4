function getPosts() {
    return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
        req.open('GET', 'http://dummy.restapiexample.com/api/v1/employees');

        req.onload = function() {
          if (req.status == 200) {
            resolve(JSON.parse(req.response));
          }
          else {
            reject();
          }
        };

        req.send();
    })
}

getPosts().then(r =>{
    console.log(r);
  }).catch(() => {
    console.log('Algo salió mal');
  });