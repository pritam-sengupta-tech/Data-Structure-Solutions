function func1() {
  func2();
  console.log("Function 1");
  // The call stack is a data structure that stores information about the active subroutines of a computer program.
};

function func2() {
  func3();
  console.log("Function 2");
    // The call stack is used to keep track of function calls in a program. Each time a function is called, a new frame is added to the stack.
}

function func3() {
    console.log("Function 3");
}

func1();