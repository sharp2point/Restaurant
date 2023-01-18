import React from "react";
import { recipes } from "../Data";

const Recipe = () => {
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-centere font-bold mb-16">
          Hot Selling Recipes
        </div>
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-8
        mb-16"
        >
          {recipes.map((recipe) => {
            return (
              <div
                className="p-4 shadow-lg hover:shadow transition-all
                duration-300"
                key={recipe.id}
              >
                <img className="rounded-lg mb-4" src={recipe.image} alt="" />
                <div className="flex items-center justify-between mb-4">
                  <div className="md:text-xl text-[1rem] font-semibold">
                    {recipe.name}
                  </div>
                  <div className="flex items-center gap-3">
                    <button>-</button>
                    <span className="text-[0.85rem]">2</span>
                    <button>+</button>
                  </div>
                </div>

                <p className="text-[0.85rem] opacity-70 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ullam tempore amet eveniet libero nam quis qui nulla eius quam
                  laboriosam.
                </p>
                <div className="flex items-center justify-between">
                  <span>{recipe.price}</span>
                  <span className="btn cursor-pointer p-3">Add to cart</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
