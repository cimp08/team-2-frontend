const { MongoClient } = require("mongodb");

describe("CRUD", () => {
	let connection;
	let db;

	beforeAll(async () => {
		connection = await MongoClient.connect(
			"mongodb+srv://heidi:tenisdeva@doggymatch.32omz.mongodb.net/DoggyMatch?retryWrites=true&w=majority",
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}
		);
		db = await connection.db("DoggyMatch");
	});

	afterAll(async () => {
		await connection.close();
	});

	it("should insert a dog name into collection", async () => {
		const dogs = db.collection("dogs");

		const mockDog = { _id: "some-dog-id", dogName: "Charlie" };

		await dogs.insertOne(mockDog);

		const insertedDog = await dogs.findOne({ _id: "some-dog-id" });

		expect(insertedDog).toEqual(mockDog);
	});

	it("should delete a dog name from collection", async () => {
		const dogs = db.collection("dogs");

		const mockDog = { _id: "some-dog-id", dogName: "Charlie" };

		await dogs.deleteOne(mockDog);

		const deletedDog = await dogs.findOne({ _id: "some-dog-id" });

		expect(deletedDog).toEqual(null);
	});
});
