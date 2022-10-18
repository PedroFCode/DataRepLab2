import React from "react";
import { Books } from './books'
import axios from "axios";

export class Read extends React.Component {
    //Component get read into json files
    componentDidMount() {
        //axios is http client and makes a request to the url
        axios.get('https://jsonblob.com/api/jsonblob/1027219693823606784')
        //data has come back and sets the response to books array
        .then((response)=>{
            this.setState({
                books: response.data
            })
        })
        //If data doesnt return(call back function)
        .catch(function(error){
            console.log(error);
        });
    }
    
    //books array json files
    state = {
        books: []
    }

    render() {
        return (
            <div>
                <h3>Hello from Read Component</h3>
                {/* Gets the books array for display */}
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}