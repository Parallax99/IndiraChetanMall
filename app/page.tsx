import Image from "next/image";
import Login from "./ui/(auth)/login/page";
import { auth } from "./api/auth/[...nextauth]/route";

export default function Home() {
  let session = auth()
  console.log(session);
  
  return (
    <Login/>
  );
}
