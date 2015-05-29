/**A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating
*  profiles as rectangles on a two-dimensional plane.
*  They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding
*  that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by
*  Google or Facebook or Obama or something.
*
*  Write a function to find the rectangular intersection of two given love rectangles.
*
*  As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each
*  side is parallel with either the x-axis or the y-axis.
*
*  They are defined as hash maps ? like this:
*
*  my_rectangle = {
*
*    # coordinates of bottom-left corner:
*    'x': 1, 
*    'y': 5, 
*
*    # width and height
*    'width': 10,
*    'height': 4,
*
*    }
*  Your output rectangle should use this format as well.
**/

(function(){
  function findIntersection(r1,r2,r3,axis,axisLen){
    if(r2[axis] < r1[axis] + r1[axisLen]){
      if(r2[axis] < r1[axis]){
        if(r2[axis] + r2[axisLen] > r1[axis]){
          //within axis boundaries
          r3[axis] = r1[axis];
          r3[axisLen] = r2[axisLen] + r2[axis] - r1[axis];
        }
        else{
          r3 = false;
        }
      }
      else if(r2[axis] >= r1[axis]){
        //within axis boundaries
        r3[axis] = r2[axis];
        r3[axisLen] = r1[axisLen] + r1[axis] - r2[axis];
      }
    }
    else{
      r3 = false;
    }
    return r3;
  }
  function intersectRect(r1,r2){
    var r3 = {};
    r3 = findIntersection(r1,r2,r3,'x','width') ? findIntersection(r1,r2,r3,'x','width') : false;
    r3 = findIntersection(r1,r2,r3,'y','height') ? findIntersection(r1,r2,r3,'y','height') : false;
    return r3;
  }
  //Share same edge
//   var rOne = {
//     x:1,
//     y:1,
//     width:7, 
//     height: 4
//   };
//   var rTwo = {
//     x:8,
//     y:2,
//     width:4, 
//     height: 2
//   };
// Contained within another
//   var rOne = {
//     x:1,
//     y:1,
//     width:7, 
//     height: 4
//   };
//   var rTwo = {
//     x:4,
//     y:3,
//     width:4, 
//     height: 2
//   };
//General use case
  var rOne = {
    x:1,
    y:5,
    width:10, 
    height: 4
  };
  var rTwo = {
    x:7,
    y:7,
    width:5, 
    height: 10
  };
  console.log(intersectRect(rOne,rTwo));
})();