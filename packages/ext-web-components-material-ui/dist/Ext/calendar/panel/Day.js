import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_panel_Days from '../../../Ext/calendar/panel/Days.js';

var Ext_calendar_panel_Day = /*#__PURE__*/function (_Ext_calendar_panel_D) {
  _inheritsLoose(Ext_calendar_panel_Day, _Ext_calendar_panel_D);

  Ext_calendar_panel_Day.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'addForm', 'alignSelf', 'allowFocusingDisabledChildren', 'allowSelection', 'alwaysOnTop', 'anchor', 'anchorPosition', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'buttonAlign', 'buttons', 'buttonToolbar', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'compact', 'compactOptions', 'constrainAlign', 'contentEl', 'control', 'controller', 'controlStoreRange', 'data', 'dayHeader', 'dayHeaderFormat', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultToolWeights', 'defaultType', 'disabled', 'displayed', 'displayOverlap', 'docked', 'draggable', 'droppable', 'editForm', 'endTime', 'eventDefaults', 'eventRelayers', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'gestureNavigation', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'highlightToday', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'instanceCls', 'itemId', 'items', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'nameHolder', 'padding', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'resizeEvents', 'right', 'ripple', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'showNowMarker', 'standardButtons', 'startTime', 'stateful', 'statefulDefaults', 'stateId', 'store', 'style', 'tabIndex', 'tbar', 'timeFormat', 'timezoneOffset', 'title', 'titleAlign', 'titleCollapse', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'view', 'viewModel', 'visibleDays', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex'];
  };

  Ext_calendar_panel_Day.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,sender,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: 'sender,item,index'
    }, {
      name: 'added',
      parameters: 'sender,container,index'
    }, {
      name: 'beforeactiveItemchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforebottomchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecenteredchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforecollapse',
      parameters: 'sender'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeeventadd',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventdragstart',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventresizestart',
      parameters: 'sender,context'
    }, {
      name: 'beforeexpand',
      parameters: 'sender'
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
      name: 'beforeresizedragstart',
      parameters: 'sender,context'
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
      parameters: 'sender,event'
    }, {
      name: 'bottomchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'collapse',
      parameters: 'sender'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,sender,newActiveItem'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'drawerhide',
      parameters: 'sender'
    }, {
      name: 'drawershow',
      parameters: 'sender'
    }, {
      name: 'erased',
      parameters: 'sender'
    }, {
      name: 'eventadd',
      parameters: 'sender,context'
    }, {
      name: 'eventdrop',
      parameters: 'sender,context'
    }, {
      name: 'eventedit',
      parameters: 'sender,context'
    }, {
      name: 'eventresize',
      parameters: 'sender,context'
    }, {
      name: 'eventtap',
      parameters: 'sender,context'
    }, {
      name: 'expand',
      parameters: 'sender'
    }, {
      name: 'floatingchange',
      parameters: 'sender,positioned'
    }, {
      name: 'focus',
      parameters: 'sender,event'
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
      name: 'move',
      parameters: 'sender,item,toIndex,fromIndex'
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
      name: 'positionedchange',
      parameters: 'sender,positioned'
    }, {
      name: 'remove',
      parameters: 'sender,item,index'
    }, {
      name: 'removed',
      parameters: 'sender,container,index'
    }, {
      name: 'renderedchange',
      parameters: 'sender,item,rendered'
    }, {
      name: 'resize',
      parameters: 'element,info'
    }, {
      name: 'resizedrag',
      parameters: 'sender,context'
    }, {
      name: 'resizedragcancel',
      parameters: 'sender,context'
    }, {
      name: 'resizedragend',
      parameters: 'sender,context'
    }, {
      name: 'resizedragstart',
      parameters: 'sender,context'
    }, {
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
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
      name: 'validateeventadd',
      parameters: 'sender,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'sender,context'
    }, {
      name: 'validateeventedit',
      parameters: 'sender,context'
    }, {
      name: 'validateeventresize',
      parameters: 'sender,context'
    }, {
      name: 'valuechange',
      parameters: 'sender,context'
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

  Ext_calendar_panel_Day.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_panel_Day.PROPERTIES());
    return Ext_calendar_panel_Days.getProperties(properties);
  };

  Ext_calendar_panel_Day.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_panel_Day.EVENTS());
    return Ext_calendar_panel_Days.getEvents(events);
  };

  _createClass(Ext_calendar_panel_Day, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_panel_D.observedAttributes;
      Ext_calendar_panel_Day.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_panel_Day.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_panel_Day(properties, events) {
    return _Ext_calendar_panel_D.call(this, properties.concat(Ext_calendar_panel_Day.PROPERTIES()), events.concat(Ext_calendar_panel_Day.EVENTS())) || this;
  }

  var _proto = Ext_calendar_panel_Day.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_panel_D.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_panel_D.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_panel_Day;
}(Ext_calendar_panel_Days);

export { Ext_calendar_panel_Day as default };