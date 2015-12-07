// Creates the Reactive Variable and sets the initial value
var currentCountReactiveVar =  new ReactiveVar(0);
// Creates the Session Variable and sets the initial value
Session.setDefault('sessionVar', 0);

Dispatcher.register(function(payload){
  switch( payload.type ) {
    case 'REACTIVE_VAR':
      switch( payload.actionType ){
        case 'INC_ONE':
          //console.log(payload.actionType + "  " + payload.count);
          currentCountReactiveVar.set((payload.count) + 1);
          break;

        case 'DEC_ONE':
          //console.log(payload.actionType + "  " + payload.count);
          currentCountReactiveVar.set((payload.count) - 1);
          break;
      }
      break;
    case 'SESSION_VAR':
      switch( payload.actionType ){
        case 'INC_ONE':
          //console.log(payload.actionType + "  " + payload.count);
          Store.sessionVar(payload.count + 1);
          break;

        case 'DEC_ONE':
          //console.log(payload.actionType + "  " + payload.count);
          Store.sessionVar(payload.count - 1);
          break;
      }
      break;
      // case 'STATE':
      //   switch( payload.actionType ){
      //     case 'INC_ONE':
      //       //console.log(payload.actionType + "  " + payload.count);
      //       Store.stateCount(payload.count - 1);
      //       break;

      //     case 'DEC_ONE':
      //       //console.log(payload.actionType + "  " + payload.count);
      //       Store.stateCount(payload.count - 1);
      //       break;
      //   }
      //   break;
  }
});

Store = {
  reactiveVar(currentCount) {
    return currentCountReactiveVar.get();
  },
  sessionVar(currentCount) {
    Session.set('sessionVar', currentCount);
    return;
  }
  // stateCount(currentCount) {
  //   this.setSate({countState: currentCount});
  //   return;
  // }
};
