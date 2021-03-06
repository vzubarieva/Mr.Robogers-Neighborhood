 # _Mr. Roboger's Neighborhood_

#### By _**Viktoriia Zubarieva**_
## Description

  This is a web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the substitutions made within the returned range.

[GitHub pages](https://vzubarieva.github.io/Mr.Robogers-Neighborhood)
## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_
* _jQuery_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Open index.html_ 

## Known Bugs

* _No known issues_


## License

_MIT_

Copyright (c) _2022_ _Viktoriia Zubarieva_

 ### Tests

 Describe: beepBoop();

 Test:"It should return an array of numbers from 0 to the user's inputted number"
 Code: beepBoop("5");
 Expected Output:[0, 1, 2, 3, 4, 5];

 Test: "if user input is 0 it should return an array with one digit"
 Code: beepBoop("0");
 Expected Output:[0];

 Test: "if user input is 3 it should return an array with numbers from 0 to 2 and "Won't you be my neighbor?" according to hierarchy of substitution"
 Code: beepBoop("3");
Expected Output: [0,1,2,Won't you be my neighbor?];

Test: "if user input is 2 it should return an array with numbers from 0 to 1 and "Beep!" according to hierarchy of substitution"
Code: beepBoop("2");
Expected Output: [0,1,"Boop!"];

Test: "if user input is 1 it should return an array with 0 and "Boop!"according to hierarchy of substitution"
Code: beepBoop("1");
Expected Output: [0,"Beep!"];

Test: "If user input is 4 it should return an array with numbers and phrases "
Code: beepBoop("4");
Expected Output: [0,"Beep!',"Boop!","Won't you be my neighbor?", 4];

Test:"if user's input is 12 it should return an array with numbers and phrases"
Code: beepBoop("12");
Expected Output: [0,"Beep!',"Boop!","Won't you be my neighbor?", 4, 5, 6, 7,8,9,"Beep!","Beep!',"Boop!"];

Test:"if user's input is 15 it should return an array with numbers and phrases"
Code: beepBoop("15");
Expected Output: [0,"Beep!',"Boop!","Won't you be my neighbor?", 4, 5, 6, 7,8,9,"Beep!","Beep!',"Boop!","Won't you be my neighbor?","Beep!',"Beep!"];

Test:"if user's input is 35 it should return an array with numbers and phrases"
Code: beepBoop("35");
Expected Output: [0,"Beep!',"Boop!","Won't you be my neighbor?", 4, 5, 6, 7,8,9,"Beep!","Beep!',"Boop!","Won't you be my neighbor?","Beep!',"Beep!", "Beep!',"Beep!',"Beep!,"Beep!',"Boop","Boop!',"Boop!',"Won't you be my neighbor?","Boop!,"Boop!',"Boop!', 'Boop!',"Boop!',"Boop!',"Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?","Won't you be my neighbor?"];





