const btn = document.getElementById("btn");

function pro1(value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, 0);
  });
}

async function asyncCall() {
  const inValue = document.getElementById("ip").value;

  pro1(inValue)
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          document.getElementById("output").textContent = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multipliedResult = result * 2;
          document.getElementById("output").textContent = `Result: ${multipliedResult}`;
          resolve(multipliedResult);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const subtractedResult = result - 3;
          document.getElementById("output").textContent = `Result: ${subtractedResult}`;
          resolve(subtractedResult);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const dividedResult = result / 3;
          document.getElementById("output").textContent = `Result: ${dividedResult}`;
          resolve(dividedResult);
        }, 1000);
      });
    })
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const addedResult = result + 10;
          document.getElementById("output").textContent = `Result: ${addedResult}`;
          resolve(addedResult);
        }, 1000);
      });
    })
    .then((finalResult) => {
      document.getElementById("output").textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

btn.addEventListener("click", asyncCall);
