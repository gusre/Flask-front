import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, ListGroup, ListGroupItem
} from 'reactstrap';
import AlertBut from './AlertButtonComponent';
import UpdateUserDetail from './UpdateButton';
const img = (str) => {
    var x = str.replace(/\\n/g, "");
    var p = x.substr(2,x.length-3);
    console.log(p);
    var xp=x.substr(7,x.length-3)+'=';
    var x2=xp.replace('\'',"");
    console.log(x2);
    var sc = "data:image/jpeg;base64," + p;
    var pc="data:application/pdf;base64,"+x2;
    //return <iframe width="300px" height="500px" src={pc}  /> (pdf document)
    return <img width="300px" height="500px" src={sc} alt="Card image cap" />
}

class ShowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.fetchdata=this.fetchdata.bind(this);
        this.resetdata=this.resetdata.bind(this);
        this.updatedata=this.updatedata.bind(this);

    }
    componentWillMount() {
       this.fetchdata();
    }
    fetchdata(){
        fetch('/api').then(res => {
            if (res.ok)
                return res.json();
            else
                throw new Error('No ');
        }
        ).then(data => {
            this.setState({ data: data.data });
        }).catch(error => (console.log('No')));
    }
    resetdata(x){
      const newstate=this.state.data.filter(p=>(p.contact!==x));
      this.setState({data:newstate});
    }
    updatedata(x,a,b,c){
      if(x.name!==a||x.contact!==b||x.photo!==c){
        let newstate=this.state.data;
        const index = newstate.findIndex(project => project.contact==x.contact);
        newstate[index].name=a;
        newstate[index].contact=b;
        if(c!=='')
        newstate[index].photo=c;
        else
        newstate[index].photo=x.photo;
        console.log(index);
        console.log(a);
        console.log(b);
        console.log(newstate);
        this.setState({data:newstate});
      }
    }
    render() {
        const send = this.state.data.map(x => (
            <ListGroupItem>
                <Card>
                    {img(x.photo)}
                    <CardBody>
                        <CardText>{x.name}</CardText>
                        <CardText>{x.contact}</CardText>
                    </CardBody>
                    <AlertBut data={x} handledelete={this.resetdata}/>
                    <UpdateUserDetail data={x} handleupdate={this.updatedata}/>
                </Card>
            </ListGroupItem>
        ));
        return (
           <ListGroup>
               {send}
           </ListGroup>
        );
    }
}
export default ShowUser;