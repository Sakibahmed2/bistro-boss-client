import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'



const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')


    return (
        <div>
            <Helmet>
                <title>Bistro boss | Menu</title>
            </Helmet>
            {/* Main category section */}
            <Cover img={menuImg} title='our menu'  />
            <SectionTitle heading="Today's offer" subHeding="Don't miss" />

            {/* Offered menu */}
            <MenuCategory items={offered} />

            {/* Dessert menu */}
            <MenuCategory items={dessert} title={'Dessert'} img={dessertImg}/>

            {/* Pizza menu */}
            <MenuCategory items={pizza} title='Pizza' img={pizzaImg} />

            {/* Soup menu */}
            <MenuCategory items={soup} title='Soup' img={soupImg} />

            {/* Salad menu */}
            <MenuCategory items={salad} title='Salad' img={saladImg} />
        </div>
    );
};

export default Menu;