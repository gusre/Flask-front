import React, { Component } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Button } from 'reactstrap';
import AddUserDetail from './AddUserComponent';
class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            show: false,
        })
        this.handleConfirm=this.handleConfirm.bind(this);
    }
    handleConfirm(){
        this.setState({show:false});
    }
    render() {
        return (
            <div>
                <Button color="primary" size="lg" block onClick={() => this.setState({ show: true })}><i class="fa fa-trash" aria-hidden="true"></i>
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
            <AddUserDetail />
            </div>
        );
    }
}
export default Alert;