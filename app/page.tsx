import * as route from "./api/auth/[...nextauth]/route";

export default function Home() {
  let session = route.auth();
  console.log(session);

  return <>hello</>;
}
