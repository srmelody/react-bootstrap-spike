var React = require('react');
var ActionCreator = require('../actions/DataActionCreators');
var ListGroupItem = require('react-bootstrap/ListGroupItem');
var Input = require('react-bootstrap/Input');

var Task = React.createClass({
  getDefaultProps: function() {
    return {
      task: {
        title: '',
        completed: false
      }
    };
  },

  handleToggle: function(task) {
    task.completed = this.refs.checkbox.getChecked();
    ActionCreator.toggleTask(task);
    
  },

  render: function() {
    var task = this.props.task;
    return (
      <ListGroupItem>

        <Input type="checkbox" ref="checkbox" checked={task.completed}
          onChange={this.handleToggle.bind(this, task)} labelClassName={task.completed ? 'completed-task' : 'incomplete-task'} label={task.title} />
      </ListGroupItem>
    );
  }
});

module.exports = Task;
