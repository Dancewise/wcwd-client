import { createCookieSessionStorage } from "@remix-run/node";

const SESSION_SECRET =
  "eede8fa4ff45b950b1cfec4fdb657a4a8cd21032552f48c2a7d0e8ea0c773de4fecb9867398311e5df53151b5c39081371b8ccb7ed1efe2a477ec4a6769de739";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "_wherecanwedance_session",
      path: "/",
      secrets: [SESSION_SECRET],
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      // More cookie options could be added here, but we will be using the cookie options from the fetch responses later.
    },
  });

export { getSession, commitSession, destroySession };
