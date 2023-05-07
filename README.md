# RUHacks2023

## Inspiration
I wanted to showcase the capabilities of the Distributed Compute Protocol (DCP) by creating a fun and engaging project that demonstrates its potential in solving complex problems. That's when I came up with the idea of a combination-guessing application from scratch, which would try to guess a secret mix of numbers and lowercase letters using a brute-force approach.

## What it does
My combination-guessing application generates a secret combination of numbers and lowercase letters. It then uses a brute-force algorithm to find the secret combo by going through all possible combinations. To achieve this, I implemented the algorithm and utilized the power of DCP to distribute the calculations across a network of computers, making the process faster and more efficient.

## How I built it
I began by outlining the core functionality of the application, which involved generating a secret combination of numbers and lowercase letters. After creating a character set, I devised a mechanism for producing the secret combination.
Next, I designed the brute-force algorithm to search through all possible combinations until it discovered the secret one. Using the DCP platform, I set up a DCP job that would break the problem down into smaller, more manageable tasks and distribute the computation across a network of computers.
Finally, I added event listeners and error handlers to monitor various events and potential errors during the execution of the DCP job. I thoroughly tested the code to ensure that it could find the secret combination.

## Challenges I ran into
Building the combination-guessing application from scratch required a solid understanding of algorithms and efficient problem-solving techniques, like the brute-force method.
Designing an effective brute-force algorithm that could be shared across a distributed network was challenging, as it involved carefully considering the character set and combination length.
Working with the DCP environment called for a good grasp of setting up and managing keystores, which were essential for running my application.
Handling different events and potential errors during the DCP job execution meant rigorous testing and proper error handling.

## Accomplishments that I'm proud of
I'm proud of building a fully functional combination-guessing application from scratch that effectively leverages the power of the Distributed Compute Protocol. The application demonstrates the potential of DCP in solving complex computational problems.

## What I learned
Through the development of this project, I gained valuable insights into the DCP platform and learned how to manage DCP jobs, handle various events, and tackle potential issues. I also expanded my knowledge on creating and working with random combinations of numbers and lowercase letters and implementing an efficient brute-force algorithm.

## What's next for Combination Guessing Game
In the future, I plan to enhance the combination-guessing application by:
Introducing a user interface to improve the user experience
Adding difficulty levels to challenge the algorithm further
Implementing additional algorithms or techniques for guessing the secret combination
Exploring ways to further optimize the performance and efficiency of the application using the DCP platform
