import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../../shred/Footer/Footer";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import Rating from "react-rating";
import useTitle from "../../UseTitle/UseTitle";



const ViewDetails = () => {
    const navigate = useNavigate();
    const data = useLoaderData();
    console.log(data);
    useTitle('ViewDetails')
    const { chefName, chefPictureUrl1, yearsOfExperience, numberOfRecipes, likes, description, rating } = data;
    return (
        <div>
            <div className="card rounded-none w-full bg-base-100 shadow-xl mb-8">
                <figure><img className='h-[700px] rounded w-[700px] mt-2' src={chefPictureUrl1} /></figure>
                <div className="w-[700px] mt-2 mb-3 ml-40 text-center">
                    <h2 className="text-2xl text-center">
                        {chefName}
                    </h2>
                    <div className="text-center">
                        <p>Experience: {yearsOfExperience}</p>
                        <p>Numbers of recipes: {numberOfRecipes}</p>
                        <p>Likes: {likes}</p>
                        <div>
                            <Rating
                                initialRating={rating}
                                readonly
                                emptySymbol={<IoMdStarOutline className="icon" />}
                                placeholderSymbol={<IoMdStarHalf />}
                                fullSymbol={<IoMdStar className="icon" />}
                            />
                        </div>
                    </div>
                    <p>Description: {description}</p>
                    <div className="card-actions justify-center mt-2">
                        <Link onClick={() => navigate(-1)} className="badge p-4 view-section text-white">Go Back</Link>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewDetails;