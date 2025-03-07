import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_Grid from '../../Ext/grid/Grid.js';

var Ext_pivot_Grid = /*#__PURE__*/function (_Ext_grid_Grid) {
  _inheritsLoose(Ext_pivot_Grid, _Ext_grid_Grid);

  Ext_pivot_Grid.PROPERTIES = function PROPERTIES() {
    return ['activeChildTabIndex', 'activeItem', 'alignSelf', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'associatedData', 'autoDestroy', 'autoSize', 'axisLock', 'bind', 'bodyCls', 'border', 'bottom', 'bufferSize', 'cardSwitchAnimation', 'centered', 'cls', 'clsGrandTotal', 'clsGroupTotal', 'collapseDefaults', 'collapsible', 'columnLines', 'columnMenu', 'columnResize', 'columns', 'columnsMenuItem', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultType', 'deferEmptyText', 'deselectOnContainerClick', 'disabled', 'disableSelection', 'disclosureProperty', 'displayed', 'docked', 'draggable', 'emptyItemText', 'emptyState', 'emptyText', 'emptyTextDefaults', 'emptyTextProperty', 'enableColumnMove', 'enableColumnSort', 'enableLoadMask', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'grouped', 'groupFooter', 'groupHeader', 'grouping', 'groupPlaceholder', 'height', 'hidden', 'hideAnimation', 'hideHeaders', 'hideMode', 'hideOnMaskTap', 'hideScrollbar', 'horizontalOverflow', 'html', 'id', 'inactiveChildTabIndex', 'indexBar', 'infinite', 'inline', 'innerCls', 'innerCtHeight', 'innerWidth', 'instanceCls', 'itemButtonMode', 'itemCls', 'itemConfig', 'itemContentCls', 'itemDataMap', 'itemId', 'itemInnerCls', 'itemRipple', 'items', 'itemsFocusable', 'itemTpl', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'left', 'leftAxisCellConfig', 'listeners', 'loadingHeight', 'loadingText', 'maintainChildNodes', 'manageBorders', 'margin', 'markDirty', 'masked', 'matrix', 'maxHeight', 'maxItemCache', 'maxWidth', 'minHeight', 'minimumBufferDistance', 'minWidth', 'modal', 'modelValidation', 'multiColumnSort', 'name', 'nameable', 'nameHolder', 'onItemDisclosure', 'padding', 'pinFooters', 'pinHeaders', 'pinnedFooter', 'pinnedFooterHeight', 'pinnedHeader', 'pinnedHeaderHeight', 'plugins', 'pressedDelay', 'preventSelectionOnDisclose', 'preventSelectionOnTool', 'publishes', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'reserveScrollbar', 'resetFocusPosition', 'right', 'ripple', 'rowLines', 'rowNumbers', 'scrollable', 'scrollDock', 'scrollToTopOnRefresh', 'selectable', 'selection', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'sortable', 'startColGroupsCollapsed', 'startRowGroupsCollapsed', 'stateful', 'statefulDefaults', 'stateId', 'store', 'striped', 'style', 'tabIndex', 'title', 'titleBar', 'toFrontOnShow', 'tooltip', 'top', 'topAxisCellConfig', 'topRenderedIndex', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'triggerCtEvent', 'triggerEvent', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'variableHeights', 'verticalOverflow', 'viewModel', 'visibleHeight', 'visibleLeft', 'visibleTop', 'visibleWidth', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex'];
  };

  Ext_pivot_Grid.EVENTS = function EVENTS() {
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
      name: 'pivotbeforereconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'pivotbeforerequest',
      parameters: 'matrix,params'
    }, {
      name: 'pivotbuildtotals',
      parameters: 'matrix,totals'
    }, {
      name: 'pivotcolumnsbuilt',
      parameters: 'matrix,columns'
    }, {
      name: 'pivotdone',
      parameters: 'matrix'
    }, {
      name: 'pivotgroupcelldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupcelltap',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupcelltaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupcollapse',
      parameters: 'matrix,type,group'
    }, {
      name: 'pivotgroupdoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotgroupexpand',
      parameters: 'matrix,type,group'
    }, {
      name: 'pivotgrouptap',
      parameters: 'params,e'
    }, {
      name: 'pivotgrouptaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotitemcelldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemcelltap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemcelltaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotitemdoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemtap',
      parameters: 'params,e'
    }, {
      name: 'pivotitemtaphold',
      parameters: 'params,e'
    }, {
      name: 'pivotmodelbuilt',
      parameters: 'matrix,model'
    }, {
      name: 'pivotprogress',
      parameters: 'matrix,index,total'
    }, {
      name: 'pivotreconfigure',
      parameters: 'matrix,config'
    }, {
      name: 'pivotrecordbuilt',
      parameters: 'matrix,record'
    }, {
      name: 'pivotrequestexception',
      parameters: 'matrix,response'
    }, {
      name: 'pivotstart',
      parameters: 'matrix'
    }, {
      name: 'pivotstorebuilt',
      parameters: 'matrix,store'
    }, {
      name: 'pivottotalcelldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivottotalcelltap',
      parameters: 'params,e'
    }, {
      name: 'pivottotalcelltaphold',
      parameters: 'params,e'
    }, {
      name: 'pivottotaldoubletap',
      parameters: 'params,e'
    }, {
      name: 'pivottotaltap',
      parameters: 'params,e'
    }, {
      name: 'pivottotaltaphold',
      parameters: 'params,e'
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

  Ext_pivot_Grid.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_pivot_Grid.PROPERTIES());
    return Ext_grid_Grid.getProperties(properties);
  };

  Ext_pivot_Grid.getEvents = function getEvents(events) {
    events = events.concat(Ext_pivot_Grid.EVENTS());
    return Ext_grid_Grid.getEvents(events);
  };

  _createClass(Ext_pivot_Grid, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_grid_Grid.observedAttributes;
      Ext_pivot_Grid.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_pivot_Grid.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_pivot_Grid(properties, events) {
    return _Ext_grid_Grid.call(this, properties.concat(Ext_pivot_Grid.PROPERTIES()), events.concat(Ext_pivot_Grid.EVENTS())) || this;
  }

  var _proto = Ext_pivot_Grid.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_grid_Grid.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_grid_Grid.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_pivot_Grid;
}(Ext_grid_Grid);

export { Ext_pivot_Grid as default };