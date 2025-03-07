/**
 * @class Ext.menu.CheckItem
 * @extend Ext.menu.Item
 * @xtype menucheckitem
 *
 * A menu item that contains a togglable checkbox by default, but that can also be a part of a radio group.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container>
 *    <ext-button text="Menu">
 *        <ext-menu rel="menu" >
 *            <ext-menucheckitem text="Mobile" name="ui-type"></ext-menucheckitem>
 *            <ext-menucheckitem text="Desktop" name="ui-type"></ext-menucheckitem>
 *        </ext-menu>
 *    </ext-button>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-button.component';
 *import '@sencha/ext-web-components/dist/ext-menu.component';
 *import '@sencha/ext-web-components/dist/ext-menucheckitem.component';
 *
 *export default class CheckItemComponent {}
 *```
 */

/**
 * @property {Boolean} [isMenuCheckItem=true]
 * `true` in this class to identify an object as an instantiated Menu CheckItem, or subclass thereof.
 */

/**
 * @cfg {String} [iconAlign='end']
 * @hide
 * Not supported at this level. Checkbox is at the start, iconAlign is fixed as 'end'
 */

/**
 * @cfg {Boolean} [hideOnClick=false]
 * Whether to not to hide the owning menu when this item is clicked.
 * Defaults to `false` for checkbox items, and radio group items.
 */

/**
 * @cfg {Boolean} [checked=false]
 * True to render the menuitem initially checked.
 * @accessor
 */

/**
 * @cfg {Function/String} [checkHandler=null]
 * @param {Ext.menu.CheckItem} This menu CheckItem
 * @param {Boolean} checked The new checked state
 * Alternative for the {@link #checkchange} event.  Gets called with the same parameters.
 * @controllable
 * @accessor
 */

/**
 * @cfg {Object} [scope]
 * Scope for the {@link #checkHandler} callback.
 * @accessor
 */

/**
 * @cfg {Boolean} [checkChangeDisabled=false]
 * True to prevent the checked item from being toggled. Any submenu will still be accessible.
 * @accessor
 */

/**
 * @cfg {String} [submenuText='{0} submenu']
 * Text to be announced by screen readers when a check item
 * submenu is focused.
 * @locale
 */

/**
 * @cfg href
 * @hide
 * Not supported on CheckItems and RadioItems
 */

/**
 * @cfg target
 * @hide
 * Not supported on CheckItems and RadioItems
 */

/**
 * @event beforecheckchange
 * Fires before a change event. Return false to cancel.
 * @param {Ext.menu.CheckItem} this CheckItem
 * @param {Boolean} checked
 */

/**
 * @event checkchange
 * Fires after a change event.
 * @param {Ext.menu.CheckItem} this CheckItem
 * @param {Boolean} checked
 */
