import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }
    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    };
    // console.log(newMessage);

    try {
      const client = await MongoClient.connect(
        process.env.NEXT_PUBLIC_MONGO_LOCAL_URL
      );

      const db = client.db();

      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
      // client.close();
      res
        .status(201)
        .json({ message: "Successfully stored message!", message: newMessage });
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }
  }
};

export default handler;
