import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactFCCtest from 'react-fcctest';
import marked from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons'
//import 

marked.setOptions({
  breaks: true
});

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '# This is a header  \n## This is a subheader  \nThis is a paragraph with a [link](https://github.com/CharaeKeow)  \n\nHere is a simple code  \n  `console.log("Hello World!")`  \nwhich prints "Hello World!" on browser console  \n\n``` \n  //And this is a code bock  \n\n  function factorialize(num) {  \n\n   let result = 1;  \n   for(let i = 1; i <= num; i++) {  \n         result*=i;  \n    }  \n    return result;\n  } \n```  \n\n Below is a list \n * item 1 \n * item 2 \n *item 3 \n\n Boring? You could also makes an ordered list: \n 1. One \n 2. Two \n 3. Three \n\n > This is a blockquote \n\n And this is an image  \n ![cat image](https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn) \n\n **And this text is bold for no apparent reason**' 
      };      
    }

    
    handleChange(event){
      this.setState ({
        input: event.target.value
      });
    }

    createMarkUp(){
      return {__html: marked(this.state.input)}
    }        

    
    render() {
      return (
        <div>
          <h1 class="header">Markdown Previewer</h1>
          <div className="input">
            <h2 className='sub-header'>Editor</h2>
            <textarea id="editor" value = {this.state.input} onChange = {this.handleChange.bind(this)} />
          </div>
          <div class="output">
            <h2 className='sub-header'><FontAwesomeIcon icon={faEye} /> Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={this.createMarkUp()}></div>          
          </div>
          <ReactFCCtest />
        </div>
      );
    }
  };

  ReactDOM.render(
    <ControlledInput/>,
    document.getElementById('root')
  );