// hash table for anon obj.
var favorites = {
	cartoon : "adventure time",
	color : 0xCC0000,
}
var user = {
	name : "jon",
	password : "swordfish",
	favorites : favorites
	
}
var name_of_property = "password"
console.log('favorites',user[name_of_property]);