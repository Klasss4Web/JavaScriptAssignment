# ```PARAMETERS AND ARGUMENTS```
Parameters and Arguments are two very important components of a function, although, there ae some functions where they are completely excluded, their usefulness in a function cannot be overemphasized. Both of them are very similar but their only difference comes when they are applied.

#### ```PARAMETERS```
A parameter is a named variable passed into a function. Parameter variables are used to import arguments into functions. Function parameters are the names listed in the function's definition. Parameters are initialized to the values of the arguments supplied. Parameters are like placeholders inserted inside a function during the time when the function is been defined. 

```
 function multiplyNumbers(parameterOne, parameterTwo) {
    const result = parameterOne * parameterTwo;
    return result;
 };
 ```

In the above function; 'multiplyNumbers', parameterOne and parameterTwo are acting as parameters for the function pending on when the function is called or invoked.

#### ```ARGUMENTS```
Function arguments are the real values passed to the function in order to call the function.

```
 function multiplyNumbers(100, 50);
```

In the above function call, the numbers 100 and 50 are the arguments to the function, multiplyNumbers. They are the values that the function will process to give an output according to the function statement.