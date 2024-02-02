import Arrow from "../assets/arrow.svg"
import { Button } from "../components/ui/button";

export default function Hero() {

  return (
              <section className="mx-auto max-w-[88rem] px-6 pb-32 lg:px-8 pt-16 md:pt-24  ">
        <div className="mx-auto max-w-4xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="flex w-full flex-col items-center justify-center text-center lg:shrink-0">
        <h1
          className="mt-8 font-thunder text-7xl font-bold uppercase leading-[1] tracking-normal sm:text-[160px] text-zinc-950"
        >
          We Teach Brands How To Run Their Own Ads
        </h1>
        <p
          className="mt-6 max-w-3xl text-2xl leading-7 text-zinc-800 text-center"
        >
          Scale Profitably To 7+ Figures Without Paying Thousands In Agency Retainers
        </p>
        <div

          className="relative mt-10 flex items-center justify-center gap-x-6"
        >
          <a href="https://lp.ecomexplorer.com.au/questionnaire-mac">
                     <Button
          size="lg"
        
            className="group flex w-full items-center rounded-full uppercase sm:w-72"
          >
            
           Get Started Today
            </Button>
          </a>
 

          <img
            src={Arrow.src}
            alt="Arrow"
            className="absolute left-0 top-[6rem] h-auto w-20 -rotate-90 "
          />
          <img
            src={Arrow.src}
            alt="Arrow"
            className="absolute right-0 top-[6rem] h-auto w-20 -rotate-90 -scale-y-100 "
          />

        </div>
    </div>
    </div>
    </section>
  );
}
