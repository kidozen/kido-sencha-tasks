Ext.define('KidozenTasks.controller.Task', {
    extend: 'Ext.app.Controller',
    xtype: 'taskcontroller',
    config: {
        taskid : '',
        autoDestroy:true,
        refs: {
            taskNewView: 'tasknew',
            deleteTaskButton: '#deleteTaskButton',
            updateTaskButton: '#updateTaskButton',
            createTaskButton: '#createTaskButton',
            taskTitle: '#taskTitle',
            taskDescription : '#taskDescription',
            btnBack: 'tasknew button[action=back]',
        },
        control: {
            taskNewView: {
                show: 'show',
            },
            createTaskButton : {
                tap: 'createFn'
            },
            updateTaskButton : {
                tap: 'updateFn'
            },
            deleteTaskButton : {
                tap: 'deleteFn'
            },
            btnBack: {
                tap: 'onBackBtnTap'
            }
        }
    },
    
    updateFn : function(event, target){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Updating task...'
        });        
        model.completeTask(this.taskid).done(function(){
                Ext.Viewport.setActiveItem('tasklistview');
                Ext.Viewport.unmask();                
            })
            .fail(function(){
                Ext.Viewport.unmask();                
                Ext.Msg.alert('Error', 'An error occurred while updating task');       
                Ext.Viewport.setActiveItem('tasklistview');                
            });
    },

    deleteFn : function(event, target){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Deleting task...'
        });        
        model.deleteTask(this.taskid).done(function(){
                Ext.Viewport.setActiveItem('tasklistview');
                Ext.Viewport.unmask();                
            })
            .fail(function(){
                Ext.Viewport.unmask();                
                Ext.Msg.alert('Error', 'An error occurred while deleting task'); 
                Ext.Viewport.setActiveItem('tasklistview');                
            });
    },

    createFn : function(event, target) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Creating task...'
        });        
        var task_title = this.getTaskTitle().getValue();
        var task_desc = this.getTaskDescription().getValue();
        if (task_title && task_desc)
        {
            model.insertTask(task_title, task_desc).done(function(){
                    Ext.Viewport.unmask();
                    Ext.Viewport.setActiveItem('tasklistview');
                })
                .fail(function(){
                    Ext.Viewport.unmask();
                    Ext.Msg.alert('Error', 'An error occurred while creating the task'); 
                    Ext.Viewport.setActiveItem('tasklistview');
                });
        }
    },

    onBackBtnTap : function() {
        Ext.Viewport.setActiveItem('tasklistview');
    },

    show : function(obj, options) {        
        Ext.getCmp('taskTitle').setDisabled(obj.currentRecord!=undefined);
        Ext.getCmp('taskDescription').setDisabled(obj.currentRecord!=undefined);
        if (obj.currentRecord) {
            this.taskid = obj.currentRecord._id;

            Ext.getCmp('createTaskButton').hide();
            Ext.getCmp('updateTaskButton').show();
            Ext.getCmp('deleteTaskButton').show();

            Ext.getCmp('taskTitle').setValue(obj.currentRecord.title);
            Ext.getCmp('taskDescription').setValue(obj.currentRecord.desc);
            Ext.getCmp('updateTaskButton').setDisabled(obj.currentRecord.completed);
        }
        else {
            Ext.getCmp('createTaskButton').show();
            Ext.getCmp('deleteTaskButton').hide();
            Ext.getCmp('updateTaskButton').hide();
        }
        return;
    }
});
