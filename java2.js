function zodiac() {
	var dateEnter = document.getElementById("userinput").value;
	var datelink = document.getElementById("userinput");
	var dateInput = new Date(dateEnter);
	
	var year = dateInput.getFullYear();
	var	month = dateInput.getMonth();
	var day =dateInput.getDate();
		alert(month)

        if      ((month == 2) && (day == 29) )
		{	

		window.location.href = "hb.html";}
        else if      ((month == 12 && day >= 22 && day <= 31) || (month ==  1 && day >= 1 && day <= 19))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  1 && day >= 20 && day <= 31) || (month ==  2 && day >= 1 && day <= 17))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  2 && day >= 18 && day <= 29) || (month ==  3 && day >= 1 && day <= 19))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  3 && day >= 20 && day <= 31) || (month ==  4 && day >= 1 && day <= 19))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  4 && day >= 20 && day <= 30) || (month ==  5 && day >= 1 && day <= 20))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  5 && day >= 21 && day <= 31) || (month ==  6 && day >= 1 && day <= 20))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  6 && day >= 21 && day <= 30) || (month ==  7 && day >= 1 && day <= 22))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  7 && day >= 23 && day <= 31) || (month ==  8 && day >= 1 && day <= 22))
            System.out.println("Leo");
        else if ((month ==  8 && day >= 23 && day <= 31) || (month ==  9 && day >= 1 && day <= 22))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month ==  9 && day >= 23 && day <= 30) || (month == 10 && day >= 1 && day <= 22))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month == 10 && day >= 23 && day <= 31) || (month == 11 && day >= 1 && day <= 21))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else if ((month == 11 && day >= 22 && day <= 30) || (month == 12 && day >= 1 && day <= 21))
		{document.getElementById('leo').innerHTML="Your are b" ;}
        else
		{document.getElementById('leo').innerHTML="Your are b" ;}
    }






function get() {

	var dateEnter = document.getElementById("userinput").value;

	var dateInput = new Date(dateEnter);
	
	var year = dateInput.getFullYear();
	var	month = dateInput.getMonth();
	var date =dateInput.getDate();
	

	
	
	var now = new Date();
	var nowdateyear = now.getFullYear();
	var nowmonth =now.getMonth();
	var nowdate = now.getDate();

	var birth =  nowdateyear - year ;

	var birthMonth = nowmonth - month;
	birthMonth = Math.abs(birthMonth);

	var birthDate = date - nowdate;
	birthDate = Math.abs(birthDate);
	
if (year<1900 || year>2017){
alert("enter year between 1900 to 2017 to check your age");
	return dateEnter;
}
	

		
if (month < nowmonth) {
    document.getElementById('birth').innerHTML="Your are " +birth+ " years old , your birthday was " +birthMonth+" month  and  "  +birthDate+ " days ago";
} 
else if (month > nowmonth) {
    document.getElementById('birth').innerHTML= "You are " +birth+ " years old , your birthday is " +birthMonth+ " month and " +birthDate+" from today";
}
else if (month == nowmonth && date < nowdate) {
    document.getElementById('birth').innerHTML=birthDate + " days ago of your birthday";
}
else if (month == nowmonth && date > nowdate) {
    document.getElementById('birth').innerHTML=birthDate + " more days is your birthday";
}
 else if (month == nowmonth && date == nowdate) {
    document.getElementById('birth').innerHTML="Congrats, Today is your birthday";
}





  }