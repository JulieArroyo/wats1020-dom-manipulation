//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };
	// Hides the login form and button, replaced by welcome string.
	  $('#login-form a').on ('click',function(){
		$('#login-form').hide();
		  var userFullname = "Welcome" + " " +  userInfo.firstName + " " + userInfo.lastName;
		  $('.user-info').html(userFullname ).fadeIn();
		  
	  });
	// Toggling between View and Hide of the paragraph once button is clicked.
	$('.view-details').on('click', function(event){
		console.log(event);
		var targetElement = event.target;
		var container = targetElement.parentElement.parentElement;
		$(container).find('.details').each(function(index, el){
		  if ($(el).is(':visible')){
			  $(el).fadeOut();
			targetElement.innerText = "View Details";
			}else{
			  $(el).fadeIn();
			  targetElement.innerText = "Hide Details";
			}
		});
	});
	// collects vote-data, and fills progress bar accordingly between 'great' and 'greatest' 
	$('.vote').on('click', function(){
		
			var vote = $(this).data('vote');
		
		if( vote === 'great'){
			voteCounts.great++;
			voteCounts.total++;
		}else if( vote=== 'greatest'){
			voteCounts.greatest++;
			voteCounts.total++;
		}
	// determines vote percentage.		
			var greatWidth = voteCounts.great / voteCounts.total *100;
			var greatestWidth = voteCounts.greatest / voteCounts.total *100;
			$('.great-progress').css({
				width: greatWidth + "%"
			});
			$('.greatest-progress').css({
				width: greatestWidth + "%"
			});

	});

});