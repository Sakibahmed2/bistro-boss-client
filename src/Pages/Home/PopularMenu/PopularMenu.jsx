import SectionTitle from '../../../Components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    

    return (
        <section className='mb-8'>
            <SectionTitle heading='From our menu ' subHeding='Check it out' />
            <div className='grid md:grid-cols-2 gap-6 mt-12 w-10/12 mx-auto'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='btn btn-outline border-0 border-b-4  mt-6 shadow-2xl'>Order now </button>
            </div>
        </section>
    );
};

export default PopularMenu;