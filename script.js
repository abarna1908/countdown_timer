var last = '00:00:00:00';
		var now = '2019/09/27 12:34:56'
		$('#clock').countdown(now, function(event) {
			  var format = '%H:%M:%S';
			  if(event.offset.totalDays > 0) {
				  if(event.offset.totalDays < 10){
					  format = '0%-d:' + format;
				  }
				  else{
					  format = '%-d:' + format;
				  }
				
			  }
			 now = event.strftime(format)
			animateTime(last,now)
			last = now;
			});
function animateTime(last,now){
	for(i=0;i<now.length;i++){
		if(last[i]!=now[i]){
			animate(i,now[i]);
		}
	}
}
function animate(index,number){
	var element = document.getElementsByClassName("number")[index];
	console.log(element.lastElementChild);

	 var second = element.lastElementChild.cloneNode(true)
	 console.log(second);
  second.innerHTML = number
  
  element.appendChild(second)
  element.classList.add('move')

  setTimeout(function () {
    element.classList.remove('move')
  }, 500)
  setTimeout(function () {
    element.removeChild(element.firstElementChild)
  }, 500)
	
}