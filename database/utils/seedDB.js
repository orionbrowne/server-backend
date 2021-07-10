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
			email: "joeshmo@email.com",
			imageUrl: "https://i.pinimg.com/474x/db/82/ca/db82ca0637137b1ea787ded9e7485ffd.jpg",
			gpa: 3.0
		});
	const me_student = await Student.create({
		firstname: "Orion",
		lastname: "Browne",
		email: "orionsemail@email.com",
		imageUrl: "https://cdn2.bulbagarden.net/upload/thumb/c/cc/147Dratini.png/250px-147Dratini.png",
		gpa: 4.0
	})

	await dummy_student.setCampus(dummy_campus);
	await me_student.setCampus(dummy_campus);


}

module.exports = seedDB;
