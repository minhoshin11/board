import { MongoClient } from "mongodb";

const url: string =
  "mongodb+srv://admin:a153153@cluster0.0skskb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {}; // useNewUrlParser 생략

let connectDB: Promise<MongoClient>;

declare global {
  namespace NodeJS {
    interface Global {
      _mongo?: Promise<MongoClient>;
    }
  }
}

// 개발 환경인지 확인
if (process.env.NODE_ENV === "development") {
  // 개발 환경에서 _mongo가 없는 경우 새로 연결
  if (!(global as any)._mongo) {
    (global as any)._mongo = new MongoClient(url, options).connect();
  }
  connectDB = (global as any)._mongo;
} else {
  // 배포 환경에서는 새로 연결
  connectDB = new MongoClient(url, options).connect();
}

// connectDB를 export
export { connectDB };
