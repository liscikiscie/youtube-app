import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAZgqZ256Xoc95IvwsQf6JP8-Y_lgqaucI';

class App extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'idiots'}, ( videos ) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[ 0 ]
            });
            console.log(videos);
        });
    }

    render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();