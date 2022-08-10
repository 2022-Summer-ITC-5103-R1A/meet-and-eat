var rate = 0;
function submitRate(){
	var user=document.getElementById('user').value;
	var review=document.getElementById('review').value;
	let userr=user;
	if(rate != 0 && user !="" && review !=""){
		var html=
		"<h4>User: <label class='text-primary'>" + user + "</label></h4>"
		+"<h4>Rating: <label class='text-primary'>" + rate + "</label></h4>"
		+"<h4>Review</h4>"
		+"<p>"+review+"</p>"
		+"<hr style='border-top:1px solid #000;'/>";
		document.getElementById('result').innerHTML+=html;
		document.getElementById('user').value="";
		document.getElementById('review').value="";
	}
	if(user =="" )
	{
		document.getElementById("nouser").innerHTML = "No user name entered !!"
		
	}
	if(review =="" )
	{
		document.getElementById("norev").innerHTML = "No review entered !!"
	}
	if(rate =="0")
	{
		document.getElementById("nora").innerHTML = "No review entered !!"
	}
}

function startRating(item){
	rate=item.id[0];
	sessionStorage.star = rate;
	for(var i=0;i<5;i++){
		if(i<rate){
			document.getElementById((i+1)).style.color="yellow";
		}
		else{
			document.getElementById((i+1)).style.color="black";
		}
	}
}