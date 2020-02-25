var express 		= require("express");
 		app 				= express(),
 		bodyparser 	= require("body-parser"),	
	 	mongoose 		= require("mongoose");

app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs")

mongoose.connect("mongodb://localhost/bellCamp");

//schema setup
var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);
// Campground.create(
// 	{
// 		name: "Saamon crekk", 
// 		image: "https://pixabay.com/get/57e8d34b4c50a814f6da8c7dda793f7f1636dfe2564c704c7d2e73d79e45c750_340.jpg",
// 		description: "This is a coll place to visit"
		
// 	}, function(err, campground){
// 			if(err){
// 				console.log(err);
// 			}
// 			else {
// 				console.log("Newly created:");
// 				console.log(campground);
// 			}
// 	});


app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	Campground.find({}, function(err, allcampgrounds){
		if(err){
			console.log(err);
		}
		else {
			res.render("campgrounds", {campgrounds: allcampgrounds});
		}
	});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc};
	//add entry to database
	Campground.create(newCampground, function(err, newlycreated){
		if(err){
			//error message with apprpriate message
			console.log(err);
		}
		else {
			res.redirect("/campgrounds");
		}
	});
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});

//show - show more info about each campground
app.get("/campgrounds/:id", function(req, res){
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		}
		else {
			res.render("show", {campground: foundCampground});
		}
	});
});

app.get("/login", function(req, res){
		res.render("login");
	});

app.listen(3001, function() {
					 console.log("running server on 3001");
					 });