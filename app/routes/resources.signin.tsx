import { json, redirect, type ActionFunctionArgs } from "@remix-run/node";

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
    body: JSON.stringify(data),
  });

  console.log("response", response);
  if (response.ok) {
    return redirect("/");
  } else {
    let errorData = await response.json();
    console.error("Error response from server:", errorData); // Log the error details
    return json({ errors: errorData }, { status: response.status });
  }
};
