import React,{Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { Button } from 'reactstrap';
 
class Note extends Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
 
  render() {
    return (
      <div>
        <Button className='btn btn-info'
          onClick={this.createNotification('info')}>Info
        </Button>
        <hr/>
        <Button className='btn btn-success'
          onClick={this.createNotification('success')}>Success
        </Button>
        <hr/>
        <Button className='btn btn-warning'
          onClick={this.createNotification('warning')}>Warning
        </Button>
        <hr/>
        <Button className='btn btn-danger'
          onClick={this.createNotification('error')}>Error
        </Button>
        <NotificationContainer/>
      </div>
    );
  }
}
 export default Note;