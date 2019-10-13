//Invoke the function on page load using an immediately-invoked function expression
(function() {
  //Create method createWorker
    var createWorker = function() {
      
      //initialise a private counter
      var workCount = 0;
  
      //Initialise a private method task1 
      var task1 = function() {
  
        workCount += 1;
        console.log("task1: " + workCount);
      };
  
      //Initialise a private method task2 
      var task2 = function() {
        workCount += 1;
        console.log("task2: " + workCount);
      };
  
      return {
        //Assign task1 one to themethod job1 and return it to make it publically accessible
        job1: task1,
      //Assign task2 one to themethod job2 and return it to make it publically accessible
        job2: task2
      };
  
  
    };
  
//Assign createWorker to worker variable
    var worker = createWorker();
  
    //Call job1 and two from worker
    worker.job1();
    worker.job2();
    worker.job2();
    worker.job2();
  
  }());