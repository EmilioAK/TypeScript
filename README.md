# Report for Assignment 1

## Project chosen

Name: TypeScript

URL: https://github.com/EmilioAK/TypeScript.git

Number of lines of code and the tool used to count it:  4774750 lines counted with lizard (python tool)

Programming language: TypeScript and JavaScript

## Coverage measurement

### Existing tool

<Inform the name of the existing tool that was executed and how it was executed>

Typescript already included an existing coverage checker called `c8`. It then uses `lcov` to generate a readable report that is also converted into an HTML file that can be viewed in the browser.

![image](max_coverage_before.png)

### Your own coverage tool

We finished our assignment before the project description was rewritten and got permission from Phillip to keep our code that tests different functions. Typescript does not allow us to print inside the files we are testing. The workaround we went with is to create our own custom branch coverage code that we added to the files, as intended, and then we create tests that execute successfully if the branches are reached as expected. This has the same effect and provides the same information as printing inside the branch coverage code would.

<The following is supposed to be repeated for each group member>

#### Max Raulea

base64decode()

commit url: https://github.com/microsoft/TypeScript/commit/f91ae9729538be45120c40d16c18aa85d48763f9

![image](coverage_info_max.png)

clearMeasures()

commit url: https://github.com/microsoft/TypeScript/commit/f91ae9729538be45120c40d16c18aa85d48763f9

![image](coverage_info_max.png)

#### Emilio Alvarez

The tests executing successfully for me indicates that the coverage was properly checked and ran as expected.

`mark()`

Commit url: https://github.com/EmilioAK/TypeScript/commit/43aa6178b8c50de22557d291ceb2ca523749039a

<img width="2050" alt="Screenshot 2024-06-27 at 11 38 36" src="https://github.com/EmilioAK/TypeScript/assets/57467368/58398490-1358-490a-956c-9f96f5ab4357">

`clearMarks()`

Commit url: https://github.com/EmilioAK/TypeScript/commit/43aa6178b8c50de22557d291ceb2ca523749039a

<img width="2050" alt="Screenshot 2024-06-27 at 11 38 36" src="https://github.com/EmilioAK/TypeScript/assets/57467368/58398490-1358-490a-956c-9f96f5ab4357">

#### Erona Gashi
The tests executing successfully for me indicates that the coverage was properly checked and ran as expected.

`enable()`

Commit url: https://github.com/EmilioAK/TypeScript/commit/b73270f4a8b7918952105ad4558bb1ddb7f29390

![E412B200-0830-4CAC-B586-58F8B72397D8](https://github.com/EmilioAK/TypeScript/assets/103590526/f3c48847-88f0-4e26-b266-52571a5d3989)

`disable()`

Commit url: https://github.com/EmilioAK/TypeScript/commit/b73270f4a8b7918952105ad4558bb1ddb7f29390

![E412B200-0830-4CAC-B586-58F8B72397D8](https://github.com/EmilioAK/TypeScript/assets/103590526/f3c48847-88f0-4e26-b266-52571a5d3989)

#### Saar Molenaar
The tests executing successfully for me indicates that the coverage was properly checked and ran as expected.

'assertOptionalToken()'

![image](saar_laatste.jpeg)

Commit url: https://github.com/microsoft/TypeScript/commit/b39347ddf8de96af5af49f3e6dcfcbeffd92a18f

'assertMissingNode()'

![image](saar_laatste.jpeg)

Commit url: https://github.com/microsoft/TypeScript/commit/b39347ddf8de96af5af49f3e6dcfcbeffd92a18f

## Coverage improvement

### Individual tests

<The following is supposed to be repeated for each group member>

#### Max Raulea


commmit url: https://github.com/microsoft/TypeScript/commit/60cc3cb5b24eb248859e20843ba2b33e93196406
<Provide the same kind of information provided for Test 1>

The coverage improved since at first the function was not tested, my test added a test for that fucntion which means it now is tested at thus covered in the tests. Before my tests of performance.ts it had a coverage of 68.2% and after my tests this was raised to 70%.
![image](max_coverage_before.png)
and after adding the new tests
![image](max_coverage_after.png)

### test 1 GetDuration()
before the functions were red in the coverage tool first
![image](before_duration.png)
and after the tests they became blue
![image](get_duration_after.png)

### test 2 ClearMeasures()
![image](before_measure.png)
![image](clearmarks_after.png)



#### Emilio Alvarez

`enable()` inside `src/compiler/performance.ts` & `mark()` inside `src/compiler/performance.ts`. These functions were basically not covered at all, and my tests cover at least 80% of the branches.

##### Test 1 `enable()`
https://github.com/EmilioAK/TypeScript/commit/7a0594b8080ac8e2dbda754c231d2c0c9fef2a9a

`enable()` before my tests
<img width="2056" alt="Enable before my tests" src="https://github.com/EmilioAK/TypeScript/assets/57467368/8595b33e-998a-4e8b-9b6f-6fabd1f19a94">

`enable()` after my tests
<img width="2056" alt="Screenshot 2024-06-26 at 18 53 00" src="https://github.com/EmilioAK/TypeScript/assets/57467368/f4579426-4ace-415c-82c8-dcd7c2411257">

##### Test 2 `mark()`
https://github.com/EmilioAK/TypeScript/commit/38d44a27579283c738adc50e4d6e17e477d090b1

`mark()` before my tests
<img width="2056" alt="Screenshot 2024-06-26 at 18 47 58" src="https://github.com/EmilioAK/TypeScript/assets/57467368/96054b09-c5f2-42a0-878c-5c27e8578f40">

`mark()` after my tests
<img width="2056" alt="Screenshot 2024-06-26 at 18 52 55" src="https://github.com/EmilioAK/TypeScript/assets/57467368/64d539d7-46fe-4deb-b1fc-79ea178324e3">

Coverage numbers before my tests
<img width="2056" alt="Screenshot 2024-06-27 at 14 56 05" src="https://github.com/EmilioAK/TypeScript/assets/57467368/e33a7b7d-fea2-4937-a7dc-c271950496d4">

Coverage numbers after my tests
<img width="2056" alt="Screenshot 2024-06-27 at 14 51 31" src="https://github.com/EmilioAK/TypeScript/assets/57467368/08c3c050-3f98-481a-ad2d-ba1ac488154b">

#### Erona Gashi
These functions were not covered before I wrote my tests

##### Test 1 `clearMarks()`
https://github.com/EmilioAK/TypeScript/commit/76f34d28f3a8c73a36ee35f2123db09297f591cf

`clearMarks()` before my tests
<img width="2056" alt="Screenshot 2024-06-27 at 15 54 49" src="https://github.com/EmilioAK/TypeScript/assets/57467368/3ba43f88-c378-44b2-a7f4-f2f0587faace">

`clearMarks()` after my tests
<img width="2056" alt="Screenshot 2024-06-27 at 15 35 45" src="https://github.com/EmilioAK/TypeScript/assets/57467368/f960653d-4fac-4b28-84b0-605f28428d22">

##### Test 2 `forEachMark()`
https://github.com/EmilioAK/TypeScript/commit/f95771b016f8202544f9e44da9520a232a34c6f2

`forEachMark()` before my tests
<img width="2056" alt="Screenshot 2024-06-27 at 15 54 49" src="https://github.com/EmilioAK/TypeScript/assets/57467368/3ba43f88-c378-44b2-a7f4-f2f0587faace">

`forEachMark()` after my tests
<img width="2056" alt="Screenshot 2024-06-27 at 15 35 55" src="https://github.com/EmilioAK/TypeScript/assets/57467368/32d7ee37-2963-48a2-a44f-294fefdfc874">

Coverage numbers before my tests
<img width="2056" alt="Screenshot 2024-06-27 at 14 51 31" src="https://github.com/EmilioAK/TypeScript/assets/57467368/08c3c050-3f98-481a-ad2d-ba1ac488154b">

Coverage numbers after my tests
<img width="2056" alt="Screenshot 2024-06-27 at 15 35 58" src="https://github.com/EmilioAK/TypeScript/assets/57467368/bebacf47-8c8c-4d8c-88a6-b04418a748cb">

#### Saar Molenaar
assertOptionalToken() inside src/compiler/debug.ts & assertMissingNode() inside src/compiler/debug.ts. My tests cover at least 80% of the branches.

#### Test 1 'assertOptionalToken()'
https://github.com/microsoft/TypeScript/commit/d6047fb35137b5c6172085a8eacb9b9d65752aea

assertoptionalToken before my tests

![image](saar7.jpeg)

assertoptionalToken after my tests

![image](saar1.jpeg)

#### Test 2 'assertMissingNode()'
https://github.com/microsoft/TypeScript/commit/d6047fb35137b5c6172085a8eacb9b9d65752aea

assertMissingNode before my tests

![image](saar5.jpeg)

assertMissingNode after my tests

![image](saar4.jpeg)

Coverage numbers before my tests '(debug.ts)'

![image](saar2.jpeg)

Coverage numbers after my tests '(debug.ts)'

![image](saar8.jpeg)


### Overall

![image](max_coverage_before.png)

<Provide a screenshot of the new coverage results by running the existing tool using all test modifications made by the group>

![image](full_coverage_real.png)

## Statement of individual contributions

Max Raulea: "I wrote some new tests for the 2 functions, clearmeasures() and getduration(), then I tested the coverage of the base64decode() and clearmeasures() function. I also wrote the shared part of the report in the md file as well as my own part"

Emilio Alvarez: "I wrote new tests for `mark()` and `enable()` and I tested the coverage of `mark()` and `clearMarks()` using my custom tool. I wrote my sections of this report.

Saar Molenaar: "i wrote new tests for assertOptionalToken() and assertMissingNode(), and i also tested the coverage of these functions. I wrote my sections of this report

Erona Gashi: "I wrote new tests for `clearMarks()` and `forEachMark()`. I tested the coverage of `enable()` and `disable()` using the custom tool. I wrote my sections of this report
