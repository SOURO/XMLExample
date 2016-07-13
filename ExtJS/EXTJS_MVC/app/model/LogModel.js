Ext.define('EXTJSMVCExample.model.LogModel', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [
        {name: 'date', dateFormat: 'd/m/Y H:i:s'},
        {name: 'domain', type: 'String'},
        {name: 'type', type: 'String'},
        {name: 'ip', type: 'String'},
        {name: 'users', type: 'String'},
        {name: 'description', type: 'String'}
	]
});