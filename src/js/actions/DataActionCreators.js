var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  addItem: function(text) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_TASK,
      text: text
    });
  },

  clearList: function() {
    console.warn('clearList action not yet implemented...');
  },
  removeCompletedItems: function() {
     AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.REMOVE_COMPLETED_ITEMS
     
    });
  },
  toggleTask: function(task) {
     AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.TOGGLE_TASK,
      task: task
    });
  }

};
