const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "695 Park Avenue · New York, NY",
		imageUrl: "https://www.usciences.edu/images/homepage-hero/one-university-endless-possibilities-slider-mobile.jpg"

	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "86 Brattle Street Cambridge, MA",
		imageUrl: "https://www.usciences.edu/images/homepage-hero/one-university-endless-possibilities-slider-mobile.jpg"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
		});

	await dummy_student.setCampus(dummy_campus);

}

module.exports = seedDB;
