function mydetails() {

    first_name = document.getElementById('fn').value
    middle_name = document.getElementById('mn').value
    last_name = document.getElementById('ln').value
    father_name = document.getElementById('fan').value
    mother_name = document.getElementById('mon').value
    current_address = document.getElementById('cn').value
    permanent_address = document.getElementById('pn').value
    landline = document.getElementById("lal").value
    mobilenumber = document.getElementById("mob").value
    dob = document.getElementById("dob").value
    pob = document.getElementById("pob").value
    hiq = document.getElementById("hiq").value
    yop = document.getElementById("yop").value
    Abt = document.getElementById("abt").value
    nat = document.getElementById("nat").value
    aadr = document.getElementById("aadr").value
    pancn = document.getElementById("pancn").value
    qu1=document.getElementById("qu1").value
    in1=document.getElementById("in1").value
    ye1=document.getElementById("ye1").value
    ma1=document.getElementById("ma1").value
    



    var gender = "";
    var ele = document.getElementsByName("g1");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            gender = ele[i].value;
        }
    }

    var languages_known = [];
    var ele = document.getElementsByName("lk");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            languages_known.push(ele[i].value);
        }
    }

    var hobbies = [];
    var ele = document.getElementsByName("hb");
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            hobbies.push(ele[i].value);
        }
    }

    window.alert("Name: " + first_name + " " + middle_name + " " + last_name + "\n" +
        "Father's Name: " + father_name + "\n" + "Mother'Name: " + mother_name + "\n" +
        "Current Address: " + current_address + "\n" + "Permanent Address: " + permanent_address + "\n" +
        "Phonenumbers" + "\n" + "Landline: " + landline + "\n" + "Mobile Number: " + mobilenumber + "\n" +
        "Date of birth:" + dob + "\n" + "Place of birth :" + pob + "\n" +
        "Gender: " + gender + "\n" +
        "Highest Qualification: " + hiq + "\n" +
        "Year of Passing: " + yop + "\n" +
        "Languages Known: " + languages_known + "\n" +
        "Hobbies: " + hobbies + "\n" +
        "About Yourself: " + Abt + "\n" +
        "Nationality: " + nat + "\n" +
        "Aadhar Number: " + aadr + "\n" +
        "Pancard Number: " + pancn+"\n"+
        "Qualification: " + qu1 + "\n" +
        "Institute: " + in1 + "\n" +
        "Year of Passing: " + ye1 + "\n" +
        "Marks: " + ma1 

    )


}