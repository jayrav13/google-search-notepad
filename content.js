chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message != "notepad") {
			console.log("Error!");
		}
		else {
			console.log("Message successfully arrives!");
			$("#resultStats").html("<textarea rows=\"3\" cols=\"80\"  id=\"jr-notepad\" class=\"jr-notepad\" placeholder=\"Welcome to your Google Notepad!\"></textarea>");
			$("#jr-notepad").on("keyup", function(e) {
				if(e.which == 13 && !e.shiftKey) {
					console.log($("#jr-notepad").val());
					test();
				}
			});


		}
	}
);

function test() {

	var email = $(".gb_8a").text();
	var message = $("#jr-notepad").val();

	data = {
		email:email,
		message:message
	}
	$.ajax({
		type: 'POST',
		url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		data: {
			'key': "2i_R3FcCFGjIQYmH5dsuVw",
			'message': {
				'from_email': 'jayrav13@gmail.com',
				'to': [
					{
						'email': email,
						'type': 'to'
					}
				],
				'autotext': 'true',
				'subject': 'New note from Google Notes!',
				'html': message 
			}
		}
	}).success(function(response) {
		alert("Sent a message to " + email + "!");
		$("#jr-notepad").val("");
		console.log(response); // if you're into that sorta thing
	});
}
