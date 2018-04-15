import React, { Component } from 'react';
import Header from "./components/Header";
import ProducsContainer from "./containers/ProductsContainers";
import CartContainer from "./containers/CartContainer";
import Footer from "./components/Footer";
import MessageContainer from "./containers/MessageContainer";


class App extends Component {
  render() {
    return (
        <div>
            {/*// <!-- Header -->*/}
            <Header/>
            <main id="mainContainer">
                <div className="container">
                    {/*// <!-- Products -->*/}
                    <ProducsContainer />
                    {/*// <!-- Message -->*/}
                    <MessageContainer/>
                    {/*// <!-- Cart -->*/}
                    <CartContainer/>
                </div>
            </main>
            {/*// <!-- Footer -->*/}
            <Footer/>
        </div>
    );
  }
}

export default App;
