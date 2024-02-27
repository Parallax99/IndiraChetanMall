import { useRouter } from "next/navigation";

export default function RouteAction(route: string) {
  "use client";
  const router = useRouter();
  if (route) {
    router.push(route);
  }
}
