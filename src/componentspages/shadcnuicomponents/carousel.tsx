import React from "react";
import Image from "next/image";
import { featureCards } from "../layouts/constants/constants";
import { WhiteRightarrowSvg } from "../../../public/svg/constants";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const Programmes = () => {
  return (
    <>
      {/* Mobile view */}
      <section className="flex bg-[#F2F2F2] flex-col mt-10 gap-5 justify-center pt-20 pb-20 items-center w-full gradient md:hidden px-7">
        <h1 className="text-[24px] sm:text-[27.44px] font-bold font-[family-name:var(--font-baloo2)] text-center">
          Programs Overview
        </h1>
        <div className="space-y-5 w-full max-w-[400px]">
          {featureCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition w-full"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={250}
                className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-2xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-[20px] sm:text-[24px] font-bold font-[family-name:var(--font-baloo2)]">
                  {card.title}
                </h3>
                <p className="text-[#B1B1B1] text-[14px]">{card.age}</p>
                <p className="text-gray-600 text-[14px] mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.herf}
                  className="button bg-[#1A94D2] w-fit text-white text-[14px] mt-auto inline-flex items-center gap-2"
                >
                  {card.buttonText}
                  <WhiteRightarrowSvg />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* md and lg view: responsive grid */}
      <section className="hidden md:flex xl:hidden w-full justify-center pt-20 pb-20 bg-[#F2F2F2]">
        <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            <h1 className="col-span-full text-[32px] md:text-[36px] lg:text-[40px] font-bold font-[family-name:var(--font-baloo2)] text-center mb-5">
              Programs Overview
            </h1>
            {featureCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition w-full flex flex-col"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={275}
                  className="w-full h-[220px] md:h-[250px] lg:h-[275px] object-cover rounded-t-2xl"
                />
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-bold mb-2 font-[family-name:var(--font-baloo2)]">
                    {card.title}
                  </h3>
                  <p className="text-[#B1B1B1] text-[14px] mb-2">{card.age}</p>
                  <p className="text-gray-600 text-[14px] md:text-[15px] mb-4 flex-1">
                    {card.description}
                  </p>
                  <Link
                    href={card.herf}
                    className="button bg-[#1A94D2] w-fit text-white text-[14px] mt-auto inline-flex items-center gap-2"
                  >
                    {card.buttonText}
                    <WhiteRightarrowSvg />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* xl view: carousel */}
      <section className="hidden xl:flex w-full justify-center pt-20 pb-20 bg-[#F2F2F2]">
        <div className="w-full 3xl:max-w-[1400px] px-7 xl:px-28 3xl:px-0 flex flex-col gap-5">
          <h1 className="text-[27.44px] font-bold font-[family-name:var(--font-baloo2)] text-center">
            Programs Overview
          </h1>

          {/* Carousel wrapper */}
          <div className="relative overflow-visible">
            <Carousel opts={{ align: "start" }} className="w-full relative">
              <CarouselContent className="flex -ml-4">
                {featureCards.map((card) => (
                  <CarouselItem key={card.id} className="basis-[32%] px-4">
                    <Card className="bg-white rounded-2xl h-[603px] hover:shadow-lg transition w-full overflow-hidden p-0">
                      {/* Top image flush */}
                      <div className="relative w-full">
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={400}
                          height={275}
                          className="w-full h-[275px] object-cover block rounded-none"
                        />
                      </div>

                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[24px] font-bold font-[family-name:var(--font-baloo2)] mb-2">
                            {card.title}
                          </h3>
                          <p className="text-[#B1B1B1]">{card.age}</p>
                          <p className="text-gray-600 mb-4">
                            {card.description}
                          </p>
                        </div>
                        <Link
                          href={card.herf}
                          className="button bg-[#1A94D2] text-white mt-auto w-fit inline-flex items-center gap-2"
                        >
                          {card.buttonText}
                          <WhiteRightarrowSvg />
                        </Link>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows placed outside and visible */}
              <CarouselPrevious className="absolute -left-10 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-10 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programmes;
