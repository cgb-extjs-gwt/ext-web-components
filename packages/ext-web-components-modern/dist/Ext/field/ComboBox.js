import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_field_Select from '../../Ext/field/Select.js';

var Ext_field_ComboBox = /*#__PURE__*/function (_Ext_field_Select) {
  _inheritsLoose(Ext_field_ComboBox, _Ext_field_Select);

  Ext_field_ComboBox.PROPERTIES = function PROPERTIES() {
    return ['alignSelf', 'alignTarget', 'allQuery', 'alwaysOnTop', 'animateUnderline', 'anyMatch', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoCapitalize', 'autoComplete', 'autoCorrect', 'autoFitErrors', 'autoFocus', 'autoFocusLast', 'autoHideInputMask', 'autoLoadOnValue', 'autoSelect', 'axisLock', 'badFormatMessage', 'bind', 'bodyAlign', 'border', 'bottom', 'bubbleDirty', 'caseSensitive', 'centered', 'chipView', 'clearable', 'cls', 'collapseOnSelect', 'constrainAlign', 'contentEl', 'controller', 'data', 'dataType', 'defaultListenerScope', 'delimiter', 'dirty', 'disabled', 'displayed', 'displayField', 'displayTpl', 'docked', 'draggable', 'edgePicker', 'editable', 'enableRegEx', 'error', 'errorMessage', 'errorTarget', 'errorTip', 'errorTpl', 'flex', 'floated', 'floatedPicker', 'floatedPickerAlign', 'focusCls', 'focusTrap', 'forceSelection', 'fullscreen', 'height', 'hidden', 'hiddenName', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'hideTrigger', 'html', 'id', 'inline', 'inputMask', 'inputType', 'inputValue', 'instanceCls', 'itemCls', 'itemId', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'label', 'labelAlign', 'labelCls', 'labelInPlaceholder', 'labelMinWidth', 'labelTextAlign', 'labelWidth', 'labelWrap', 'left', 'listeners', 'margin', 'matchFieldWidth', 'maxHeight', 'maxLength', 'maxWidth', 'minChars', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multiSelect', 'name', 'nameable', 'options', 'padding', 'parseValidator', 'pattern', 'picker', 'pickerSlotAlign', 'placeholder', 'plugins', 'primaryFilter', 'publishes', 'queryCaching', 'queryDelay', 'queryMode', 'queryParam', 'readOnly', 'record', 'recordCreator', 'recordCreatorScope', 'reference', 'relative', 'renderTo', 'required', 'requiredMessage', 'right', 'ripple', 'scrollable', 'selection', 'selectOnTab', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sideError', 'stateful', 'statefulDefaults', 'stateId', 'store', 'stripCharsRe', 'style', 'tabIndex', 'textAlign', 'tipError', 'titleError', 'toFrontOnShow', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerAction', 'triggers', 'twoWayBindable', 'typeAhead', 'typeAheadDelay', 'ui', 'underError', 'userCls', 'userSelectable', 'validateDisabled', 'validationMessage', 'validators', 'value', 'valueCollection', 'valueField', 'valueNotFoundText', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex'];
  };

  Ext_field_ComboBox.EVENTS = function EVENTS() {
    return [{
      name: 'action',
      parameters: 'sender,e'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehide',
      parameters: 'sender'
    }, {
      name: 'beforeleftchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforemaxWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminHeightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeminWidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeorientationchange',
      parameters: ''
    }, {
      name: 'beforepickercreate',
      parameters: 'sender,newValue'
    }, {
      name: 'beforequery',
      parameters: 'queryPlan'
    }, {
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforetofront',
      parameters: 'sender'
    }, {
      name: 'beforetopchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,e'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'change',
      parameters: 'sender,newValue,oldValue'
    }, {
      name: 'clearicontap',
      parameters: 'sender,input,e'
    }, {
      name: 'click',
      parameters: 'e'
    }, {
      name: 'collapse',
      parameters: 'field'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'dirtychange',
      parameters: 'sender,dirty'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'errorchange',
      parameters: 'sender,error'
    }, {
      name: 'expand',
      parameters: 'field'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'sender,e'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'fullscreen',
      parameters: 'sender'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hide',
      parameters: 'sender'
    }, {
      name: 'initialize',
      parameters: 'sender'
    }, {
      name: 'keydown',
      parameters: 'sender,e'
    }, {
      name: 'keyup',
      parameters: 'sender,e'
    }, {
      name: 'leftchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'maxWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minHeightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'minWidthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'mousedown',
      parameters: 'sender,e'
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'orientationchange',
      parameters: ''
    }, {
      name: 'painted',
      parameters: 'sender,element'
    }, {
      name: 'paste',
      parameters: 'sender,e'
    }, {
      name: 'pickercreate',
      parameters: 'sender,picker'
    }, {
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'select',
      parameters: 'sender,newValue'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'tofront',
      parameters: 'sender'
    }, {
      name: 'topchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'updatedata',
      parameters: 'sender,newData'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmp,cmpObj'
    }, {
      name: 'created',
      parameters: 'cmp'
    }];
  };

  Ext_field_ComboBox.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_field_ComboBox.PROPERTIES());
    return Ext_field_Select.getProperties(properties);
  };

  Ext_field_ComboBox.getEvents = function getEvents(events) {
    events = events.concat(Ext_field_ComboBox.EVENTS());
    return Ext_field_Select.getEvents(events);
  };

  _createClass(Ext_field_ComboBox, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_field_Select.observedAttributes;
      Ext_field_ComboBox.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_field_ComboBox.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_field_ComboBox(properties, events) {
    return _Ext_field_Select.call(this, properties.concat(Ext_field_ComboBox.PROPERTIES()), events.concat(Ext_field_ComboBox.EVENTS())) || this;
  }

  var _proto = Ext_field_ComboBox.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_field_Select.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_field_Select.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_field_ComboBox;
}(Ext_field_Select);

export { Ext_field_ComboBox as default };