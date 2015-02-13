var React = require('react');

var Modal = require('react-bootstrap/Modal');
var Button = require('react-bootstrap/Button');


var FunModal = React.createClass({
  render: function() {
    return (
        <Modal {...this.props} title="Modal heading" animation={false}>
          
          <div className="modal-body">
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>TODO</p>

            <h4>Tooltips in a modal</h4>
            <p>TODO</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Bacon ipsum dolor amet t-bone meatball pork chop chicken sirloin, ribeye shoulder sausage corned beef kielbasa bresaola boudin. Chuck pork chop boudin andouille biltong ribeye, filet mignon ham shankle alcatra kielbasa meatball swine sausage. Bacon beef ribs filet mignon sausage t-bone ham hock ground round short ribs tongue pastrami. Short ribs shank tri-tip strip steak salami prosciutto venison picanha short loin beef ribs kevin beef.</p>

            <p>Ball tip turducken tongue biltong pork loin porchetta shoulder frankfurter pork belly shank. Bresaola shank short ribs, t-bone ham cow boudin jerky. Venison shank turducken hamburger porchetta. Turkey ham swine rump chuck jerky venison drumstick tenderloin beef ribs kevin tail cow tri-tip. Corned beef meatball strip steak, boudin spare ribs hamburger capicola brisket short loin meatloaf andouille shank t-bone rump. Landjaeger flank ham hock pig. Cow salami cupim pork chop tail.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </div>
          <div className="modal-footer">
            Hanging out in the footer
            <Button onClick={this.props.onRequestHide}>Close</Button>
          </div>
        </Modal>
      );
  }
});

module.exports = FunModal;