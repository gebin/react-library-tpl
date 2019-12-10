function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var React = require("react");

var PropTypes = require('prop-types');

var Hello =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hello, _React$Component);

  function Hello() {
    _classCallCheck(this, Hello);

    return _possibleConstructorReturn(this, _getPrototypeOf(Hello).apply(this, arguments));
  }

  _createClass(Hello, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, " Hello ", this.props.name);
    }
  }]);

  return Hello;
}(React.Component);

Hello.propTypes = {
  name: PropTypes.string.isRequired
}; // Hello.defaultProps = {

var React$1 = require('react');

var ReactLibraryTpl =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactLibraryTpl, _React$Component);

  function ReactLibraryTpl() {
    _classCallCheck(this, ReactLibraryTpl);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactLibraryTpl).apply(this, arguments));
  }

  _createClass(ReactLibraryTpl, [{
    key: "render",
    value: function render() {
      return React$1.createElement(Hello, null);
    }
  }]);

  return ReactLibraryTpl;
}(React$1.Component);

export default ReactLibraryTpl;
