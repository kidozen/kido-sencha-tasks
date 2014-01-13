Ext.define('KidozenTasks.controller.TaskList', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            taskListView: 'tasklistview',
            newTaskButton: '#newTaskButton',
            tl: 'tasklistgrid',
            filterButton : '#filter_button'
        },
        control: {
            taskListView: {
                show: 'showTaskList'
            },
            newTaskButton : {
                tap: 'onNewTaskButtonTap'
            }, 
            tl : {
                disclose: 'onItemDisclose'
            },
            filterButton : {
                toggle: 'filterToggle'
            }
        }
    },

    onItemDisclose : function ( item, record,target, index, e, eOpts ) {
        var editController = new KidozenTasks.view.Task();
        editController.setRecord(record);
        Ext.Viewport.setActiveItem(editController);
    },

    showTaskList : function(obj, opts) {
        if (model) {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                indicator: true,
                message: 'Loading task list...'
            });

            var query = {};
            model.queryTasks(query)
                .done(function ( tasks ) {
                    var taskstore = Ext.create("Ext.data.Store", {
                        storeId: "taskStore",
                        data : tasks
                    });
                    obj.getComponent('taskListGrid').setStore (taskstore);
                    Ext.Viewport.unmask();
                })
                .fail(function () {
                    Ext.Viewport.unmask();
                    Ext.Msg.alert('Error', 'An error occurred.');       
                });
            };
    },

    onNewTaskButtonTap : function() {
        var newTaskView = new KidozenTasks.view.Task();
        Ext.Viewport.setActiveItem(newTaskView);
    },

    filterToggle: function (container, button, pressed){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Loading task list...'
        });        
        
        var parent = this.getTl();
        
        var query = {};
        switch (button.getText()) {
            case "All":
                break;
            case "Pending":
                if (pressed) {query.completed=false};
                break;
            case "Completed":
                if (pressed) {query.completed=true};
                break;
        }
        
        console.log('button.getText():' + button.getText() + '- pressed:' + pressed);
        console.log('query:' + JSON.stringify(query));

        model.queryTasks(query)
            .done(function ( tasks ) {
                var taskstore = Ext.create("Ext.data.Store", {
                    storeId: "taskStore",
                    data : tasks
                });
                parent.setStore (taskstore);
                Ext.Viewport.unmask();
            })
            .fail(function () {
                Ext.Viewport.unmask();
                Ext.Msg.alert('Error', 'An error occurred.');       
            });
    }
});
