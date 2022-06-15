# mr roboger's neighborhood

#### By Jacob Palaoro

## technologies used

* HTML
* CSS
* Javascript
* JQUERY
* BOOTSTRAP

## Description

This is my week 3 project at epicodus. It was an effort to use loops and arrays to creat an application that take a number inputted by the user and list out 0 to the input number and replace any number including 3,2,1 with 3 seperate assigned strings 

## setup and installation

1. clone repository to your desktop
2. open neighborhood/index.html

## known bugs
* no known bugs found

## License
#### MIT

#### copyright (c) 2022 Jacob Palaoro






//test section
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should change any number including 3 to the string "Won't you be my neighbor?"
Code: beepBoop(23);
Expected Output:
 [0, 1, 2, "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 12, "won't you be my neighbor?", 14, 15, 16, 17, 18, 19, 20, 21, 22, "won't you be my neighbor?"]

Test: "It should change any number including 2 and not including 3 to the string "boop"
Code: beepBoop(23);
Expected Output:
 [0, 1, 'boop', "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 'boop', "won't you be my neighbor?", 14, 15, 16, 17, 18, 19, 'boop', 'boop', 'boop', "won't you be my neighbor?"]

Test: "It should change any number including 1 and not including 2 or 3 to the string "beep"
Code: beepBoop(23);
Expected Output:
 [0, 'beep', 'boop', "won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'beep', 'beep', 'boop', "won't you be my neighbor?", 'beep', 'beep', 'beep', 'beep', 'beep', 'beep', 'boop', 'boop', 'boop', "won't you be my neighbor?"]