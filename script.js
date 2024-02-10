let i = document.getElementById("taskinfo");
document.getElementById("add").onclick()function() {
  if (i[0].value === "") {
    alert("Please enter a value");
  } else {
    let lis = document.createElement("li");
    lis.innerHTML = i[0].value;
    document.getElementById("tasklist").appendChild(lis);
  }
};