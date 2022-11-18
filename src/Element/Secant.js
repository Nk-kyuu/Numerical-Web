import { FractionDependencies } from "mathjs";
import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class Secant extends Component{
    getValue(){
        var equation = document.getElementById("equation").value;
        var initial = document.getElementById("initial").value;
        var x1 = document.getElementById("x1").value;
        do{
            var x = initial
            var fx0 = eval(equation)
            var x = x1
            var fx1 = eval(equation)
            var xn = initial - (fx0*(x1-initial)/(fx1-fx0))
            x1=initial
            initial=xn
        }while(Math.abs(((initial-x1)/initial)*100) >= 0.000001)
        var ans = initial
        document.getElementById("showans").innerHTML=ans;
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
                            <Form.Control id="initial" type="number" placeholder="initial" style={{width:"20%", margin:"0 auto"}}></Form.Control>
                            <Form.Control id="x1" type="number" placeholder="x1" style={{width:"20%", margin:"0 auto"}}></Form.Control>
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