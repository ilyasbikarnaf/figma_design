import Image from "next/image";
import Car from "@/assets/car.svg";
import Capacity from "@/assets/capacity.svg";
import Type from "@/assets/type.svg";
import Gas from "@/assets/gas.svg";
import EmptyHeart from "@/assets/emptyHeart.svg";
import FullHeart from "@/assets/fullHeart.svg";
import Shadow from "@/assets/shadow.svg";

export default function CarCard({
  isFavorite,
  onClick,
}: {
  isFavorite: boolean;
  onClick: () => void;
}) {
  return (
    <div className="bg-white flex flex-col w-[304px] h-96 py-4 px-6 rounded-lg justify-between">
      <div className="flex justify-between items-baseline">
        <div>
          <h3 className="text-light text-xl font-bold">Koenigsegg</h3>
          <p className="text-secondary-light text-sm font-bold">Sport</p>
        </div>
        <button className="hover:cursor-pointer">
          <Image
            alt="heart"
            src={isFavorite ? FullHeart : EmptyHeart}
            onClick={onClick}
            width={22}
            height={22}
          />
        </button>
      </div>

      <div>
        <Image alt="car image" src={Car} width={232} height={72} />
        <Image
          alt="blur"
          src={Shadow}
          width={232}
          height={72}
          className="-mt-10"
        />
      </div>

      <div className="h-[120px] justify-around flex-col flex">
        <div className="flex justify-between *:flex *:gap-x-1.5 *:items-center">
          <div>
            <Image alt="gasoline" src={Gas} width={21} height={21} />
            <p className="text-secondary-light text-sm">90L</p>
          </div>
          <div>
            <Image alt="type" src={Type} width={21} height={21} />
            <p className="text-secondary-light text-sm">Manual</p>
          </div>
          <div>
            <Image alt="capacity" src={Capacity} width={21} height={21} />
            <p className="text-secondary-light text-sm">2 People</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">
            $80.00 / <span className="text-secondary-light text-sm">day</span>
          </div>
          <button className="bg-primary px-5 py-3 rounded text-white font-bold hover:cursor-pointer hover:opacity-90">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
}
