import { useFetcher } from "@remix-run/react";

export default function Index() {
  const fetcher = useFetcher();

  return (
    <div className="text-center p-10">
      <div className="col-span-3">
        <h2>Please sign in or sign up below</h2>
      </div>

      <div className="bg-slate-200 text-slate-800 rounded-lg">
        <fetcher.Form action="/resources/signin" method="post">
          <div className="p-2">
            <label htmlFor="email"> email </label>
            <input name="email" type="email" required />
          </div>
          <div className="p-2">
            <label htmlFor="password"> password </label>
            <input name="password" type="password" required />
          </div>
          <button
            onClick={() => console.log("fetcher", fetcher.formData)}
            type="submit"
          >
            Submit
          </button>
        </fetcher.Form>
      </div>
      <div></div>
    </div>
  );
}
