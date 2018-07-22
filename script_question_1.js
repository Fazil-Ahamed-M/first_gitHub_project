let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

//Using Bubble sort
for(let i=0; i<array.length; i++){
	for(let j=0; j<(array.length-1); j++){
		if(array[j] > array[j+1]){
			let temp = array[j];
			array[j] = array[j+1];
			array[j+1] = temp;
		}
	}
}

console.log(array);


let temp = [];
let cleanArray = [];
let grpCheck = 1;

for(let i=0; i<array.length; i++){
	if(grpCheck != 0){
		temp.push(array[i]);
		grpCheck = 0;
	}
	if(array[i] == array[i+1])
		temp.push(array[i+1])
	else{
		cleanArray.push(temp);
		temp = [];
		grpCheck++;
	}
}

console.log(cleanArray);
