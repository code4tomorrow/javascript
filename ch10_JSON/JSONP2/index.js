document.getElementById("Submit").onclick = function() {
    let form = {
    companyName: document.getElementById("companyName").value,
    NumOfEmployees: document.getElementById("NumOfEmployees").value,
    Revenue: document.getElementById("Revenue").value,
    Rating: document.getElementById("Rating").value,
    usCorp: document.getElementById("usCorp").value
    }
    console.log(JSON.stringify(form))
    

}





 
