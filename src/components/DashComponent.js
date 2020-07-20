import React,{Component} from 'react';

class Dash extends Component{
    constructor(props){
        super(props);
    }
    /*componentWillMount(){
    let iframe = document.createElement("iframe");
    iframe.src = `http://localhost:5000/dash/`;
    iframe.id = "iframe";
    iframe.style.position = "absolute";
    iframe.style.marginLeft="auto";
    iframe.style.marginRight="auto";
    iframe.style.height = "500px";
    iframe.style.width = "500px";
    iframe.style.backgroundColor = "white";
    iframe.style.borderColor="black";
    document.body.prepend(iframe);
    document.body.style.overflow = "hidden";
    }
    componentWillUnmount()
    {
       var ele=document.getElementById("iframe");
       ele.parentElement.removeChild(ele);
    }*/
    render ()
    {
        const mystyle = {
            color:"white",
            borderColor: "black",
            backgroundColor: "DodgerBlue",
          };
        return(
          <div  style={{paddingTop:"50px"}}>
              <p align="center"><iframe  src="http://localhost:5000/dash/" width="500px" height="600px" style={mystyle}></iframe></p>
          </div>
        );
    }
}
export default Dash;