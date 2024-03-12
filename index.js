import { Component } from "react";
import { Link } from "react-router-dom";
import './index.css'


class Home extends Component{

   state = {products : []}

   componentDidMount()  {
    this.getProductsList();
   }
   getProductsList = async () => {
    
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      this.setState({ products: data });
  }

    render(){
        const {products} = this.state
        return(
            <div className="bg-cont">
                <h1>Products Store </h1>
                <ul>
                {products.map(each => 
                <Link to= {`/products/${each.id}`}>
                <li key={each.id}>
                            <img src={each.image} alt={each.title} className="product-image"/>
                            <p>{each.title}</p>
                            <p>${each.price}</p>

                </li>
                </Link>
                    
                    )}
                </ul>
            </div>

        )
    }
}

export default Home