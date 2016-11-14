$(document).ready(function(){
	$("#schedule-appt").html(getAppointments('_______'));


	$(document).on('click', '#avail', function(){
		$("#intro").slideUp();
		$("#appointments").show()
	})
})

function getAppointments(avail)
{
	var m_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	var d_names = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	var myDate = new Date();
	
	var html = [];

	for (var i = 0; i < avail.length ; i++) {
		myDate.setDate(myDate.getDate() + 1);
		var curr_date = myDate.getDate();
		var curr_month = myDate.getMonth();
		var curr_day  = myDate.getDay();

		html[i] = '<div class="button schedule">' + (d_names[curr_day] + ', ' + m_names[curr_month] + ' ' + curr_date) + '</div>';
	}

	return html.join('');
}