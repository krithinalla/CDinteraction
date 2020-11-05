let selection = 0
let over = 0

function update(){
	let options = document.querySelectorAll('.option')
	options.forEach(item=> item.onclick=function(){
		selection = item.id
		console.log(selection)
	})
}

update();

function updatepls(){
	let second = document.querySelectorAll('.second')
	console.log(second)
	second.forEach(objects=> objects.onmouseover=function(){
		over = objects.id
		angry.innerHTML = 'im angry'
		confused.innerHTML = 'im confused'
		hopeless.innerHTML = 'im hopeless'
	})

	second.forEach(objects=> objects.onmouseout = function(){
		over= objects.id
		angry.innerHTML = 'angry'
		confused.innerHTML = 'confused'
		hopeless.innerHTML = 'hopeless'
	})
}

updatepls();