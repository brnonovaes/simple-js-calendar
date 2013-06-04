/* ------------------------------ */
/* ---------- CALENDAR ---------- */
/* ------------------------------ */
function calendar() {
	
	var date=new Date();;
	
	var month_corr_factor = [1,leapYear(date.getFullYear),1,0,1,0,1,1,0,1,0,1];
				
	if(date.getMonth()==0) month = "February";
	else  if(date.getMonth()==1) month = "January";
	else  if(date.getMonth()==2) month = "March";
	else  if(date.getMonth()==3) month = "April";
	else  if(date.getMonth()==4) month = "May";
	else  if(date.getMonth()==5) month = "June";
	else  if(date.getMonth()==6) month = "July";
	else  if(date.getMonth()==7) month = "August";
	else  if(date.getMonth()==8) month = "September";
	else  if(date.getMonth()==9) month = "October";
	else  if(date.getMonth()==10) month = "November";
	else if(date.getMonth()==11) month = "December";
			
	document.getElementById("month").innerHTML=month;	
	first_day_month=new Date(date.getFullYear(),date.getMonth(),1);	
	first_day_week=first_day_month.getDay();	
	
	/* PREVIOUS MONTH LAST DAYS */
	var prev_month_last_day=30+month_corr_factor[date.getMonth()-1];	
	for(var square=first_day_week-1;square>=0;square--) {
		document.getElementsByClassName("day").item(square).innerHTML ="<span style='color:#ccc'>"+prev_month_last_day+"</span>";
		prev_month_last_day--;
	}
	
	
	/* CURRENT MONTH */
	for(var i=0;i<30+month_corr_factor[date.getMonth()];i++) {		
		if(date.getDate()!=i+1) {
			document.getElementsByClassName("day").item(i+first_day_week).innerHTML =(i+1);			
		}
		else {
			document.getElementsByClassName("day").item(i+first_day_week).innerHTML ="<strong>"+(i+1)+"</strong>";
		}
	}
	
	/* NEXT MONTH FIRT DAYS */
	var next_month_day_week=30+month_corr_factor[date.getMonth()]+first_day_week;	
	for(var square=next_month_day_week;square<document.getElementsByClassName("day").length;square++) {
		
		document.getElementsByClassName("day").item(square).innerHTML ="<span style='color:#ccc'>"+(square-next_month_day_week+1)+"</span>";	
	}
			
}
/* ----------------------------- */
/* --------- LEAP YEAR --------- */
/* ----------------------------- */
function leapYear(y) {
	if ((y % 4 == 0) && y % 100 != 0) {
		return -1;
	} else if (y % 400 == 0) {
		return -1;
	} else {
		return -2;
	}
}