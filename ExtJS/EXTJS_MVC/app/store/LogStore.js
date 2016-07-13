Ext.define('EXTJSMVCExample.store.LogStore', {
  extend: 'Ext.data.Store',
  model: 'EXTJSMVCExample.model.LogModel',
  autoLoad: true,
  sorters: [{
      property: 'date',
      direction: 'ASC'
  }],
  //pageSize: 20,
  proxy: {
    // Defined this proxy type
    type: 'ajax',
    // Data source
    url: 'data/data.json',
    //enablePaging: true,
    reader: {
      type: 'json',
      root: 'logdata'
    }
  }
});