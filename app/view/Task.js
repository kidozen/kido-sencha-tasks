Ext.define('KidozenTasks.view.Task', {
    extend: 'Ext.form.Panel',
    xtype: 'tasknew',
    requires: ['Ext.form.FieldSet','Ext.field.Select','Ext.field.Text','Ext.Button'],

    config: {
        currentRecord: {},
        title: 'Task',
        items: [
            {
                xtype: 'titlebar',cls: 'title',docked: 'top',title: 'Task List',
                items: [
                    {
                           cls: 'back',
                           hidden: false,
                           ui: 'back',
                           action: 'back',
                           align: 'left',
                           text: 'back'
                        }
                ]
            },
            {
                id: 'taskTitle',
                name: 'taskTitle',
                xtype: 'textfield',
                label: 'Title'
            },
            {
                id: 'taskDescription',
                name: 'taskDescription',
                xtype: 'textfield',
                label: 'Description'
            },
            {
                id: 'updateTaskButton',
                xtype: 'button',
                text: 'Complete',
                ui: 'confirm'
            },
            {
                id: 'createTaskButton',
                xtype: 'button',
                text: 'Create',
                ui: 'confirm'
            },
            {
                id: 'deleteTaskButton',
                xtype: 'button',
                text: 'Delete',
                ui: 'confirm'
            }
        ]        
    }
    ,
    setRecord: function( options) {
        this.currentRecord = options.raw; 
        return this;
    }
});