var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: true}));

app.set("view engine", "ejs")

var campgrounds = [
		{name: "Saamon crekk", image: "https://www.photosforclass.com/download/pixabay-4817872?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e8d4444255ae14f6da8c7dda793f7f1636dfe2564c704c7d2e73d79e45c750_960.jpg&user=chulmin1700"},
		{name: "stere acracks", image: "https://www.photosforclass.com/download/pixabay-1149402?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c7d2e73d79e45c750_960.jpg&user=Free-Photos"},
		{name: "hamilton parks", image: "https://www.photosforclass.com/download/pixabay-1867275?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c7d2e73d79e45c750_960.jpg&user=Pexels"}
	];

app.get("/", function(req, res){
	res.render("landing");
});


app.get("/campgrounds", function(req, res){
	
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name. image: image}
	campgrounds.push()	
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(3001, function() {
					 console.log("running server on 3001");
					 });