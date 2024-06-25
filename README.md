# Report for Assignment 1

## Project chosen

Name: TypeScript

URL: https://github.com/EmilioAK/TypeScript.git

Number of lines of code and the tool used to count it:  4774750 lines counted with lizard (python tool)

Programming language: TypeScript and JavaScript

## Coverage measurement

### Existing tool

<Inform the name of the existing tool that was executed and how it was executed>

for the existing tool we used a tool called lcov, this made html which we could open in our browser to read the coverage of all lines and files.

![image](max_coverage_before.png)

### Your own coverage tool

<The following is supposed to be repeated for each group member>

Max Raulea

base64decode()

commit url: https://github.com/microsoft/TypeScript/commit/f91ae9729538be45120c40d16c18aa85d48763f9

![image](coverage_info_max.png)

clearMeasures()

commit url: https://github.com/microsoft/TypeScript/commit/f91ae9729538be45120c40d16c18aa85d48763f9

![image](coverage_info_max.png)

## Coverage improvement

### Individual tests

<The following is supposed to be repeated for each group member>

Max Raulea

GetDuration()
&
ClearMeasures()
commmit url: https://github.com/microsoft/TypeScript/commit/60cc3cb5b24eb248859e20843ba2b33e93196406
<Provide the same kind of information provided for Test 1>

The coverage improved since at first the function was not tested, my test added a test for that fucntion which means it now is tested at thus covered in the tests. Before my tests of performance.ts it had a coverage of 68.2% and after my tests this was raised to 70%.
![image](max_coverage_before.png)

and after adding the new tests
![image](max_coverage_after.png)

### Overall

![image](max_coverage_before.png)

<Provide a screenshot of the new coverage results by running the existing tool using all test modifications made by the group>

## Statement of individual contributions

Max Raulea: "I wrote some new tests for the 2 functions, clearmeasures() and getduration(), then I tested the coverage of the base64decode() and clearmeasures() function. I also wrote the shared part of the report in the md file as well as my own part"
