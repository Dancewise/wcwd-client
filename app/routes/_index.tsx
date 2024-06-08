// import type { MetaFunction } from "@vercel/remix";
import Hero from "../images/hero.png";
import Search from "../components/Search/Search";

// export const meta: MetaFunction = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Index() {
  return (
    <div className="bg-slate-200 flex justify-between">
      <div className="font-semibold flex items-center text-2xl justify-center flex-col pl-24">
        Events made for
        <div>
          the
          <span className="text-violet-600"> dance world</span>
        </div>
        <Search />
      </div>
      <img src={Hero} />
    </div>
  );
}
