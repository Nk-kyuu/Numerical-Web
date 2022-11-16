import { Component, React } from "react";
import { Button, FormGroup } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class Newton extends Component{
    getValue(){
        var equation = document.getElementById("equation").value;
        var derivative = document.getElementById("derivative").value;
        var x0 = document.getElementById("x").value;
        do{
            var x=x0;
            var fx0 = eval(equation)
            var dfx0 = eval(derivative)
            var dx = -fx0/dfx0
            var x1 = x0+dx
            var x=x1
            var fx1 = eval(equation)
            x0 = x1
        }while(Math.abs(((x0-x1)/x0)*100) >= 0.000001)
        var ans = x0    
        document.getElementById("showans").innerHTML=ans;
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
                            <Form.Control id="derivative" type="text" placeholder="d(x)" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <Form.Control id="x" type="number" placeholder="x" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                        </div>
                        <Button onClick={this.getValue} variant="success" style={{marginTop:"20px"}}>Calculate</Button>
                    </FormGroup>
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
export default Newton;