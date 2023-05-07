// Import the dcp-client library
const dcp = require("dcp-client");

// Initialize the DCP client and start the number-guessing game
(async function main() {
  await dcp.init();
  guessNumber();
})();

// The number-guessing game function
async function guessNumber() {
  const n = 1000; // The maximum number to guess
  const secret = Math.floor(Math.random() * n) + 1; // Randomly generate the secret number to guess

  console.log(`Secret number to guess is: ${secret}`);

  // Create a binary search job to efficiently find the secret number
  const binarySearchJob = dcp.compute
    .for(0, Math.ceil(Math.log2(n)), { maxJobs: n })
    .on("accepted", () => console.log(`Job accepted by scheduler`))
    .on("readystatechange", (ev) => console.log(`Job state: ${ev}`))
    .on("result", (ev) => {
      const [guess, isCorrect] = ev.result;
      if (isCorrect) {
        console.log(`Secret number found! It was: ${guess}`);
        binarySearchJob.kill();
      }
    })
    .on("error", (err) => console.error(`Error during execution: ${err}`))
    .on("uncaughtException", (err) =>
      console.error(`Uncaught exception: ${err}`)
    )
    .on("taskError", (ev) => console.error(`Task error: ${ev}`))
    .on("completed", (ev) => console.log(`Job completed with status ${ev}`));

  // Execute the binary search job
  binarySearchJob.exec((num) => {
    // Determine the range of numbers to search
    const range = Math.pow(2, num);
    const start = range;
    const end = Math.min(range + range - 1, n);

    // Perform a binary search within the range
    let guess = Math.floor((start + end) / 2);
    let isCorrect = guess === secret;
    while (start <= end && !isCorrect) {
      guess = Math.floor((start + end) / 2);
      isCorrect = guess === secret;

      if (!isCorrect) {
        if (guess < secret) {
          start = guess + 1;
        } else {
          end = guess - 1;
        }
      }
    }

    return [guess, isCorrect];
  });
}
