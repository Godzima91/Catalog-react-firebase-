import React, { Component } from 'react';
import fire from '../config/Firebase'
import axios from 'axios';



class Home extends Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
        this.submitHandler = this.submitHandler.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.addProductHandler = this.addProductHandler.bind(this)

        this.state = {
            items: [],
            title: ``,
            prise: ``,
            descr: ``
        }
    }
    

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
    logout() {
        fire.auth().signOut();
    }

    submitHandler = event => {
        event.preventDefault()
    }
    addProductHandler = async event => {
        event.preventDefault()

        const items = [{
            title: this.state.title,
            prise: this.state.prise,
            descr: this.state.descr,
        }] 

        axios.post('https://catalog-bd1a1.firebaseio.com', [items])
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
            


async componentDidMount() {
    try {
       let responce = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(responce.data)
    } catch(e) {
        console.log(e)
    } 
}


    render() {
        return (
            <div className="products">
                <div className="homepage_container">
                    <h2>Welcome to the products page</h2>
                    <button onClick={this.logout} className="btn btn-logout">Logout</button>
                </div>


                <form onSubmit={this.submitHandler} className="createProduct">

                    <input 
                        onChange={this.handleChange}
                        type="text"
                        className="createInput product_title"
                        placeholder="title"
                        name="title"
                        value={this.state.title}
                    />
                    <input 
                        onChange={this.handleChange}
                        type="text"
                        className="createInput product_prise"
                        placeholder="prise"
                        name="prise"
                        value={this.state.prise}
                    />
                    <textarea 
                        onChange={this.handleChange}
                        type="text"
                        className="description"
                        placeholder="description"
                        name="descr"
                        value={this.state.descr}
                        />


                    <button
                        type="primary"
                        onClick={this.addProductHandler}
                        className="btn btn-addNewProduct"
                        >
                            Add new product
                    </button>
   
                </form>
            </div>
            
        );

    }

}

export default Home;