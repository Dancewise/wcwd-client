import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { getSession } from "../session";

export const loader = async ({ request }) => {
  // The browser should automatically send the `sessionid` header cookie when this route is loaded.
  const sessionIdSession = await getSession(request.headers.get("Cookie"));
  console.log("sessionIdSession in profile", sessionIdSession.data);

  // Ensure that the `sessionid` is present.
  if (!sessionIdSession.has("_wherecanwedance_session")) {
    // If it is not present, then the user has not been logged in.
    console.log("session id not present");
    throw redirect("/");
  }

  // change to a current user route
  const response = await fetch("http://127.0.0.1:3000/api/v1/users/current", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Cookie: Object.entries(sessionIdSession.data)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join("; "),
    },
  });
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error(`HTTP error! status: ${response.status}: Unauthorized`);
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log("data", data);
  return json(data);
};

export default function Index() {
  const user = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Profile page</h1>
      <p>email: {user?.email}</p>
      <p>username: {user?.username}</p>
    </div>
  );
}
