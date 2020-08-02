import {ToyReact, Component} from './ToyReact.js';

class MyComponent extends Component{
    render(){
        return <div>
            <span>hello</span>
            <span>world</span>
            <div>
                {true}
                {this.children}
            </div>
        </div>
    }
    
}

let a = <MyComponent name="a" id="ida">
    <div>123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
)

// let a = <div name="mine" >
//             <span>1</span>
//             <span>2</span>
//             <span>3</span>
//         </div>
// document.body.appendChild(a);