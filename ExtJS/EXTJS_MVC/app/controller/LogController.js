Ext.define('EXTJSMVCExample.controller.LogController', {
  // Extend basic controller object
  extend: 'Ext.app.Controller',

  init: function() {
    this.control({
      'logGrid': {
        //itemdblclick: this.editRow
      }
    });
  },
  editRow : function(){
    Ext.Msg.alert("Message", "Double click event on the row!");
  }
});
