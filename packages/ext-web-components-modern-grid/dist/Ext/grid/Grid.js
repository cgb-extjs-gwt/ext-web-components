import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dataview_List from '../../Ext/dataview/List.js';

var Ext_grid_Grid = /*#__PURE__*/function (_Ext_dataview_List) {
  _inheritsLoose(Ext_grid_Grid, _Ext_dataview_List);

  Ext_grid_Grid.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'collapseDefaults', 'collapsible', 'columnLines', 'columnMenu', 'columnResize', 'columns', 'columnsMenuItem', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'enableColumnMove', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideHeaders', 'hideMode', 'hideOnMaskTap', 'hideScrollbar', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'multiColumnSort', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'rowNumbers', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'title', 'titleBar', 'toFrontOnShow', 'tooltip', 'top', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex'];
  };

  Ext_grid_Grid.EVENTS = function EVENTS() {
    return [{
      name: 'activate',
      parameters: 'newActiveItem,sender,oldActiveItem'
    }, {
      name: 'activeItemchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'add',
      parameters: ''
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
      name: 'beforecomplete',
      parameters: 'editor,value,startValue,The'
    }, {
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforedockedchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeedit',
      parameters: 'sender,location'
    }, {
      name: 'beforegroupcollapse',
      parameters: 'sender,group'
    }, {
      name: 'beforegroupexpand',
      parameters: 'sender,group'
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
      name: 'beforerightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforescrollablechange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeselectionextend',
      parameters: 'grid,An,extension'
    }, {
      name: 'beforeshow',
      parameters: 'sender'
    }, {
      name: 'beforestartedit',
      parameters: 'editor,boundEl,value,The'
    }, {
      name: 'beforestorechange',
      parameters: 'sender,value,oldValue,undefined'
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
      name: 'canceledit',
      parameters: 'editor,value,startValue'
    }, {
      name: 'canceledit',
      parameters: 'sender,location'
    }, {
      name: 'cellselection',
      parameters: 'grid,selection'
    }, {
      name: 'centeredchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'childdoubletap',
      parameters: 'sender,location'
    }, {
      name: 'childlongpress',
      parameters: 'sender,location'
    }, {
      name: 'childmouseenter',
      parameters: 'sender,location'
    }, {
      name: 'childmouseleave',
      parameters: 'sender,location'
    }, {
      name: 'childsingletap',
      parameters: 'sender,location'
    }, {
      name: 'childtap',
      parameters: 'sender,location'
    }, {
      name: 'childtaphold',
      parameters: 'sender,location'
    }, {
      name: 'childtouchcancel',
      parameters: 'sender,location'
    }, {
      name: 'childtouchend',
      parameters: 'sender,location'
    }, {
      name: 'childtouchmove',
      parameters: 'sender,location'
    }, {
      name: 'childtouchstart',
      parameters: 'sender,location'
    }, {
      name: 'columnadd',
      parameters: 'sender,column,index'
    }, {
      name: 'columnhide',
      parameters: 'sender,column'
    }, {
      name: 'columnmenucreated',
      parameters: 'grid,column,menu'
    }, {
      name: 'columnmove',
      parameters: 'sender,column,fromIndex,toIndex'
    }, {
      name: 'columnremove',
      parameters: 'sender,column'
    }, {
      name: 'columnresize',
      parameters: 'sender,column,width'
    }, {
      name: 'columnselection',
      parameters: 'grid,selection'
    }, {
      name: 'columnshow',
      parameters: 'sender,column'
    }, {
      name: 'columnsort',
      parameters: 'sender,column,direction'
    }, {
      name: 'complete',
      parameters: 'editor,value,startValue,The'
    }, {
      name: 'deactivate',
      parameters: 'oldActiveItem,sender,newActiveItem'
    }, {
      name: 'deselect',
      parameters: 'sender,records'
    }, {
      name: 'destroy',
      parameters: ''
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'disclose',
      parameters: 'list,record,target,index,event'
    }, {
      name: 'dockedchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'edit',
      parameters: 'sender,location'
    }, {
      name: 'erased',
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
      name: 'groupcollapse',
      parameters: 'sender,group'
    }, {
      name: 'groupexpand',
      parameters: 'sender,group'
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
      name: 'itemaction',
      parameters: 'sender,index,record,action'
    }, {
      name: 'itemdoubletap',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemlongpress',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemmouseenter',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemmouseleave',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemsingletap',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemswipe',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemtap',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemtaphold',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemtouchcancel',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemtouchend',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemtouchmove',
      parameters: 'sender,index,target,record,e'
    }, {
      name: 'itemtouchstart',
      parameters: 'sender,index,target,record,e'
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
      parameters: ''
    }, {
      name: 'moved',
      parameters: 'sender,container,toIndex,fromIndex'
    }, {
      name: 'navigate',
      parameters: 'sender,to,from'
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
      name: 'refresh',
      parameters: 'sender'
    }, {
      name: 'remove',
      parameters: ''
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
      name: 'rightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'scrollablechange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'select',
      parameters: 'sender,selected'
    }, {
      name: 'selectionextenderdrag',
      parameters: 'grid,An,extension'
    }, {
      name: 'show',
      parameters: 'sender'
    }, {
      name: 'specialkey',
      parameters: 'editor,field,event'
    }, {
      name: 'startedit',
      parameters: 'editor,boundEl,value,The'
    }, {
      name: 'storechange',
      parameters: 'sender,value,oldValue'
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
      name: 'validateedit',
      parameters: 'sender,location'
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

  Ext_grid_Grid.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_grid_Grid.PROPERTIES());
    return Ext_dataview_List.getProperties(properties);
  };

  Ext_grid_Grid.getEvents = function getEvents(events) {
    events = events.concat(Ext_grid_Grid.EVENTS());
    return Ext_dataview_List.getEvents(events);
  };

  _createClass(Ext_grid_Grid, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dataview_List.observedAttributes;
      Ext_grid_Grid.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_grid_Grid.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_grid_Grid(properties, events) {
    return _Ext_dataview_List.call(this, properties.concat(Ext_grid_Grid.PROPERTIES()), events.concat(Ext_grid_Grid.EVENTS())) || this;
  }

  var _proto = Ext_grid_Grid.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dataview_List.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dataview_List.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_grid_Grid;
}(Ext_dataview_List);

export { Ext_grid_Grid as default };