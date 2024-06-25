import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";
import setCookie from "set-cookie-parser";
import { getSession, commitSession } from "../session";

export const action = async ({ request }: ActionFunctionArgs) => {
  // get the form data from the POST
  const formData = await request.formData();
  const data = {
    user: {
      email: formData.get("email"),
      password: formData.get("password"),
    },
  };

  const response = await fetch("http://127.0.0.1:3000/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const setCookieHeader = response.headers.get("Set-Cookie");
  if (!setCookieHeader) return;
  const parsedResponseCookies = setCookie.parse(
    setCookie.splitCookiesString(setCookieHeader)
  );

  const sessionIdCookie = parsedResponseCookies.find(
    (cookie) => cookie.name === "_wherecanwedance_session"
  );

  if (!sessionIdCookie) {
    // No `sessionid` cookie in the fetch response means something went wrong.
    // Should return error
    return;
  }

  const headers = new Headers();
  // Store the response's `sessionid` cookie into the headers.
  const { name, value, ...sessionIdCookieSerializeOptions } = sessionIdCookie;
  const sessionIdSession = await getSession(request.headers.get("Cookie"));
  sessionIdSession.set(name, value);

  headers.append(
    "Set-Cookie",
    await commitSession(sessionIdSession, sessionIdCookieSerializeOptions)
  );

  if (response.ok) {
    return redirect("/profile", { headers });
  } else {
    let errorData = await response.json();
    console.error("Error response from server:", errorData); // Log the error details
    return json({ errors: errorData }, { status: response.status });
  }
};
