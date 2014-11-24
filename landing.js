// Make a collection of URLS

Urls = new Meteor.Collection("urls");
Trainers = new Meteor.Collection("trainers");

if (Meteor.isClient) {
	Template.hero.greeting = function () {
		return "Breaking images into words with maths.";
	};
	
	Template.about.description = function() {
		return "'CAPTCHA' stands for 'Completely Automated Public Turing Test to tell Computers and Humans Apart'." +
				" These often taken the form of pesky images that slow down our log-in attempts. Our" +
				" aim is to automate the solving of these image puzzles.";
	}
	
	Template.about.goal = function() {
		return "We hope to accomplish this through the training of neural networks that can attain high" +
				" accuracy. You can help us accomplish this by submitting captcha images with their text-based solutions" +
				" to help train our machine learning Skyne-... networks. Ahem.";
	}
	
	  Template.urlList.urls = function () {
	    	return Urls.find();
	  };

	Template.hello.events({
    'click input': function () {
    	// template data, if any, is available in 'this'
    	if (typeof console !== 'undefined')
    		console.log("You pressed the button");
    	}
	});
}

if (Meteor.isServer) {
	
	Meteor.startup(function () {
		
		Urls.remove({});
		
		// Mock data
		if (Urls.find().count() === 0)
		{
			var urls = [
			            {url: "www.reddit.com", name: "Reddit", training_status: "Untrained", sample_number: 0},
			            {url: "www.google.com", name: "Google", training_status: "Untrained", sample_number: 0},
		            	{url: "www.meteor.com", name: "Meteor", training_status: "Untrained", sample_number: 0}
			            ];
			
			for (var i = 0; i < urls.length; i++)
			{
	        	Urls.insert(urls[i]);
			}
	  	}
    // code to run on server at startup
	});
}
