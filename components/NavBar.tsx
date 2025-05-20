import Image from "next/image";
import Heart from "@/assets/heart.svg";
import Bell from "@/assets/bell.svg";
import Profile from "@/assets/profile.svg";
import Settings from "@/assets/settings.svg";
import SearchIcon from "@/assets/searchIcon.svg";
import FilterIcon from "@/assets/filterIcon.svg";

export default function NavBar() {
  return (
    <header className="flex justify-between bg-white py-6 px-20 items-center rounded">
      <div className="flex items-center gap-20">
        <h2 className="text-primary text-4xl">LOGO</h2>
        <div className="flex py-3 px-5 gap-4 items-center border-2 rounded-full border-[#C3D4E966]">
          <Image alt="search icon" src={SearchIcon} />
          <input
            type="text"
            placeholder="Search Something Here"
            className="w-80 focus:outline-none text-secondary"
          />

          <Image alt="filter icon" src={FilterIcon} />
        </div>
      </div>
      <nav className="flex gap-4 items-center">
        <button className=" border-[#C3D4E966] border-1 size-7 rounded-2xl flex justify-center">
          <Image
            alt="heart"
            src={Heart}
            height={17}
            width={20}
            className="p-0.5"
          />
        </button>
        <button className=" border-[#C3D4E966] border-1 size-7 rounded-2xl flex justify-center">
          <Image alt="bell" src={Bell} height={17} width={20} />
        </button>
        <button className=" border-[#C3D4E966] border-1 size-7 rounded-2xl flex justify-center">
          <Image alt="settings" src={Settings} height={17} width={20} />
        </button>
        <button>
          <Image alt="profile" src={Profile} height={32} />
        </button>
      </nav>
    </header>
  );
}
