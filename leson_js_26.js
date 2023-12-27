function checkInternetConnection() {
    return new Promise((resolve, reject) => {
      setTimeout(() => { 
            Math.random() > 0.5 ? resolve('Connection') : reject('Connection not established');
        }, 1000);
    });
  }

async function checkConnectionStatus() {
    try {
        const result = await checkInternetConnection();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

checkConnectionStatus();