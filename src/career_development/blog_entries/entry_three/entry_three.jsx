import React, {Component} from 'react';
import '../blog-content.css';

class EntryThree extends Component {

    render() {
        return (
            <div className="blog-container">

                <div>
                    <img className="blog-main-img" src={require('../images/img_three.jpg')} alt=""/>
                    
                    <h3 className="blog-header">
                        This is the Third Entry
                    </h3>

                    <div className="blog-content">

                        <h4 className="blog-content-header"> First Paragraph</h4>

                        <p className="blog-paragraph-text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>  
                </div>
                
            </div>
        )
    }
}

export default EntryThree;