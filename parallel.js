const resolveAfterTimeout = async i => {
    return new Promise(resolve => {
      console.log("CALLED: "+ i);
      setTimeout(() => {
        resolve("RESOLVED", i);
      }, 2000);
    });
  };
  
  const call = async () => {
    const res = await Promise.all([
      resolveAfterTimeout(1),
      resolveAfterTimeout(2),
      resolveAfterTimeout(3),
      resolveAfterTimeout(4),
      resolveAfterTimeout(5),
      resolveAfterTimeout(6)
    ]);
    console.log({ res });
  };
  
  call();