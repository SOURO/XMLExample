//We enable Ext Loader by calling Loader.setConfig
Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('app', 'app'); //to add a path for the app namespace, passing the namespace as the first argument, and the relative path to app file is second argument.

//It allows Ext.Loader to be able to resolve the relative path for all the Ext.ux.* classes
Ext.Loader.setPath('Ext.ux', 'http://cdn.sencha.io/ext-4.2.0-gpl/examples/ux');

//Ext JS barked because we’re not using the Loader system in the most optimized way. This is because dependencies identified after Ext.onReady has fired are loaded via synchronous XHR, which is not the most efficient way and is not easy to debug at all.
//To remedy this issue, we’ll have to modify app.js to instruct Ext JS to load our classes in a way that is both performant and easier to debug, To enable faster loading of our classes and afford a better debugging experience, we simply have to add a call to Ext.require
//After loading the page, you’ll notice that Ext JS will no longer fire warning messages to the console.
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
Ext.application({
  name: 'EXTJSMVCExample',
  //appFolder: 'app',
  // Attach model classes to this controller
  models: ['LogModel'],
  // Attach store classes to this controller
  stores: ['LogStore'],
  // ..and last but not least - the view classes
  views: ['Log.LogGrid'],

  // Attach controllers
  controllers: ['LogController'],

  launch: function() {
        Ext.create('Ext.container.Viewport',{
            style:{"background-color":"#ffffff", 
                "border-color": "#c6c6c6"},
            items:[
              {xtype: 'logGrid'}
            ]
        });
    }

});