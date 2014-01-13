Ext.define('KidozenTasks.store.Tasks', {
    extend: 'Ext.data.Store',
    requires: ['KidozenTasks.model.Task'],
    config: {
        model: 'KidozenTasks.model.Task',
        autoLoad: true,
        sorters: 'title',
        data: [
        ]
    }
});