Ext.define('KidozenTasks.view.TaskList', {
    extend: 'Ext.Container',
    xtype: 'tasklistview',
    requires: ['KidozenTasks.view.TaskListGrid','Ext.form.FieldSet','Ext.field.Select','Ext.field.Text','Ext.Button','Ext.SegmentedButton'],
    config: {
        title: 'TaskList',
        items: [
            {
                xtype: 'titlebar',cls: 'title',docked: 'top',title: 'Task List',
                items: [
                    {
                            id: 'newTaskButton',
                            cls: 'button',
                            hidden: false,
                            text: 'Add',
                            align: 'left'
                       }
                ]
            },
            {
                xtype : 'tasklistgrid'
            },
            {
                xtype: 'toolbar',
                cls: 'footer',
                ui: 'light',
                docked: 'bottom',
                pack: 'center',
                items : [
                    {xtype: 'spacer'},
                    {
                        id : 'filter_button',
                        xtype : 'segmentedbutton',
                        allowDepress: true,
                        items : [{
                                    text : 'All',
                                    pressed : true
                                },
                                {
                                    text : 'Pending'
                                },
                                {
                                    text : 'Completed'
                                }]
                    },
                    {xtype: 'spacer'}
                ]
            }
        ]    
    }
});