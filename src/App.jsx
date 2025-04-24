import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PokemonCard from "./components/PokemonCard";
import pokemonList from "./data";
import Detail from "./pages/Detail";

function App() {
  return (
    <Router>
      <div className="p-6 bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          Pokémon Gallery
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-wrap justify-center gap-8">
                {pokemonList.map((pokemon) => (
                  <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                    <PokemonCard pokemon={pokemon} />
                  </Link>
                ))}
              </div>
            }
          />
          <Route path="/pokemon/:id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
