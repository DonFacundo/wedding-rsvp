"use client";

import { RiBeerFill } from "react-icons/ri";
import {
  PiBowlFoodDuotone,
  PiCarrotDuotone,
  PiFishSimpleDuotone,
  PiHamburgerDuotone,
  PiWineDuotone,
} from "react-icons/pi";
import { FaWineBottle } from "react-icons/fa";
import { CiGlass } from "react-icons/ci";
import { LuCakeSlice, LuSalad } from "react-icons/lu";
import { TbCheese, TbMeat } from "react-icons/tb";
import { motion } from "framer-motion";

const FoodPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 pt-16">
      <motion.div
        key="canapes"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.75 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.25 },
        }}
        className="col-span-1 bg-secondary w-full  p-6"
      >
        <div className="border-primary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
          <article className="prose py-8 text-center">
            <TbCheese size={25} className="text-base-100 mx-auto mb-2 " />
            <h1 className="text-lg text-primary">Canapés</h1>
            <p className="text-md text-primary font-poiretone my-2">
              Mushroom Arancini
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Kingfish Kokoda
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Smoked Chicken Vol Au Vent
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Cold Smoked Turkey
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Scallop Toastada
            </p>
          </article>
        </div>
      </motion.div>
      <motion.div
        key="salad"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.25 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.25 },
        }}
        className="col-span-1 w-full  p-6"
      >
        <div className="border-secondary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
          <article className="prose py-8 text-center">
            <LuSalad size={25} className="text-secondary mx-auto mb-2 " />
            <h1 className="text-lg text-secondary">Fresh Salad</h1>
            <p className="text-md text-secondary font-poiretone my-2">
              Beetroot, Feta, Walnuts, Olive Oil
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              Rocket, Pear, Parmesan, Balsamic Reduction
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              Cucumber, Feta, Spinach, Olives, Carrot, Pickled Red Onion
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              Pumpkin, Quinoa, Pickled Red Onion, Carrot, Feta
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              Coleslaw
            </p>
          </article>
        </div>
      </motion.div>
      <div className="col-span-1 w-full grid  grid-cols-1">
        <motion.div
          key="veggies"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
          className="col-span-1 w-full p-6"
        >
          <div className="border-secondary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
            <article className="prose py-8 text-center">
              <PiCarrotDuotone
                size={25}
                className="text-secondary mx-auto mb-2 "
              />
              <h1 className="text-lg text-secondary">Vegetables</h1>
              <p className="text-md text-secondary font-poiretone my-2">
                Roasted Duck Fat Potatoes or New Baby minted potatoes
              </p>
              <p className="text-md text-secondary font-poiretone my-2">
                Roasted Seasonal Vegetables
              </p>
            </article>
          </div>
        </motion.div>
        <motion.div
          key="carvery"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
          className="col-span-1 bg-secondary w-full p-6"
        >
          <div className="border-primary   border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
            <article className="prose py-8 text-center">
              <TbMeat size={25} className="text-base-100 mx-auto mb-2 " />
              <h1 className="text-lg text-primary">Carvery</h1>
              <p className="text-md text-primary font-poiretone my-2">
                Roasted Pork - with crunchy crackling and apple sauce
              </p>
              <p className="text-md text-primary font-poiretone my-2">
                Roasted Spring Lamb - with House-made mint sauce
              </p>
              <p className="text-md text-primary font-poiretone my-2">
                Roasted Prime Beef - with Red Wine Jus
              </p>
            </article>
          </div>
        </motion.div>
      </div>
      <motion.div
        key="seafood"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0.25 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.25 },
        }}
        className="col-span-1 w-full  p-6"
      >
        <div className="border-secondary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
          <article className="prose py-8 text-center">
            <PiFishSimpleDuotone
              size={25}
              className="text-secondary mx-auto mb-2 "
            />
            <h1 className="text-lg text-secondary">Seafood</h1>
            <p className="text-md text-secondary font-poiretone my-2">
              Shrimp Cocktail - drizzled with seafood sauce
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              Crumbed Fish - with caper berries and lemon
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              Poached Salmon - with pickled red onion and caper berries
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              ½ Shelled Oysters - with fresh lemon and dipping sauce
            </p>
            <p className="text-md text-secondary font-poiretone my-2">
              Salt & Pepper Squid
            </p>
          </article>
        </div>
      </motion.div>
      <motion.div
        key="hot-dishes"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.25 },
        }}
        className="col-span-1 bg-secondary w-full  p-6"
      >
        <div className="border-primary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
          <article className="prose py-8 text-center">
            <PiBowlFoodDuotone
              size={25}
              className="text-base-100 mx-auto mb-2 "
            />
            <h1 className="text-lg text-primary">Hot dishes</h1>
            <p className="text-md text-primary font-poiretone my-2">
              Beef Stroganoff
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Settlers House-made Chunky BBQ Pork Pieces
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Prawn Fried Rice
            </p>
          </article>
        </div>
      </motion.div>
      <div className="col-span-1 w-full grid grid-cols-1">
        <motion.div
          key="kids1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
          className="col-span-1 w-full p-6"
        >
          <div className="border-secondary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
            <article className="prose py-8 text-center">
              <PiHamburgerDuotone
                size={25}
                className="text-secondary mx-auto mb-2 "
              />
              <h1 className="text-lg text-secondary">Kids (Under 5)</h1>
              <p className="text-md text-secondary font-poiretone my-2">
                Chicken Nuggets and Chips
              </p>
              <p className="text-md text-secondary font-poiretone my-2">
                Fish Bites and Chips
              </p>
              <p className="text-md text-secondary font-poiretone my-2">
                Mini Hotdog and Chips
              </p>
              <p className="text-md text-secondary font-poiretone my-2">
                Mixed Basket
              </p>
            </article>
          </div>
        </motion.div>
        <motion.div
          key="kids2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.25 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.25 },
          }}
          className="col-span-1 bg-secondary w-full p-6"
        >
          <div className="border-primary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
            <article className="prose py-8 text-center">
              <PiHamburgerDuotone
                size={25}
                className="text-base-100 mx-auto mb-2 "
              />
              <h1 className="text-lg text-primary">Kids (Ages 5- 10)</h1>
              <p className="text-md text-primary font-poiretone my-2">
                Mini Beef Burger - aioli, swiss cheese, tomato relish, beer
                battered fries
              </p>
              <p className="text-md text-primary font-poiretone my-2">
                Mini Chicken Burger - buttermilk, chicken thigh, aoili, swiss
                cheese, lettuce, beer battered fries
              </p>
              <p className="text-md text-primary font-poiretone my-2">
                Mini Pulled Pork Burger - aioli, swiss cheese, beer battered
                fries{" "}
              </p>
            </article>
          </div>
        </motion.div>
      </div>
      <motion.div
        key="desserts"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
        transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.25 },
        }}
        className="col-span-1 bg-secondary w-full  p-6"
      >
        <div className="border-primary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
          <article className="prose py-8 text-center">
            <LuCakeSlice size={25} className="text-base-100 mx-auto mb-2 " />
            <h1 className="text-lg text-primary">Desserts</h1>
            <p className="text-md text-primary font-poiretone my-2">
              Salted Caramel Creme Brulee
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Fruit Platter - with seasonal fresh fruits
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Cheese Board - with our chef&apos;s selection of cheeses, dips and
              accompaniments
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Lemon Tartlets - with blueberry, meringue, and freeze dried
              raspberry
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Settlers House-made Blackberry and Apple Crumble
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Vanilla and Buttermilk Panna Cotta - with berry Coulis
            </p>
            <p className="text-md text-primary font-poiretone my-2">
              Chocolate Delice - with baby popcorn, seasonal fruits and freeze
              dried raspberry
            </p>
          </article>
        </div>
      </motion.div>

      <div className="col-span-1 md:col-span-2 w-full  p-6">
        <div className="border-secondary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center pb-6">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="col-span-1 md:col-span-2 w-full text-center">
              <h1 className="text-lg text-secondary my-8">Beverages</h1>
            </div>
            <motion.div
              key="wines"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.75 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="col-span-1 w-full p-6"
            >
              <div className="border-secondary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
                <article className="prose py-8 text-center">
                  <PiWineDuotone
                    size={25}
                    className="text-secondary mx-auto mb-2 "
                  />
                  <h1 className="text-lg text-secondary">Wine Selection</h1>
                  <p className="text-md text-secondary font-poiretone my-2">
                    Kumeu River -{" "}
                    <em>
                      Village series (Pinot Noir, Chardonnay, Pinot Gris,
                      Sauvignon Blanc)
                    </em>
                  </p>
                  <p className="text-md text-secondary font-poiretone my-2">
                    Oyster Bay -{" "}
                    <em>(Merlot, Pinot Noir, Chardonnay, Pinot Gris)</em>
                  </p>
                </article>
              </div>
            </motion.div>
            <motion.div
              key="beers"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="col-span-1 bg-secondary w-full p-6"
            >
              <div className="border-primary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
                <article className="prose py-8 text-center">
                  <RiBeerFill
                    size={25}
                    className="text-base-100 mx-auto mb-2 "
                  />
                  <h1 className="text-lg text-primary">Beer Selection</h1>
                  <p className="text-md text-primary font-poiretone my-2">
                    Bottled Beers -{" "}
                    <em>
                      Heineken, Corona, Carlsberg, Steinlarger Pure, Guinness,
                      Heineken Light, Heineken 0.0%
                    </em>
                  </p>
                  <p className="text-md text-primary font-poiretone my-2">
                    Tap Beers -{" "}
                    <em>
                      Carlsberg, Somersby Apple Cider, Settlers Ale, Settlers
                      Larger, Pilsner
                    </em>
                  </p>
                </article>
              </div>
            </motion.div>
            <motion.div
              key="sparkling"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0.25 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="col-span-1 bg-secondary w-full p-6"
            >
              <div className="border-primary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
                <article className="prose py-8 text-center">
                  <FaWineBottle
                    size={25}
                    className="text-base-100 mx-auto mb-2 "
                  />
                  <h1 className="text-lg text-primary">Sparkling Selection</h1>
                  <p className="text-md text-primary font-poiretone my-2">
                    Lindauer Brut Cuvee
                  </p>
                  <p className="text-md text-primary font-poiretone my-2">
                    Lindauer Sparkling Rose
                  </p>
                </article>
              </div>
            </motion.div>
            <motion.div
              key="non-alcoholic"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ ease: "easeInOut", duration: 1, delay: 0 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
              className="col-span-1 w-full p-6"
            >
              <div className="border-secondary border-dashed px-6 border rounded-md bg-none h-full flex justify-center items-center">
                <article className="prose py-8 text-center">
                  <CiGlass size={25} className="text-secondary mx-auto mb-2 " />
                  <h1 className="text-lg text-secondary">
                    Non Alcoholic Selection
                  </h1>
                  <p className="text-md text-secondary font-poiretone my-2">
                    Sparkling Grape Juice
                  </p>
                  <p className="text-md text-secondary font-poiretone my-2">
                    Orange Juice
                  </p>
                  <p className="text-md text-secondary font-poiretone my-2">
                    Pineapple Juice
                  </p>
                  <p className="text-md text-secondary font-poiretone my-2">
                    Tropical Juice
                  </p>
                  <p className="text-md text-secondary font-poiretone my-2">
                    Variety of Soft Drinks
                  </p>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
