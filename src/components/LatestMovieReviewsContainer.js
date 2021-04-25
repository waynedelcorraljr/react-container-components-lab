import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'LjhuIQ6Rya5GNmLOQ5PozdrCpKP1C6R4';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => {
            // console.log(data.results)
            this.setState({
                reviews: data.results
            })
        })
    }

    render() {
        return(
            <div className='latest-movie-reviews' >
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}