const open = '(';
const close = ')';

function parsa(exp){
	exp = exp.split('');
		
	var countOpen = 0;
	var countClose = 0;
	
	for(var i = 0; i < exp.length - 1; i++){

		if(exp[i] === open){
			countOpen++;
		}else if(exp[i] === close){
			countClose++;
		}
	}

	if(countOpen === countClose)
		return true;
	else
		return false;
}
