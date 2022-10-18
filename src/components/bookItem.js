import React from "react";
import Card from 'react-bootstrap/Card';

export class BookItem extends React.Component {
    render() {
        return (
            <div>
                {/* <Card>
                <h3>{this.props.book.title}</h3>
                <img src={this.props.book.thumbnailUrl} width="200" height="200" ></img>
                <h4>{this.props.book.authors[0]}</h4>
                </Card> */}
                {/* Card imported for a better look to the display */}
                <Card>
                    <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                <img src={this.props.book.thumbnailUrl} width="200" height="200" ></img>
                            </p>
                            <footer>{this.props.book.authors[0]}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}