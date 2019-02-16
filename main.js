$(document).ready(function () { //checks if html is fully loaded
	$('#image1').prop('disabled', true); //on first page view, the button for the visible img has to be disabled
	$('.my-button').on("click", function (e) { //when a button with class .my-button is clicked
		e.preventDefault(); //have to add this so we don't get weird behavior in older browsers (or IE)
		$('.my-button').prop('disabled', false); //enable ALL buttons so NONE are disabled
		$(this).prop('disabled', true); //disable ONLY the button that was clicked - "this" button that was clicked
		var myInfo = $(this), // gather the info related to "this" button that was clicked and store in a variable call myInfo
			myLove = myInfo.data('image'); //from myInfo, grab the URL stored in data-image attribute and store in myUrl
		$('#india').attr('src', myLove); //Replace URL attribute for #aids-img by replacing what is in the src field
	}); //end of  function
}); //closes all the functions