/*Height Test*/
var height = (window.innerHeight > 0) ? window.innerHeight : screen.Height;if(height<300){alert("Device is too small to work correctly. Please maintain least height of 300px");console.log("Height test working.");}
/*Width Test*/
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;if((width<300)){alert("Device is too small to work correctly. Please maintain least width of 250px");console.log("Width test Working");}
/*Output as Width & Height*/
console.log(width);console.log(height);