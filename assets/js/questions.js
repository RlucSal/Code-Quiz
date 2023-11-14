let questions =[

{
    Question: 'JavaScript is the same as Java.',
    Choises : ['False', 'True'],
    CorrectAnswer: 'False',
},

{
    Question: 'Is JavaScript case-sensitive?',
    Choises : ['Yes', 'No'],
    CorrectAnswer: 'Yes',
},

{
    Question: 'Inside which HTML element do we put the JavaScript?',
    Choises : ['<scripting', '<js>', '<javascript>', '<script>'],
    CorrectAnswer: '<script>',
},

{
    Question: 'What is the correct JavaScript syntax to change the content of the HTML element <p id= "demo ">This is a demostration</p>',
    Choises : ['document.getElement("p").innerHTML="Hello word"', 'document.getElementById("demo").innerHTML="Hello World"', 'document.getElementByName("p").innerHTML= "Hello World"', '#demo.innerHTML="Hello World"'],
    CorrectAnswer: 'document.getElementById ("demo").innerHTML= "Hello World"',
},

{
    Question: 'Where is the correct place to insert a JavaScript?',
    Choises : ['The <head> section', 'The <body> section', 'Both the <head> section and the <body>section are correct', 'No answer above are correct'],
    CorrectAnswer:  'Both the <head> section and the <body>section are correct',
},

{
    Question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
    Choises : ['<script src="xxx.js">', '<script name=xxx.js>','<script href=xxx.js>', '<script=xxx.js>'],
    CorrectAnswer: '<script src="xxx.js">',
},

{
    Question: 'The external JavaScript file must contain the <script> tag.',
    Choises : ['True', 'False'],
    CorrectAnswer: 'False',
},

{
    Question: 'How do you write "Hello World" in an alert box?',
    Choises : ['alert("Hello World")', 'msgBox("Hello World")', 'alertBox("Hello World")', 'msg("Hello World")'],
    CorrectAnswer: 'alert("Hello World")',
},

{
    Question: 'How do you create a function in JavaScript?',
    Choises : ['function = myFunction()', 'function:myFunction()', 'function myFunction()'], 
    CorrectAnswer: 'function myFunction()',
},

{
    Question: 'How do you call a function named "myFunction"?',
    Choises : ['myFunction()', 'call myFunction()', 'call function myFunction()'], 
    CorrectAnswer: 'myFunction()',
},

{
    Question: 'How to write an IF statement in JavaScript?',
    Choises : ['if i = 5 then', 'if i = 5', 'if (i === 5)', 'if i == 5 then'],
    CorrectAnswer:  'if (i === 5)',
},

{
    Question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    Choises : ['if (i != 5)', 'if i <> 5', 'if i != 5 then', 'if (i <> 5)'],
    CorrectAnswer: 'if (i != 5)',
},

{
    Question: 'How does a WHILE loop start?',
    Choises : ['while (i <= 10)', 'while (i <= 10; i++', 'while i = 1 to 10'], 
    CorrectAnswer: 'while (i <= 10)',
},

{
    Question: 'How does a FOR loop start?',
    Choises : ['for (i <= 5; i++)', 'for i = 1 to 10', 'for ( i = 0; i <= 5)', 'for (i = 0; i <= 5; i++)'],
    CorrectAnswer: 'for (i = 0; i <= 5; i++)'
},

{
    Question: 'How can you add a comment in a JavaScript?',
    Choises : ['<!--This is a comment-->', '"This is a comment"', '//This is a comment'], 
    CorrectAnswer: '//This is a comment',
},

{
    Question: 'What is the correct way to write a JavaScript array?',
    Choises : ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = ["red", "green", "blue"]', 'var colors =  "red", "green", "blue"', 'var colors = (1: "red",2: "green", 3: "blue")'],
    CorrectAnswer:  'var colors = ["red", "green", "blue"]',
},

{
    Question: 'How do you round the number 7.25, to the nearest integer?',
    Choises : ['round(7.25)', 'rnd(7.25)', 'Math.rnd(7.25)', 'Math.round(7.25)'],
    CorrectAnswer: 'Math.round(7.25)',
},

{
    Question: 'Which event occurs when the user clicks on an HTML element?',
    Choises : ['onmouseclick', 'onclick', 'dblclick', 'onmouseover',],
    CorrectAnswer: 'onclick',
},

{
    Question: 'How do you declare a JavaScript variable?',
    Choises : ['vcarName', 'variable carName', 'var carName'],
    CorrectAnswer: 'var carName',
},

{
    Question: 'Which operator is used to assign a value to a variable?',
    Choises : ['x','*', '=', '-'],
    CorrectAnswer: '=',
},

{
    Question: 'What will the following code return: Boolean(10 > 9)',
    Choises : ['NaN', 'False', 'True'],
    CorrectAnswer: 'True',
},
{
    Question: ' How do you read the first character in a string ?',
    Choises : ['stringName.charAt(0)', 'stringName.substring(1)','stringName.charAt(1)','stringName.charAt(2)'],
    CorrectAnswer: 'stringName.charAt(0)',
},
{
    Question: 'What is DOM ?',
    Choises : ['Dynamic Object Model', 'Document Object Model','Distributed Object Model', 'None of these'],
    CorrectAnswer: 'Document Object Model',
},

{
    Question: 'Suppose that ele is an element node. Select all the expressions below which can be used to select the parent node of ele.',
    Choises : ['ele.parentElement', 'ele.parentContainer', 'ele.parentNode', 'ele.getParent()'],
    CorrectAnswer: 'ele.parentElement',
},

{
    Question: 'How to select the first element in an HTML document matching the CSS selector .main .title .t1?',
    Choises : ['document.querySelector(".main .title .t1")', 'document.querySelectorAll(".main .title .tl")', 'document.body.matches(".main .title .tl")'],
    CorrectAnswer: 'document.querySelector(".main .title .t1")'
},


];