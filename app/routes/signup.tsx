import { Form } from "@remix-run/react";
import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  // get the form data from the POST
  const formData = await request.formData();
  const data = {
    user: {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
      password_confirmation: formData.get("password-confirmation"),
      role_ids: [formData.get("role-ids")],
    },
  };

  console.log("data", data);

  const response = await fetch("http://127.0.0.1:3000/api/v1/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return redirect("/");
  } else {
    let errorData = await response.json();
    console.error("Error response from server:", errorData); // Log the error details
    return json({ errors: errorData }, { status: response.status });
  }
};

export default function Index() {
  return (
    <div className="text-center grid grid-cols-3 gap-4 p-10">
      <div className="col-span-3">
        <h1 className="text-lg">Sign-up page</h1>
      </div>
      <div></div>
      <div className="bg-slate-200 text-slate-800 rounded-lg">
        <Form action="/signup" method="post">
          <div className="p-2">
            <label htmlFor="email"> email </label>
            <input name="email" type="email" required />
          </div>
          <div className="p-2">
            <label htmlFor="username"> user name </label>
            <input name="username" type="text" required />
          </div>
          <div className="p-2">
            <label htmlFor="role-ids"> role ids </label>
            <input name="role-ids" type="text" required />
          </div>
          <div className="p-2">
            <label htmlFor="password"> password </label>
            <input name="password" type="password" required />
          </div>
          <div className="p-2">
            <label htmlFor="password-confirmation">
              {" "}
              password-confirmation{" "}
            </label>
            <input name="password-confirmation" type="password" required />
          </div>
          <button type="submit">Create</button>
        </Form>
      </div>
      <div></div>
    </div>
  );
}
