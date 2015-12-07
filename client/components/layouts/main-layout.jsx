// MainLayout React component - represents the main layout
MainLayout = React.createClass ({
  render() {
    return (
      <div className='container'>
        {this.props.content}
      </div>
    );
  }
});