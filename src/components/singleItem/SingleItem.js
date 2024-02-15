import {Link} from "react-router-dom";
const SingleItem = ({name, imageUrl, count, weight, onDelete, id}) => {

    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white`}>
            <Link to={`/items/${id}`}>
                <img src= {imageUrl}
                     className="img-fluid w-25 d-inline"
                     alt= "item img"
                     style={{'objectFit': 'cover'}}/>
                <div className="card-body text-dark">

                    <h3 className="card-title">{name}</h3>
                    <p className="card-text">{count}</p>
                    <p className="card-text">{weight}</p>
                </div>
                <span onClick={onDelete}
                    className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                    <button type="button" className="btn-close btn-close" aria-label="Close"></button>
                </span>
            </Link>
        </li>
    )
}

export default SingleItem;