import React from "react";
import './status-profile.css';

class StatusProfile extends React.Component{

  state = {
    editMode: false,
    status: this.props.status
  }

  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deActiveEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.status !== this.props.status ) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div className='status-profile'>

        {
          this.state.editMode ? <div className="status-profile-input">
                                <input onChange={ this.onStatusChange } autoFocus={ true }
                                       onBlur={ this.deActiveEditMode } value={ this.state.status || 'no status'}
                                       type="text"/>
                              </div>
                              : <div onDoubleClick={ this.activeEditMode }
                                     className="status-profile-text">{ this.props.status }</div>
        }

      </div>
    )
  }
}

export default StatusProfile;