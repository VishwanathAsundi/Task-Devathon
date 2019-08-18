import React from 'react';
import logo from './logo.svg';
import './App.css';
import PopUp from './popUp';



class App extends React.Component {
  state = {
    currentProduct: {},
    showPopUp: false
  }
  showPopUp = (product) => {
    this.setState({ currentProduct: product, showPopUp: true });
  }
  closePopup = () => {
    this.setState({ showPopUp: false });
  }
  handleChange = (e) => {
    this.setState({
      currentProduct: { ...this.state.currentProduct, [e.target.name]: e.target.value }
    })
  }


  render() {
    const productList = [
      {
        src: "assets/images/emma3.jpg",
        productTitle: "scarps",
        price: "500 $",
        id: 1
      },
      {
        src: "assets/images/emma4.jpg",
        productTitle: "Hat",
        price: "700 $",
        id: 2
      },
      {
        src: "assets/images/emma5.jpg",
        productTitle: "Sweater",
        price: "900 $",
        id: 3
      },
      {
        src: "assets/images/emma6.jpg",
        productTitle: "Casuals",
        price: "100 $",
        id: 4
      },
      {
        src: "assets/images/emma2.jpg",
        productTitle: "Modern",
        price: "300 $",
        id: 5
      },
      {
        src: "assets/images/emma1.jpg",
        productTitle: "scarps",
        price: "150 $",
        id: 6
      },
      {
        src: "assets/images/emma3.jpg",
        productTitle: "scarps",
        price: "500 $",
        id: 7
      },
      {
        src: "assets/images/emma4.jpg",
        productTitle: "scarps",
        price: "700 $",
        id: 8
      },
      {
        src: "assets/images/emma5.jpg",
        productTitle: "scarps",
        price: "900 $",
        id: 9
      },
      {
        src: "assets/images/emma6.jpg",
        productTitle: "scarps",
        price: "100 $",
        id: 10
      },

    ]
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <div class="left-menu p-5">
              <h5 class="set-opacity">Left menu</h5>
            </div>
          </div>
          <div class="col-md-10">
            <section class="top-header p-5 text-center">
              <h5 class="set-opacity">Header goes here</h5>
            </section>
            <section class="container bg-light p-5">
              <div class="header-text text-center">
                <h4>Add details for your products</h4>
                <p class="set-opacity ">Unpriced product will be hidden. You can edit them later.</p>
              </div>
              <div class="row">
                {
                  productList.map((product, i) => {
                    return (
                      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={i}>
                        <div class="product" onClick={(e) => this.showPopUp(product)}
                        >
                          <img src={product.src} alt="" />
                          <div class="product-descr">
                            <h6 class="title set-opacity">Product Title: {product.productTitle}</h6>
                            <span class="price set-opacity">{product.price}</span>
                          </div>
                          {
                            this.state.showPopUp && product.id === this.state.currentProduct.id ?
                              <PopUp
                                product={this.state.currentProduct}
                                handleChange={this.handleChange}
                              />
                              : ''
                          }
                        </div>
                      </div>
                    )
                  })
                }


              </div>
            </section>
          </div>
        </div>
      </div>
    );

  }

}

export default App;
