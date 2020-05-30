let wait = time =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

wait(2000).then(() => {
  console.log("executed after 2 seconds");
});
