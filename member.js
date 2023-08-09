function  skillsMember(){

    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");
    var skillsRegex = /^[a-zA-Z0-9]{2,20}$/;
    if (skillsRegex.test(skills) == true) {
        skillsError.innerHTML = "";
        return true;
    } else {
        skillsError.innerHTML = "Invalid skills";
        return false;
    }
}
