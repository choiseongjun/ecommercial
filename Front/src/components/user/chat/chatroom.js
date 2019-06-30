import React,{ Component }  from 'react';
import { Client } from '@stomp/stompjs';
import './chatroom.css'; 
class chatroom extends Component{
  state = {
    serverTime: null,
  } 

  componentDidMount() {
    console.log('Component did mount');
    // The compat mode syntax is totally different, converting to v5 syntax
    // Client is imported from '@stomp/stompjs'
    this.client = new Client();

    this.client.configure({
      brokerURL: 'ws://localhost:8080/stomp',
      onConnect: () => {
        console.log('onConnect');

        this.client.subscribe('/queue/now', message => {
          console.log(message);
          this.setState({serverTime: message.body});
        });

        this.client.subscribe('/topic/greetings', message => {
          alert(message.body);
        });
      },
      // Helps during debugging, remove in production
      debug: (str) => {
        console.log(new Date(), str);
      }
    });

    this.client.activate();
  }

  clickHandler = () => {
    this.client.publish({destination: '/app/greetings', body: 'Hello world'});
  }

  render() {
    return (
      <div className="container">
      <div className="ks-page-content">
        <div className="ks-page-content-body">
          <div className="ks-messenger">
            <div className="ks-discussions">
              <div className="ks-search">
                <div className="input-icon icon-right icon icon-lg icon-color-primary">
                  <input id="input-group-icon-text" type="text" className="form-control" placeholder="Search" />
                  <span className="icon-addon">
                    <span className="la la-search" />
                  </span>
                </div>
              </div>
              <div className="ks-body ks-scrollable jspScrollable" data-auto-height style={{height: '400px', overflowY: 'auto', padding: '0px', width: '339px'}} tabIndex={0}>
                <div className="jspContainer" style={{width: '339px', height: '550px'}}>
                  <div className="jspPane" style={{padding: '0px', top: '0px', width: '329px'}}>
                    <ul className="ks-items">
                      <li className="ks-item ks-active">
                        <a href="#">
                          <span className="ks-group-amount">3</span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Group Chat
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">
                              <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={18} height={18} className="rounded-circle" /> The weird future of movie theater food
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item ks-unread">
                        <a href="#">
                          <span className="ks-group-amount">5</span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">
                              <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={18} height={18} className="rounded-circle" /> Why didn't he come and talk to me...
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={36} height={36} />
                            <span className="badge badge-pill badge-danger ks-badge ks-notify">7</span>
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar5.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar6.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar7.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar ks-online">
                            <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Brian Diaz
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">The weird future of movie theater food</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-group-amount">3 <span className="badge badge-pill badge-danger ks-badge ks-notify">7</span></span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar ks-offline">
                            <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Eric George
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">Why didn't he come and talk to me himse...</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar5.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Lauren Sandoval
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">The weird future of movie theater food</div>
                          </div>
                        </a>
                      </li>
                      <li className="ks-item ks-closed">
                        <a href="#">
                          <span className="ks-avatar">
                            <img src="http://bootdey.com/img/Content/avatar/avatar6.png" width={36} height={36} />
                          </span>
                          <div className="ks-body">
                            <div className="ks-name">
                              Brian Diaz
                              <span className="ks-datetime">just now</span>
                            </div>
                            <div className="ks-message">The weird future of movie theater food</div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="jspVerticalBar">
                    <div className="jspCap jspCapTop" />
                    <div className="jspTrack" style={{height: '550px'}}>
                      <div className="jspDrag" style={{height: '261px'}}>
                        <div className="jspDragTop" />
                        <div className="jspDragBottom" />
                      </div>
                    </div>
                    <div className="jspCap jspCapBottom" />
                  </div>
                </div>
              </div>
            </div>
            <div className="ks-messages ks-messenger__messages">
              <div className="ks-header">
                <div className="ks-description">
                  <div className="ks-name">Chat name</div>
                  <div className="ks-amount">2 members</div>
                </div>
                <div className="ks-controls">
                  <div className="dropdown">
                    <button className="btn btn-primary-outline ks-light ks-no-text ks-no-arrow" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="la la-ellipsis-h ks-icon" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right ks-simple" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="#">
                        <span className="la la-user-plus ks-icon" />
                        <span className="ks-text">Add members</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="la la-eye-slash ks-icon" />
                        <span className="ks-text">Mark as unread</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="la la-bell-slash-o ks-icon" />
                        <span className="ks-text">Mute notifications</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="la la-mail-forward ks-icon" />
                        <span className="ks-text">Forward</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="la la-ban ks-icon" />
                        <span className="ks-text">Spam</span>
                      </a>
                      <a className="dropdown-item" href="#">
                        <span className="la la-trash-o ks-icon" />
                        <span className="ks-text">Delete</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ks-body ks-scrollable jspScrollable" data-auto-height data-reduce-height=".ks-footer" data-fix-height={32} style={{height: '480px', overflow: 'hidden', padding: '0px', width: '701px'}} tabIndex={0}>
                <div className="jspContainer" style={{width: '701px', height: '481px'}}>
                  <div className="jspPane" style={{padding: '0px', top: '0px', width: '691px'}}>
                    <ul className="ks-items">
                      <li className="ks-item ks-self">
                        <span className="ks-avatar ks-offline">
                          <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">6:46 PM</span>
                          </div>
                          <div className="ks-message">The weird future of movie theater food</div>
                        </div>
                      </li>
                      <li className="ks-item ks-from">
                        <span className="ks-avatar ks-online">
                          <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">6:46 PM</span>
                          </div>
                          <div className="ks-message">The weird future of movie theater food</div>
                        </div>
                      </li>
                      <li className="ks-item ks-from">
                        <span className="ks-avatar ks-online">
                          <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">6:46 PM</span>
                          </div>
                          <div className="ks-message">
                            The weird future of movie theater food
                            <div className="ks-link">
                              <div className="ks-name">Google</div>
                              <a href="http://www.google.com" target="_blank">www.google.com</a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="ks-item ks-self">
                        <span className="ks-avatar ks-offline">
                          <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">6:46 PM</span>
                          </div>
                          <div className="ks-message">The weird future of movie theater food</div>
                        </div>
                      </li>
                      <li className="ks-item ks-from ks-unread">
                        <span className="ks-avatar ks-online">
                          <img src="http://bootdey.com/img/Content/avatar/avatar5.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">1 minute ago</span>
                          </div>
                          <div className="ks-message">
                            The weird future of movie theater food
                            <ul className="ks-files">
                              <li className="ks-file">
                                <a href="#">
                                  <span className="ks-thumb">
                                    <span className="ks-icon la la-file-word-o text-info" />
                                  </span>
                                  <span className="ks-info">
                                    <span className="ks-name">Project...</span>
                                    <span className="ks-size">15 kb</span>
                                  </span>
                                </a>
                              </li>
                              <li className="ks-file">
                                <a href="#">
                                  <span className="ks-thumb">
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={36} height={36} />
                                  </span>
                                  <span className="ks-info">
                                    <span className="ks-name">photo.jpg</span>
                                    <span className="ks-size">312 kb</span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="ks-separator">Today</li>
                      <li className="ks-item ks-self">
                        <span className="ks-avatar ks-offline">
                          <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">6:46 PM</span>
                          </div>
                          <div className="ks-message">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                          </div>
                        </div>
                      </li>
                      <li className="ks-item ks-self">
                        <span className="ks-avatar ks-offline">
                          <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">6:46 PM</span>
                          </div>
                          <div className="ks-message">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                          </div>
                        </div>
                      </li>
                      <li className="ks-item ks-self">
                        <span className="ks-avatar ks-offline">
                          <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={36} height={36} className="rounded-circle" />
                        </span>
                        <div className="ks-body">
                          <div className="ks-header">
                            <span className="ks-name">Brian Diaz</span>
                            <span className="ks-datetime">6:46 PM</span>
                          </div>
                          <div className="ks-message">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="jspVerticalBar">
                    <div className="jspCap jspCapTop" />
                    <div className="jspTrack" style={{height: '481px'}}>
                      <div className="jspDrag" style={{height: '206px'}}>
                        <div className="jspDragTop" />
                        <div className="jspDragBottom" />
                      </div>
                    </div>
                    <div className="jspCap jspCapBottom" />
                  </div>
                </div>
              </div>
              <div className="ks-footer">
                <textarea className="form-control" placeholder="Type something..." defaultValue={""} />
                <div className="ks-controls">
                  <button className="btn btn-primary" onClick={this.clickHandler}>Send</button>
                  <a href="#" className="la la-paperclip ks-attachment" />
                  <div className="dropdown dropup">
                    <button className="btn btn-link ks-smile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="la la-smile-o" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right ks-scrollable ks-smileys" aria-labelledby="dropdownMenuButton" style={{overflow: 'hidden', padding: '0px', width: '200px'}}>
                      <div className="jspContainer" style={{width: '198px', height: '165px'}}>
                        <div className="jspPane" style={{padding: '0px', top: '0px', left: '0px', width: '100px'}}>
                          <div className="ks-smileys-wrapper">
                            <table>
                              <tbody>
                                <tr>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={20} height={20} />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar5.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar6.png" width={20} height={20} />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar7.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={20} height={20} />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar5.png" width={20} height={20} />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar5.png" width={20} height={20} />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar2.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar3.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar4.png" width={20} height={20} />
                                  </td>
                                  <td>
                                    <img src="http://bootdey.com/img/Content/avatar/avatar5.png" width={20} height={20} />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ks-info ks-messenger__info">
              <div className="ks-header">
                User Info
              </div>
              <div className="ks-body">
                <div className="ks-item ks-user">
                  <span className="ks-avatar ks-online">
                    <img src="http://bootdey.com/img/Content/avatar/avatar1.png" width={36} height={36} className="rounded-circle" />
                  </span>
                  <span className="ks-name">
                    Lauren Sandoval
                  </span>
                </div>
                <div className="ks-item">
                  <div className="ks-name">Username</div>
                  <div className="ks-text">
                    @lauren.sandoval
                  </div>
                </div>
                <div className="ks-item">
                  <div className="ks-name">Email</div>
                  <div className="ks-text">
                    lauren.sandoval@example.com
                  </div>
                </div>
                <div className="ks-item">
                  <div className="ks-name">Phone Number</div>
                  <div className="ks-text">
                    +1(555) 555-555
                  </div>
                </div>
              </div>
              <div className="ks-footer">
                <div className="ks-item">
                  <div className="ks-name">Created</div>
                  <div className="ks-text">
                    Febriary 17, 2016 at 11:38 PM
                  </div>
                </div>
                <div className="ks-item">
                  <div className="ks-name">Last Activity</div>
                  <div className="ks-text">
                    1 minute ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default chatroom;