const { faker } = require("@faker-js/faker");
const { PrismaClient } = require("@prisma/client");
const database = new PrismaClient();
async function generateCategory() {
	let data = [];
	for (let i = 0; i < 100; i++) {
		const cat = {
			name: faker.commerce.department(),
		};
		data.push(cat);
	}
	return data;
}
async function main() {
	try {
		// const randomCategory = await generateCategory();

		await database.category.createMany({
			data: [
				{ name: "Electronics" },
				{ name: "Clothing & Apparel" },
				{ name: "Home & Garden" },
				{ name: "Health & Beauty" },
				{ name: "Toys & Games" },
				{ name: "Books & Magazines" },
				{ name: "Sports & Outdoors" },
				{ name: "Automotive" },
				{ name: "Jewelry & Accessories" },
				{ name: "Pet Supplies" },
				{ name: "Office Supplies" },
				{ name: "Baby & Kids" },
				{ name: "Food & Beverages" },
				{ name: "Travel & Luggage" },
				{ name: "Electricals" },
				{ name: "Furniture" },
				{ name: "Fitness & Wellness" },
				{ name: "Crafts & Hobbies" },
				{ name: "Art & Collectibles" },
				{ name: "Gadgets & Gizmos" },
				{ name: "Party Supplies" },
				{ name: "Stationery" },
				{ name: "Musical Instruments" },
				{ name: "Electronics Accessories" },
				{ name: "Cosmetics" },
				{ name: "Outdoor Equipment" },
				{ name: "Home Improvement" },
				{ name: "Kitchenware" },
				{ name: "Tech Gadgets" },
				{ name: "Virtual Reality" },
				{ name: "Fashion Accessories" },
				{ name: "DIY & Tools" },
				{ name: "Bath & Body" },
				{ name: "Outdoor Recreation" },
				{ name: "Smart Home" },
				{ name: "Party Decorations" },
				{ name: "Board Games" },
				{ name: "Car Accessories" },
				{ name: "Gardening Supplies" },
				{ name: "Kids Toys" },
				{ name: "Fashion Footwear" },
				{ name: "Digital Cameras" },
				{ name: "Health Supplements" },
				{ name: "Personal Care" },
				{ name: "Mobile Accessories" },
				{ name: "Travel Accessories" },
				{ name: "DIY Supplies" },
				{ name: "Fitness Equipment" },
				{ name: "Camping Gear" },
				{ name: "Computer Accessories" },
				{ name: "Audio & Video" },
				{ name: "Skincare" },
				{ name: "Home Decor" },
				{ name: "Cycling Gear" },
				{ name: "Educational Toys" },
				{ name: "Fashion Jewelry" },
				{ name: "Electronic Gadgets" },
				{ name: "Hair Care" },
				{ name: "Cookware" },
				{ name: "Smartphones" },
				{ name: "Luggage & Travel Gear" },
				{ name: "Pet Accessories" },
				{ name: "Painting Supplies" },
				{ name: "Party Favors" },
				{ name: "Remote Control Toys" },
				{ name: "Fitness Apparel" },
				{ name: "Tablet Accessories" },
				{ name: "Kitchen Appliances" },
				{ name: "Wearable Technology" },
				{ name: "Tech Accessories" },
				{ name: "Fitness Accessories" },
				{ name: "Travel Essentials" },
				{ name: "Luxury Watches" },
				{ name: "Gaming Accessories" },
				{ name: "Fashion Apparel" },
				{ name: "Electrical Appliances" },
				{ name: "Baby Gear" },
				{ name: "Outdoor Clothing" },
				{ name: "Cooking Essentials" },
				{ name: "Hiking Gear" },
				{ name: "Computer Components" },
				{ name: "Hair Accessories" },
				{ name: "Smartwatches" },
				{ name: "Party Supplies" },
				{ name: "Home Textiles" },
				{ name: "Yoga & Pilates" },
				{ name: "Mobile Phones" },
				{ name: "Travel Gear" },
				{ name: "Camera Accessories" },
				{ name: "Camping Essentials" },
				{ name: "Audio Equipment" },
				{ name: "Gardening Tools" },
				{ name: "Tabletop Games" },
				{ name: "Luxury Handbags" },
				{ name: "Vintage Collectibles" },
				{ name: "Home Appliances" },
				{ name: "Puzzles & Brain Teasers" },
				{ name: "Stationery Supplies" },
				{ name: "Fishing Gear" },
				{ name: "Smart Lighting" },
			],
		});

		console.log("Success");
	} catch (error) {
		console.log("Error seeding the database categories", error);
	} finally {
		await database.$disconnect();
	}
}

main();
// console.log(faker.helpers.uniqueArray(faker.commerce.department, 100));
