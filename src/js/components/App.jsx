var React = require('react');
var DataStore = require('../stores/DataStore');
var ActionCreator = require('../actions/DataActionCreators');
var ModalTrigger = require('react-bootstrap/ModalTrigger');
var Button = require('react-bootstrap/Button');
var Badge = require('react-bootstrap/Badge');
var Grid = require('react-bootstrap/Grid');
var Col = require('react-bootstrap/Col');
var Row = require('react-bootstrap/Row');

var MenuItem = require('react-bootstrap/MenuItem');
var DropdownButton = require('react-bootstrap/DropdownButton');
var Glyphicon = require('react-bootstrap/Glyphicon');




var Jumbotron = require('react-bootstrap/Jumbotron');
var TaskList = require('./TaskList.jsx');
var FunModal = require('./FunModal.jsx');
var App = React.createClass({

  getInitialState: function() {
    var data = DataStore.getAll();
    return {
      tasks: []
    }
  },

  _onChange: function() {
    this.setState(DataStore.getAll());
  },

  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick: function(e) {
    var title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },
   
  handleClearListClick: function(e) {
    ActionCreator.clearList();
  },

  render: function() {
    return (
      <div className="container">
        <Jumbotron>
          <h1>Learning Flux</h1>
  

          <p>
            Below is a list of tasks you can implement to better grasp the patterns behind Flux.<br />
            Most features are left unimplemented with clues to guide you on the learning process.
          </p>

        </Jumbotron>
                <Grid>
                  <Row>
                    <Col xs={5}>Grid is here</Col>
                    <Col xs={7}>column is here</Col>
                  </Row>
                  <Row>
                    <Col xs={2}>Bacon ipsum dolor amet t-bone meatball pork chop chicken sirloin</Col>
                    <Col xs={10}>Bacon ipsum dolor amet t-bone meatball pork chop chicken sirloin</Col>

                  </Row>

                </Grid>
        <ModalTrigger modal={<FunModal />}>
          <Button bsStyle="warning" >Show a modal</Button>
        </ModalTrigger>
        <TaskList tasks={this.state.tasks} />

        <Button onClick={this.handleAddNewClick} bsStyle="primary">Add New</Button>
        <Button onClick={this.handleClearListClick} bsStyle="danger">Clear List</Button>

        You get a badge! <Badge>42</Badge>
      


        <DropdownButton title="Dropdown">
          <MenuItem onClick={this.handleAddNewClick} eventKey="1">Add new</MenuItem>
          <MenuItem eventKey="2">Dropdown link</MenuItem>
      </DropdownButton> 
      </div>
    );
  }

});

module.exports = App;
