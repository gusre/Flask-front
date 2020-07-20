import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from 'reactstrap';
class AlertBut extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            show: false,
        })
        this.handleConfirm=this.handleConfirm.bind(this);
    }
    handleConfirm(){
        this.setState({show:false});
        const url = '/datahandler';
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'user':this.props.data.name,'contactnum':this.props.data.contact})
        };

        fetch(url,options)
            .then(response => {
             return response.json();
            }).then(data=>{
                  if(data.Status=='Success')
                  this.props.handledelete(this.props.data.contact);
                else 
                alert(data.Status)
            });
    }
    render() {
        return (
            <div>
                <Button color="danger" size="sm"  onClick={() => this.setState({ show: true })}><i class="fa fa-trash" aria-hidden="true"></i>
                </Button>
                <SweetAlert
                    show={this.state.show}
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => this.handleConfirm()}
                    onCancel={() => this.setState({ show: false })}
                    focusCancelBtn
                >
                    You will not be able to recover this imaginary file!
            </SweetAlert>
            </div>
        );
    }
}
export default AlertBut;