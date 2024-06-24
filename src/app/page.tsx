import { connectDB } from "@/utils/database";

export default function Home() {
  async function fetchData() {
    try {
      const client = await connectDB;
      const db = client.db("forum");
      const result = await db.collection("post").find().toArray();
      console.log(result, "폴더구조 잡기1");
      // 여기서 result를 상태로 저장하거나 JSX로 렌더링합니다.
    } catch (error) {
      console.error("데이터베이스 연결 오류", error);
      // 데이터베이스 연결 오류 발생 시 처리 로직을 작성합니다.
    }
  }

  // 컴포넌트가 마운트될 때 데이터를 가져오기 위해 fetchData 함수 호출
  fetchData();

  return <div>폴더구조 만들기</div>;
}
