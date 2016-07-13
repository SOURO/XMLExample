Ext.Loader.setPath('Ext.ux', 'http://cdn.sencha.io/ext-4.2.0-gpl/examples/ux');
Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.ux.grid.FiltersFeature',
    'Ext.ux.data.PagingMemoryProxy',
    'Ext.toolbar.Paging',
    'Ext.ux.SlidingPager',
    'Ext.util.*',
    'Ext.state.*'
]);

Ext.onReady(function() {
    Ext.QuickTips.init();
    
    // setup the state provider, all state information will be saved to a cookie
    //Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

    //sample static data for the store
    var myData1 = [
        ['1/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code." .abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['2/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'efg', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code." .abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['3/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['4/12/2013 23:8:1', 'domain_akz', 'FATAL',  '127.0.0.1', 'xyz', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['5/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['6/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['7/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['9/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code." .abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['2/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['4/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['5/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'mno', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['6/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'bvc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/1/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/2/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/3/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code." .abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'FATAL',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/6/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code." .abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/8/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'jkl', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/9/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code." .abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/2/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code.".abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code." .abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."']
    ];

    var myData2 = [
        ['8/1/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'mno', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/2/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['6/3/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'xyz', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['4/3/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/5/2013 23:8:1', 'domain_akz', 'FATAL',  '127.0.0.1', 'pqr', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."']
    ];

    var myData3 = [
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'FATAL',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'ERROR',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'FATAL',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."'],
        ['8/12/2013 23:8:1', 'domain_akz', 'INFO',  '127.0.0.1', 'abc', '.abc.souro.xyz.mon_123456 "Operation Completed Successfully with 1234 status code."']
    ];

    // create the data store
    var store1 = Ext.create('Ext.data.Store', {
        fields: [
           {name: 'date', dateFormat: 'd/m/Y H:i:s'},
           {name: 'domain'},
           {name: 'type'},
           {name: 'ip'},
           {name: 'users'},
           {name: 'description'}
        ],
        proxy: {
          type: 'pagingmemory',
          data: myData1,
          enablePaging: true,
          reader: {
             type: 'array'
          }
       },
        remoteSort: true,
        sorters: [{
            property: 'date',
            direction: 'ASC'
        }],
        pageSize: 20
    });

    var store2 = Ext.create('Ext.data.Store', {
        fields: [
           {name: 'date', dateFormat: 'd/m/Y H:i:s'},
           {name: 'domain'},
           {name: 'type'},
           {name: 'ip'},
           {name: 'users'},
           {name: 'description'}
        ],
        proxy: {
          type: 'pagingmemory',
          data: myData2,
          enablePaging: true,
          reader: {
             type: 'array'
          }
       },
        remoteSort: true,
        sorters: [{
            property: 'date',
            direction: 'ASC'
        }],
        pageSize: 20
    });

    var store3 = Ext.create('Ext.data.Store', {
        fields: [
           {name: 'date', dateFormat: 'd/m/Y H:i:s'},
           {name: 'domain'},
           {name: 'type'},
           {name: 'ip'},
           {name: 'users'},
           {name: 'description'}
        ],
        proxy: {
          type: 'pagingmemory',
          data: myData3,
          enablePaging: true,
          reader: {
             type: 'array'
          }
       },
        remoteSort: true,
        sorters: [{
            property: 'date',
            direction: 'ASC'
        }],
        pageSize: 20
    });

    var filtersCfg = {//<-- declaring filters
        ftype: 'filters',
        // encode: false,//encode, // json encode the filter query
        local: true,//local,   // defaults to false (remote filtering)
        filters: [
            {type:'date', dataIndex:'date'},
            {type:'string', dataIndex:'domain'},
            {type:'string', dataIndex:'users'},
            {type:'list', dataIndex:'type', options: ['INFO', 'ERROR', 'FATAL']}
        ]
    };

    // create the Grid
    var grid1 = Ext.create('Ext.grid.Panel', {
        store: store1,
        border: false,
        stateful: true,
        stateId: 'stateGrid',
        // features: [{ftype: 'groupingsummary', groupHeaderTpl: 'Subject: {date}'}],
        features: [filtersCfg],
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
        title: 'Operability Logs',
        viewConfig: {
            stripeRows: true
        },
        dockedItems: [{
            xtype: 'toolbar',
            cls: 'my-theader-cls',
            items: [{
                xtype: 'button',
                text: 'Config',
                tooltip: 'Change Config Settings',
                cls: 'my-button-cls',
                handler: function () {
                }
            }]
        }],
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store1,
            displayInfo: true,
            displayMsg: 'Displaying operability logs {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            plugins: Ext.create('Ext.ux.SlidingPager', {})
        }),
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

    // add some buttons to bottom toolbar just for demonstration purposes
    // grid1.child('pagingtoolbar').add([
    //     '->',
    //     {
    //         text: 'Encode: ' + (encode ? 'On' : 'Off'),
    //         tooltip: 'Toggle Filter encoding on/off',
    //         enableToggle: true,
    //         handler: function (button, state) {
    //             var encode = (grid1.filters.encode !== true);
    //             var text = 'Encode: ' + (encode ? 'On' : 'Off'); 
    //             grid1.filters.encode = encode;
    //             grid1.filters.reload();
    //             button.setText(text);
    //         } 
    //     },
    //     {
    //         text: 'All Filter Data',
    //         tooltip: 'Get Filter Data for Grid',
    //         handler: function () {
    //             var data = Ext.encode(grid1.filters.getFilterData());
    //             Ext.Msg.alert('All Filter Data',data);
    //         } 
    //     },{
    //         text: 'Clear Filter Data',
    //         handler: function () {
    //             grid1.filters.clearFilters();
    //         } 
    //     }  
    // ]);

    store1.load();
    
     // create the Grid
    var grid2 = Ext.create('Ext.grid.Panel', {
        store: store2,
        border: false,
        stateful: true,
        stateId: 'stateGrid',
        // features: [{ftype: 'groupingsummary', groupHeaderTpl: 'Subject: {date}'}],
        features: [filtersCfg],
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
        title: 'Audit Logs',
        viewConfig: {
            stripeRows: true
        },
        dockedItems: [{
            xtype: 'toolbar',
            cls: 'my-theader-cls',
            items: [{
                xtype: 'button',
                text: 'Config',
                tooltip: 'Change Config Settings',
                cls: 'my-button-cls',
                handler: function () {
                }
            }]
        }],
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store2,
            displayInfo: true,
            displayMsg: 'Displaying operability logs {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            plugins: Ext.create('Ext.ux.SlidingPager', {})
        }),
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
                            width: 300,
                            height: 300,
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

    store2.load();

     // create the Grid
    var grid3 = Ext.create('Ext.grid.Panel', {
        store: store3,
        border: false,
        stateful: true,
        stateId: 'stateGrid',
        // features: [{ftype: 'groupingsummary', groupHeaderTpl: 'Subject: {date}'}],
        features: [filtersCfg],
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
        title: 'Operability Logs',
        viewConfig: {
            stripeRows: true
        },
        dockedItems: [{
            xtype: 'toolbar',
            cls: 'my-theader-cls',
            items: [{
                xtype: 'button',
                text: 'Config',
                tooltip: 'Change Config Settings',
                cls: 'my-button-cls',
                handler: function () {
                }
            }]
        }],
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store3,
            displayInfo: true,
            displayMsg: 'Displaying operability logs {0} - {1} of {2}',
            emptyMsg: "No topics to display",
            plugins: Ext.create('Ext.ux.SlidingPager', {})
        }),
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
                            width: 300,
                            height: 300,
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

    store3.load();

    Ext.create('Ext.TabPanel', {
        renderTo: Ext.getBody(),
        resizeTabs: true,
        tabPosition: 'top',
        monitorResize: true,
        activeTab: 0,
        plain: true,
        animCollapse: true,
        cls: "my-header",
        bodyStyle: {
            //background: '#ffc',
            padding: '10px'
        },
        items: [
            grid1,grid2,grid3
        ]
    });
});