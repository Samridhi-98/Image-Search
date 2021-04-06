import React from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchBar from './SearchBar'
import ImageList from './ImageList';

class App extends React.Component {

    state = { image: [] };

    onSearchSubmit = async(term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID Sotiz7CgeN5RYqufsGzDEkTg83dFvFa-wkIrdEVrYBs'
            }
        });

        this.setState({ image: response.data.results });

        // .then(response => {
        //     console.log(response.data.results);
        // })
        // console.log(term);
    }

    render() {
        return ( <div className = "ui container" style = {{ marginTop: '20px' } } >
            <SearchBar onSubmit = { this.onSearchSubmit }/>
            Found: { this.state.image.length }
            images 
            <ImageList images = { this.state.image }/>  
            </div>
        );
    }
}

export default App;