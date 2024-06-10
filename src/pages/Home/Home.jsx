import './Home.css'
import img from '../../assets/images/pastry chef-cuate.png'
import img1 from '../../assets/images/calum-lewis-v-A1-L1j-RTM70-unsplash-2.webp'
import img2 from '../../assets/images/louis-hansel-0s-YLBZjg-TTw-unsplash.webp'
import img3 from '../../assets/images/vitor-monthay-673jcnrm8b-M-unsplash.webp'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import ChefCard from '../ChefCard/ChefCard'
import Footer from '../../shred/Footer/Footer'
import useTitle from '../../UseTitle/UseTitle'



const Home = () => {
    const [chefs, setChefs] = useState([]);
        useTitle('Home')
    useEffect(() => {
        fetch('https://chef-master-server-two.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch((error) => console.log(error))
    }, []);

    return (
        // banner section
        <div>
            <div className='banner-section'>
                <div className='flex gap-y-9'>
                    <div className='w-[600px]'>
                        <p className='ml-8 mt-20 mb-8 text-5xl font-semibold  text-section '>Taste the <br /> Perfection of <br /> Fresh Ingredients <br /> and Creative Recipes</p>
                        <Link to={'/blog'} className='ml-8 pt-1 pb-1 pl-5 pr-5 rounded text-white text-2xl blog-section'>Blog</Link>
                    </div>
                    <div className='w-[700px]'>
                        <img className='w-[450px] h-[450px] ml-16' src={img} alt="" />
                    </div>
                </div>
                <div className='banner-card-section ml-8  pb-8 mb-8'>
                    <div>
                        <img className='h-64 w-64 rounded' src={img1} alt="" />
                    </div>
                    <div>
                        <img className='h-64 w-64 rounded' src={img2} alt="" />
                    </div>
                    <div>
                        <img className='h-64 w-64 rounded' src={img3} alt="" />
                    </div>
                </div>
            </div>
            {/* cart section */}
            <p className='text-center mb-8 text-2xl font-light text-[#4f4850]'>World-renowned chef with multiple Michelin <br /> stars, known for his mastery of French, Italian, and British cuisine.</p>
            <div className='card-section gap-y-5 mb-10 p-8'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef._id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Home;