import React from "react";

function PokemonCard({ pokemon }) {
  return (
<div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center w-48 hover:scale-105 transition">
  <img src={pokemon.image} alt={pokemon.name} className="mx-auto w-24 h-24" />
  <h2 className="mt-2 text-lg font-semibold text-indigo-700 dark:text-indigo-300">
    {pokemon.name}
  </h2>
</div>
  );
}

export default PokemonCard;
