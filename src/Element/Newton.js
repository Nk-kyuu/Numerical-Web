import { Component, React } from "react";
import { Button, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class Newton extends Component{
    getValue(){
        var equation = document.getElementById("equation").value;
    }
    render(){
        return(
            <div>
                <br/>
                    <h3>Newton-raphson Method</h3>
                <br/>
                <Form>
                    <FormGroup className="mb-3">
                        <div>
                            <Form.Control id="equation" type="text" placeholder="f(x)" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <Button onClick={this.getValue} variant="success" style={{marginTop:"20px"}}>Calculate</Button>
                    </FormGroup>
                </Form>
                <br/>
                <div>
                    <h4>Result is:</h4>
                </div>
            </div>
        );
    }
}
export default Newton;