Ext.define('KidozenTasks.model.Task', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            { name: '_id', type: 'string' },        
            { name: 'title', type: 'string' },
            { name: 'desc', type: 'string' } ,
            { name: 'completed', type: 'boolean' }        
        ]
    }
});
