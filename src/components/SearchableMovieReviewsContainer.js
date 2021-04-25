import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LjhuIQ6Rya5GNmLOQ5PozdrCpKP1C6R4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    componentDidMount() {
        fetch(URL + `&query=` + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.results)
            this.setState({
                reviews: data.results
            })
        })
    }

    render() {
        console.log(this.state.searchTerm)
        return(
            <div className='searchable-movie-reviews' >
                <form onSubmit={event => this.handleSubmit(event)} >
                    <input type='text' onChange={event => this.handleTyping(event)} placeholder='Type to Search' />
                    <input type='submit' value='Search' />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    handleTyping = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL + `&query=` + this.state.searchTerm)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.results)
            this.setState({
                reviews: data.results
            })
        })
    }

    
}