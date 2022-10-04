import React from "react";
//react component class can be exported and used elsewhere
export class Content extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!!!!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}