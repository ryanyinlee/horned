import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';

class Main extends Component {
    render() {
        return (
        <div>
        <HornedBeasts title="rhino" imageUrl="https://i.imgur.com/zn7AI5W.jpg" description="big chonker" />
        <HornedBeasts title="goat" imageUrl="https://i.imgur.com/aIf3Sez.jpg" description="goat is smug note: horns hard to see" />
        </div>
        
        )
    }
}

export default Main