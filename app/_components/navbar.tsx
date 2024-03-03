import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" text-sm lg:text-xl bg-black flex justify-between p-9 shadow-md shadow-slate-700">
      <ul>
        <h1 className=" ">
          THE <a className="bg-white text-black">LEARNING</a> PLATFORM{" "}
        </h1>
      </ul>
      <ul className="flex gap-6">
        <div className=" gap-4 hidden lg:flex">
          <li>Learn</li>
          <li>Practice</li>
        </div>

        <li>
          <div className=""></div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
