import React, { startTransition } from "react";

export class Create extends React.Component {

    //constructor to bind the events to each method in order for the methods to function
    constructor(){
        
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.state = {
            title:'', cover:'', author:''
        }
    }

    //takes an event when envoked
    handleSubmit(e){
        e.preventDefault();
        console.log(`${this.state.title}`);
        console.log(`${this.state.cover}`);
        console.log(`${this.state.author}`);
    }

    //is called when the value changes, for all onChange methods
    onChangeBookTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeBookCover(e){
        this.setState({
            cover: e.target.value
        })
    }

    onChangeBookAuthor(e){
        this.setState({
            author: e.target.value
        })
    }

    //html code, form creates input fields for dufferebt book material
    render() {
        return (
            <div>
                <h4>Create Component</h4>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );

    }
}