import Brand1 from '../assets/brands/1.png'
import Brand10 from '../assets/brands/10.png'
import Brand11 from '../assets/brands/11.png'
import Brand12 from '../assets/brands/12.png'
import Brand13 from '../assets/brands/13.png'
import Brand14 from '../assets/brands/14.png'
import Brand15 from '../assets/brands/15.png'
import Brand16 from '../assets/brands/16.png'
import Brand17 from '../assets/brands/17.png'
import Brand18 from '../assets/brands/18.png'
import Brand19 from '../assets/brands/19.png'
import Brand2 from '../assets/brands/2.png'
import Brand20 from '../assets/brands/20.png'
import Brand3 from '../assets/brands/3.png'
import Brand4 from '../assets/brands/4.png'
import Brand5 from '../assets/brands/5.png'
import Brand6 from '../assets/brands/6.png'
import Brand7 from '../assets/brands/7.png'
import Brand8 from '../assets/brands/8.png'
import Brand9 from '../assets/brands/9.png'

const brands = [
  Brand1,
  Brand2,
  Brand3,
  Brand4,
  Brand5,
  Brand6,
  Brand7,
  Brand8,
  Brand9,
  Brand10,
  Brand11,
  Brand12,
  Brand13,
  Brand14,
  Brand15,
  Brand16,
  Brand17,
  Brand18,
  Brand19,
  Brand20,
]

export default function Brands() {
  return (
    <div className="bg-zinc-950 py-24 rounded-3xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl text-zinc-50">
          Walk in the footsteps of 100+ successful eCommerce entrepreneurs
        </h2>
        <div className="mx-auto mt-10 lg:mt-24 grid max-w-lg grid-cols-2 items-center sm:grid-cols-4 gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:max-w-none lg:grid-cols-5">
          {brands.map((brand, index) => (
            <img
              key={index}
              className="max-h-12 w-full object-contain"
              src={brand.src}
              alt={`brand-${index}`}
              width={brand.width}
              height={brand.height}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
