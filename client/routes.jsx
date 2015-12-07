FlowRouter.route('/', {
  name: 'home',
  action: function() {
    ReactLayout.render(MainLayout, {content: <App />});
  }
});
