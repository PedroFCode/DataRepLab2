import React from "react";
import { BookItem } from './bookItem';

// class imports from BookItem
export class Books extends React.Component{
    render(){
        //Gets the properties of of the book array 
        return this.props.books.map(
            (book)=>{
                return <BookItem book={book} key={book.isbn}></BookItem>
            }
        );
    }

}