import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import './App.css'


class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        this.onTermSubmit('13 Reasons Why?? | Bsc. CSIT')
    }


    onTermSubmit = (term) => {
        youtube.get('/search', {
            params: {
                q: term,
                key: 'AIzaSyBVvMCUkujIPMJlypMkpyUuLtkCLNyFf2c',
                part: 'snippet',
                maxResults: 6
            }
        }).then((response) => {
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })

    }
    // onTermSubmit = async(term)=>{
    //     console.log(term);
    //     const response = await youtube.get('/search',{
    //         params:{
    //             q:term,
    //             key: 'AIzaSyBVvMCUkujIPMJlypMkpyUuLtkCLNyFf2c'
    //         }
    //     })
    //     this.setState({videos:response.data.items})
    // }
    render() {
        return (
            <div className="ui container">
                <div className="top">
                    <button className="ui youtube button"><i className="youtube icon"></i> YouTube</button>
                </div>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui stackable four column grid">

                    <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>

                </div>
            </div>

        )
    }
}



export default App  