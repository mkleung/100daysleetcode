/**

https://leetcode.com/problems/robot-return-to-origin/

 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {

	// 85% faster
	var count = moves.split("").reduce((sum, current) => {
		switch(current){
			case "R": sum.x++;break;
    		case "L": sum.x--;break;
    		case "U": sum.y++;break;
    		case "D": sum.y--;break;
		}

		return sum;
	}, {y:0,x:0});

	return ((count.x == 0 && count.y== 0) ? true:false);


	// 53% faster
    // var movesArray = moves.split("");
    // var countX = 0;
    // var countY = 0;
    // for (var i = 0; i < movesArray.length; i++) {
    // 	var move = movesArray[i];

    // 	switch(move) {
    // 		case "R": countX++;break;
    // 		case "L": countX--;break;
    // 		case "U": countY++;break;
    // 		case "D": countY--;break;
    // 		default: break;
    // 	} 
    // }
    //  return ((countX == 0 && countY== 0) ? true:false);
};

console.log(judgeCircle("DURDLDRRLL"));