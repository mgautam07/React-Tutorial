import React, { Component } from 'react';
import {Card, CardTitle, CardText, CardBody, CardImg} from 'reactstrap';

class DishDetail extends Component{
    constructor (props){
        super (props);
    }

    render(){
        let comments = this.props.dish.comments.map((comm) => {
            return(
                <div>
                    <CardText>-- {comm.author} , {comm.date} </CardText>
                    <br></br>
                    <CardText>{comm.comment}</CardText>
                </div>
                
            )
        })
        // const comments = 
        //             <div>
        //                 <CardText>-- Hello , bot </CardText>
        //                 <br></br>
        //                 <CardText>I am comment.</CardText>
        //             </div>

        let dishSelect = [
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                        <CardTitle>{this.props.dish.name}</CardTitle>
                        <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            
        ]
        dishSelect.push(
            <div  className="col-12 col-md-5 m-1">
                <Card>
                    <CardTitle>Comments</CardTitle>
                    <CardText>{comments}</CardText>
                </Card>
             </div>
        );
        return(
            <div className="row">
                {dishSelect}
            </div>
        )
    };
}
export default DishDetail;