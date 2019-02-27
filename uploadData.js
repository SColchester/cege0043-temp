function startDataUpload() {
	//get form values
	var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var module = document.getElementById("module").value;
    var postString = "name=" + name + "&surname=" + surname + "&module=" + module;
    // pop an alert
    alert (postString);
}