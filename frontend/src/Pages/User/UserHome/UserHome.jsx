import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import { products } from '../../../DummyDatas/DummyDatas';
import "./UserHome.css"

function UserHome() {
  return (
    <div className='user-home-container'>
    <Navbar />
    <main>
      <div className="products-container">
        {products.map((product)=>{
          return <ProductCard
          product={product}
          key={product.id}/>
        })}
      </div>
    </main>
    </div>
  )
}

export default UserHome
