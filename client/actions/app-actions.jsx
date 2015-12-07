AppAction = {
  incOne: function(data) {
    Dispatcher.dispatch ({
      type: data.type,
      actionType: AppConstants.INC,
      count: data.count
    })
    //console.log(data.count + '+1');
  },
  decOne: function(data) {
    Dispatcher.dispatch ({
      type: data.type, 
      actionType: AppConstants.DEC,
      count: data.count
    })
    //console.log(data.count + '-1');
  }
};