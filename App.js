import Home from './components/Home'
import productDetails from './components/ProductDetails'

import {Switch,Route} from 'react-router-dom'

const App = () =>{
  return(
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products/:id" component={productDetails}/>
    </Switch>
  )
}

export default App