Ext.define('Admin.Space.Tab', {

  extend: 'Ext.tab.Panel',  
  title: 'Space',
  activeTab: 1,

  closable: true,

  requires: [
    'Admin.Space.Collection',
    'Admin.Space.Info',
  ],

  initComponent() {
    this.title = this.params.space.split('_').map(Ext.util.Format.capitalize).join('');
    this.callParent(arguments);
  },

  items:[{
    xtype: 'space-info',
  }, {
    xtype: 'space-collection'
  }]
});