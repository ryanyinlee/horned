import { Component } from 'react';
import HornedBeasts from './HornedBeasts.js';
import data from './data.json';

// idea from https://stackoverflow.com/questions/22876978/loop-inside-react-jsx
// but it didn't work

const hornedTitleArray = [];
for (let i = 0; i < data.length; i += 1) {
    hornedTitleArray.push(data[i].title);
}

const hornedImgUrlArray = [];
for (let i = 0; i < data.length; i += 1) {
    hornedImgUrlArray.push(data[i].image_url);
}

const hornedDescriptionArray = [];
for (let i = 0; i < data.length; i += 1) {
    hornedDescriptionArray.push(data[i].description);
}

class Main extends Component {

    
    render() {
        let j = 0;
            return (
                
                <div>
                    
                    <HornedBeasts title={hornedTitleArray[j]} imageUrl={hornedImgUrlArray[j]} description={hornedDescriptionArray[j]}/> 
                    
                </div>

            )
        
        
    }
    
}


export default Main

