import { connectDB } from "../utils/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result, "폴더구조 잡기1");
  return <div>폴더구조 만들기</div>;
}
