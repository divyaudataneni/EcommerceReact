import { Component } from "react";

import './index.css'
class ProductDetails extends Component{

    state = {product :null}

    componentDidMount(){
        this.getproduct() ;
    }

    getproduct = async() =>{
        const {match}= this.props
        const {params}= match
        const {id}= params
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        console.log(data)
        this.setState({product:data})
    }
    
    render(){
       
        if (!this.state.product) {
            return <div>Loading...</div>;
          }
            
        const {title, image, category, description, price} = this.state.product
        return(
            <div className="product-cont">
                <img src={image} alt={title} className="product-image1"/>
                <div className="description"> 
                    <p>{category}</p>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div>
                        <p>${price}</p>
                       
                    </div>
                </div>
            </div>
        )
    
    }
}

export default ProductDetails