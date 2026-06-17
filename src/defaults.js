//Shared default values for imperial and metric units.
//Used by App.js and processQueries.js so both stay in sync.

export const defaultImperial = {
	diameter:100,
	startheight:4,
	units:"ft",
	percentgravity:100,
	thrownUp:3,
	accel_earth:32.174,
	anglefromVertical:0,
	speed: 14, //13.894,
	percenttime:100,
}

export const defaultMetric = {
	diameter: 30, //15.24,
	startheight: 1.2,  //1.219,
	units:"m",
	percentgravity:100,
	thrownUp: 1, //.92,
	accel_earth: 9.80665,
	anglefromVertical:0,
	speed: 4, //4.235,
	percenttime: 100,
}
