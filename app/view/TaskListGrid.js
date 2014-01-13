Ext.define('KidozenTasks.view.TaskListGrid', {
    extend: 'Ext.dataview.List',
    requires: ['KidozenTasks.store.Tasks','KidozenTasks.view.Task'],
    xtype: 'tasklistgrid',
    config: {
        id: 'taskListGrid', 
        width: '95%',
        height: '95%',
        store: 'Tasks',
        itemTpl: '{title} {description}',
        onItemDisclosure: function(record, btn, index) {
            /*
            Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('title'), Ext.emptyFn);
            var editController = new KidozenTasks.view.Task(record);
            console.log('record: ' + record.title);
            Ext.Viewport.setActiveItem(editController);
            */
        }
    }
});
