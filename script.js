// processLoops function  
function processLoops()
{
    alert("In function processLoop"); // displays alert message 

    // Declare variables 
    let mainCount = 0; 

    let subCount = 0; 

    
    // first loop 
    for(mainCount=10; mainCount>5; mainCount--)
    {
        // Write on webpage 

        document.write("Main Counter is at value " + mainCount + "<br/>");
    }

    // print message 
    document.write("End of first loop<br/>");

    
    // second loop 
    for(mainCount=3; mainCount>=0; mainCount--)
    {
        // nested loop 
        for(subCount=4; subCount>=0; subCount--)
        {
            document.write("Main Count is at " + mainCount + " and Sub Count is at " + subCount + "<br/>");
        }
    }
}

// processIf function 
function processIf()
{
    alert("In function processIf");

    // Declare variables
    let num1, num2, num3 = 0; 

    // Get a number from the user and convert it to an integer 
    num1 = parseInt(prompt("Enter first number: ", ""))

    // Get a second number from the user 
    num2 = parseInt(prompt("Enter second number: ", ""));

    // Get a thrid number from the user 
    num3 = parseInt(prompt("Enter thrid number: "));

    // if/else if statement 
    if (num1 > num2 && num1 > num3)
    {
        alert("First number is largest");
    }
    else if (num2 > num1 && num2 > num3)
    {
        alert("Second number is largest");
    }
    else if (num3 > num1 && num3 > num2 )
    {
        alert("Third number is the largest")
    }
    else 
    {
        alert("Numbers are equal");
    }
}


// drawShapes function 1
function drawSquare()
{
    let shape = '#'; // initialize the variable shape to the string value of '#'
    let count = 0; // initialize the variable count to the integer value of 0

    // for loop that uses the count variable for iteration 
    // (begins at 0 and exits loop if count is less thatn or equal to 6)
    // count is incremented by 1 for each iteration
    for(count=0; count<=6; count++) 
    {
        if (count == 0 || count == 6) // if count is equal to 0 or 6 then this code block is executed
        {
            document.write("########</br>"); // writes the string value to the webpage 
        }
        else if (count == 1 || count == 6)
        {
            document.write("#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</br>"); // writes the string value to the webpage 
        }
        else if (count == 2 || count == 6)
        {
            document.write("#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</br>"); // writes the string value to the webpage 
        }
        else if (count == 3 || count == 6)
        {
            document.write("#&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#</br>"); // writes the string value to the webpage 
        }
    }
}

// rectangle 
function drawRectangle()
{
    let shape = '*';
    let lineBreak = "</br>";
    let rows = 7; 

    for (i = 0; i < rows; i++) // for loop to create rows 
    {
        document.write(`${shape.repeat(rows)} ${lineBreak}`); // repeat multiples * on each row (repeat takes one argument, an int and mulitples the string by that number)
    }
}

// triangle 
function drawTriangle()
{
    let shape = '*';
    let space = "&nbsp;";
    let lineBreak = "</br>";
    let rows = 7; 

    for (i = 1; i< rows; i++)
    {
        //each row will display white spaces and or *'s 
        document.write(`${space.repeat(rows - i)}  ${shape.repeat(i)} ${lineBreak}`)
    }
}

//right angle triangle 
function drawRightAngleTriangle()
{
    let shape = '*';
    let row = 5;
    let lineBreak = "</br>";

    for (i = 0; i<= row; i++) // outer loop for each row (set to 5)
    {
        for (j = 0; j <= i; j++) // inner loop for each column 
        {
            document.write(shape) // draw shape from left to right
        }
        document.write(lineBreak) // create a new line 
    }   
}



