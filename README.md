# knights-travails

This javascript allows one to find the shortest path possible from any starting square if one where using a knight in a chess game. It gives you the amount of steps to reach the destination, as well as what square you need to pass to get to that destination.

This project was a great way to improve my understanding of breath first search in multiway trees. I was used to using binary trees, so this became a challenge since there were so many ways one could go; however, with the use of a queue, infoArr to mimic each board space and create and object with distance and predecessor attributes, and an adjArr that also mimics each board space and gives an array of what valid moves the knight can make, it became something that could be done in about 100 lines of code.

The biggest challenge I ran into was utlizing the infoArr. I neede to create this because I needed a way to show if a square had already been visited before. Otherwise, it may have stuck me in an infinite loop. Once I broke it down using pseudocode, it became easy to implement just what I needed.

Use command 'node javascript.js' to try it out!
