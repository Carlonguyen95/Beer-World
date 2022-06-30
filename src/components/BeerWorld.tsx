import { useEffect, useState } from "react";
import "../css/BeerWorld.css";
import { get_list_of_beer, get_a_random_beer } from "../service/BeerService";
import { Beer } from "../types/BeerType";
import BeerSingle from "./BeerSingle";

function BeerWorld() {
  let beerBaseContent = <p>No beer found.</p>;

  const [beerList, setBeer] = useState([]);
  const [isLoading, setLoading] = useState(true);

  async function fetchBeer() {
    let data = await get_list_of_beer();
    setBeer(data);
    setLoading(false);
  }

  async function fetchRandomBeer() {
    let data = await get_a_random_beer();
    setBeer(data);
    setLoading(false);
  }

  if (beerList && beerList.length > 0) {
    let beerMappedContent = beerList.map((beerObject: Beer) => (
      <BeerSingle
        key={beerObject.id}
        id={beerObject.id}
        name={beerObject.name}
        state={beerObject.state}
        brewery_type={beerObject.brewery_type}
      />
    ));

    beerBaseContent = (
      <div className="beer-world-content">
        {isLoading ? "Loading data..." : beerMappedContent}
      </div>
    );
  }

  let headerText = <h2>We found {(beerList && beerList.length <= 0) ? 0 : beerList.length} 🍻 you might enjoy!</h2>;

  if (beerList.length < 2) {
    headerText = <h2>We hope you enjoy this one 🍺!</h2>;
  }

  useEffect(() => {
    fetchBeer();
  }, []);

  return (
    <div className="beer-world" id="anchor-beer-world">
      {headerText}

      {beerBaseContent}

      <div className="beer-world-action-button">
        <p>Don't like them?</p>
        <button onClick={fetchRandomBeer}>Get new a random 🍻</button>
      </div>
    </div>
  );
}

export default BeerWorld;
