import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import CategoryCard from '../../../Components/CategoryCard/CategoryCard';
import { categoryItems } from '../../../DummyDatas/Category';
import "./UserHome.css"

function UserHome() {
  return (
    <div className='user-home-container'>
    <Navbar />
    <main>
      <div className="category-container">
        {categoryItems.map((categoryItem)=>{
          return <CategoryCard
          categoryItem={categoryItem}
          key={categoryItem.id}/>
        })}
      </div>
    </main>
    <Footer/>
    </div>
  )
}

export default UserHome
