import { Beer } from "../types/BeerType";
import '../css/BeerSingle.css'

export function BeerSingle(props: Beer) {

    return (
        <div className="beer-single">
            <p><em>Name:</em> { props.name }</p>
            <p><em>State:</em> { props.state }</p>
            <p><em>Brewery type:</em> { props.brewery_type }</p>
        </div>
    );
}

export default BeerSingle;