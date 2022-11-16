import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Secant extends Component{
    getValue(){
        var equation = document.getElementById("equation").value;
    }
    render(){
        return(
            <div>
                <br/>
                <h3>Secant Method</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="equation" type="text" placeholder="f(x)" style={{width:"20%",margin:"0 auto"}}></Form.Control>
                        </div>
                        <Button onClick={this.getValue} variant="success" style={{marginTop:"20px"}}>Calculate</Button>
                    </Form.Group>
                </Form>
                <br/>
                <div>
                    <h4>Result is:</h4>
                    <div id="showans"></div>
                </div>
            </div>
        );
    }
}
export default Secant;