import React, { Component } from 'react';
import {Form,Button} from 'react-bootstrap';

class Loginview extends Component{
   

    render(){
        // const {email, password} = this.props.state;
       

        console.log("Login PRops : ", this.props);
        console.log("Login state : ", this.props.state);

        return(
            <div>
                <Form onSubmit ={this.props.handleSubmit}>
                    <Form.Group>
                        <Form.Control type="email" name="email"
                            placeholder="Email"
                            onChange={this.props.handleInputChange} required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="password" name="password"
                            placeholder="Password"
                            onChange={this.props.handleInputChange} required
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        //     <form onSubmit={this.props.handleSubmit}>
        //     <div className="form-item">
        //         <input type="email" name="email" 
        //             className="form-control" placeholder="Email"
        //             // value={email} 
        //             onChange={this.props.handleInputChange} required/>
        //     </div>
        //     <div className="form-item">
        //         <input type="password" name="password" 
        //             className="form-control" placeholder="Password"
        //             // value={password} 
        //             onChange={this.props.handleInputChange} required/>
        //     </div>
        //     <div className="form-item">
        //         <button type="submit" className="btn btn-block btn-primary">Login</button>
        //     </div>
        // </form>  
        );
    }
}

export default Loginview;