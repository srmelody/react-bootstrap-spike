var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var assign = require('object-assign');
var _ = require('lodash');

// data storage
var _data = [];

// add private functions to modify data
function addItem(title, completed=false) {
  _data.push({title, completed});
}

function toggleTask(task) {

  //var foundTask = _.remove(_data, item => item.title === task.title );
 
}

function removeCompletedItems() {
  _.remove(_data, item => item.completed );  
}


var DataStore = assign(EventEmitter.prototype, {

  // public methods used by Controller-View to operate on data
  getAll: function() {
    return {
      tasks: _data
    };
  },


  // Allow Controller-View to register itself with store
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },
  // triggers change listener above, firing controller-view callback
  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  },


  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.ADD_TASK:
        var text = action.text.trim();
        // NOTE: if this action needs to wait on another store:
        // DataStore.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (text !== '') {
          addItem(text);
          DataStore.emitChange();
        }
        break;
      case Constants.ActionTypes.TOGGLE_TASK:
        toggleTask(action.task);
        DataStore.emitChange();
        break;

      case Constants.ActionTypes.REMOVE_COMPLETED_ITEMS: 
        removeCompletedItems();
        DataStore.emitChange();
        break;

      // add more cases for other actionTypes...

    }
  })

});

module.exports = DataStore;
