import React from "react";
import { useParams, Link } from "react-router-dom";
import pokemonList from "../data";

const Detail = () => {
  const { id } = useParams();
  const pokemon = pokemonList.find((p) => p.id === parseInt(id));

  if (!pokemon) return <div className="p-6">Pokémon not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">{pokemon.name}</h1>
      <img src={pokemon.image} alt={pokemon.name} className="w-32 h-32 mb-4" />
      <p><strong>Health:</strong> {pokemon.health}</p>
      <p><strong>Attack:</strong> {pokemon.attack}</p>
      <p><strong>Defense:</strong> {pokemon.defense}</p>
      <Link to="/" className="text-indigo-500 underline block mt-4">Back to Gallery</Link>
    </div>
  );
};

export default Detail;
