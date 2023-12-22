function getFormvalue(event) {
    //Write your code here
	//event.preventDefault();
	let form=document.getElementById("form1");
	let fname=form.fname.value;
	let lname=form.lname.value;
	alert(`${fname}`+" "+`${lname}`);

}
