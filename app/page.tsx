"use client";
import CarCard from "@/components/CarCard";
import { popularCars, recommendationCar } from "@/lib/cars";
import { useState } from "react";

export default function Page() {
  const [visibleCars, setVisibleCars] = useState(8);
  const [favorites, setFavorites] = useState<number[]>([]);

  function handleClick(currCar: number) {
    setFavorites((currFavorites) => {
      if (currFavorites.includes(currCar)) {
        return currFavorites.filter((car) => car !== currCar);
      }

      return [...currFavorites, currCar];
    });
  }

  function handleShowMore() {
    setVisibleCars((currVisibleCars) => currVisibleCars + 8);
  }

  return (
    <main className=" px-15 rounded bg-[#F6F7F9]">
      <div className="p-5">
        <div className="flex justify-between mb-5 px-9 ">
          <p className="text-secondary-light font-bold">Popular Car</p>
          <p className="text-primary font-bold">View All</p>
        </div>
        <div className="flex w-full gap-y-5 ml-3 gap-x-8 flex-wrap">
          {popularCars.map((car) => (
            <CarCard
              key={car}
              isFavorite={favorites.includes(car)}
              onClick={() => handleClick(car)}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <div className="flex justify-between mb-5 px-9 ">
          <p className="text-secondary-light font-bold">Recommendation Car</p>
        </div>
        <div className="flex w-full gap-8 ml-3 flex-wrap">
          {recommendationCar.slice(0, visibleCars).map((car) => (
            <CarCard
              key={car}
              isFavorite={favorites.includes(car)}
              onClick={() => handleClick(car)}
            />
          ))}
        </div>
      </div>

      {visibleCars < recommendationCar.length && (
        <div className="w-3/5 ml-auto pl-10 py-20 flex justify-between items-center">
          <button
            className="py-2 px-4 bg-primary text-white rounded hover:cursor-pointer hover:opacity-90"
            onClick={handleShowMore}
          >
            Show more car
          </button>
          <p className="text-secondary-light text-md">
            {recommendationCar.length} Cars
          </p>
        </div>
      )}
    </main>
  );
}
