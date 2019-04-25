

//Basic JavaScript: Comparison with the Less Than Operator

function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
    
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  // Change this value to test
//   console.log(testLessThan(10));

//   console.log(testLessThan(26));

//   console.log(testLessThan(56));

  
// less than or equal to


function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
    
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  // Change this value to test
  testLessOrEqual(10);

  console.log(testLessOrEqual(10));

  console.log(testLessOrEqual(25));

  console.log(testLessOrEqual(23));