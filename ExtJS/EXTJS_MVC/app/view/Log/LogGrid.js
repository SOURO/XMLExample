Ext.define('EXTJSMVCExample.view.Log.LogGrid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.logGrid',
  border: false,
  stateful: true,
  stateId: 'stateGrid',
  title: 'Logs',
  store: 'LogStore',
  name: 'logGrid',
  id: 'logGrid',
  features: [{
      ftype: 'filters',
      local: true,
      filters: [
          {type:'date', dataIndex:'date'},
          {type:'string', dataIndex:'domain'},
          {type:'string', dataIndex:'users'},
          {type:'list', dataIndex:'type', options: ['INFO', 'ERROR', 'FATAL']}
      ]
  },{
    ftype: 'groupingsummary', 
      groupHeaderTpl: 'Subject: {type}'
    }
  ],
  loadMask: true,
  columns: [
      {
          text     : 'Date',
          sortable : true,
          dataIndex: 'date',
          width    : 150,
          renderer: Ext.util.Format.dateRenderer('d/m/Y H:i:s')
      },
      {
          text     : 'Domain',
          sortable : true,
          width    : 150,
          dataIndex: 'domain',
          sortable: false,
      },
      {
          text     : 'Type',
          sortable : true,
          width    : 100,
          dataIndex: 'type'
      },
      {
          text     : 'Device IP',
          width    : 100,
          dataIndex: 'ip',
          sortable: false,
      },
      {
          text     : 'Users',
          sortable : true,
          width    : 100,
          dataIndex: 'users'

      },
      {
          text     : 'Description',
          sortable : true,
          width    : 700,
          dataIndex: 'description'
      }
  ],
  height: 550,
  //width: 1330,
  viewConfig: {
      stripeRows: true
  },
  bbar: Ext.create('Ext.PagingToolbar', {
      store: 'LogStore',
      displayInfo: true,
      displayMsg: 'Displaying operability logs {0} - {1} of {2}',
      emptyMsg: "No topics to display"
      //plugins: Ext.create('Ext.ux.SlidingPager', {})
  }),
  dockedItems: [{
      xtype: 'toolbar',
      cls: 'my-theader-cls',
      items: [{
          xtype: 'button',
          text: 'Config',
          tooltip: 'Change Config Settings',
          cls: 'my-button-cls',
          handler: function () {
            Ext.Msg.alert("Message", "Config settings can be set here.");
          }
      }]
  }],
  listeners: {
      celldblclick: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
          if(cellIndex==5){
              //console.log(e.data.description);
              var popWindow = null;
              if(!popWindow){
                  var popWindow = Ext.create('Ext.form.Panel', {
                      floating: true,
                      centered: true,
                      title: 'Log Description',
                      modal: true,
                      plain: true,
                      width: 400,
                      height: 400,
                      closable:true,
                      defaultType: 'displayfield',
                      bodyPadding:10,               
                      renderTo: Ext.getBody(),
                      items: [{
                          fieldLabel:'Description',
                          name: 'description',
                          allowBlank: false,
                          ref : '../description'
                      }]
                  });
              }
              //popWindow.reset();
              popWindow.getForm().loadRecord(record);
              popWindow.show();
          }
      }
  }
});