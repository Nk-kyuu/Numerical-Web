import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class OnePoint extends Component{
    getValue(){
        var equation = document.getElementById("equation").value;
        var xi = document.getElementById("Xi").value;
        do{
            var x=xi
            var x1 = eval(equation)
            var xi=x1

        }while(Math.abs(((xi-x1)/xi)*100) >= 0.000001)
        var ans = xi    
        document.getElementById("showans").innerHTML=ans;
    }
    render(){
        return(
            <div>
                <br/>
                <h3>One-Point Iteration Method</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="equation" type="text" placeholder="f(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>                        
                            <Form.Control id="Xi" type="number" placeholder="Xi" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>                          
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
export default OnePoint;