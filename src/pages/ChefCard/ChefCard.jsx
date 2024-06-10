import { Link } from 'react-router-dom';
import './ChefCard.css'

const ChefCard = ({ chef }) => {
    const { _id, chefName, chefPictureUrl, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img className='h-64 rounded w-60 mt-2'  src={chefPictureUrl} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {chefName}
                    </h2>
                    <p>Experience: {yearsOfExperience}</p>
                    <p>Numbers of recipes: {numberOfRecipes}</p>
                    <p>Likes: {likes}</p>
                    <div className="card-actions justify-center">
                       <Link to={`/viewDetails/${_id}`} className="badge p-4 view-section text-white">View Recipes Button</Link>
                    </div>
                </div>
            </div>
    );
};

export default ChefCard;