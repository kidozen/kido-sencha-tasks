Ext.define('KidozenTasks.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginview',
    requires: ['Ext.form.FieldSet','Ext.field.Select','Ext.field.Text','Ext.Button'],

    config: {
        title: 'Login',
        
        items: [
            {
                xtype: 'titlebar',
                cls: 'title',
                docked: 'top',
                title: 'KidoZen Sencha Sample'
            },
            {
                id: 'user',
                name: 'user',
                xtype: 'textfield',
                label: 'User',
                value: 'you@kidozen.com'
            },
            {
                id: 'secret',
                name: 'secret',
                xtype: 'textfield',
                label: 'Password',
                value: '',
                inputType: 'password'
            },
            {
                id: 'marketplace',
                name: 'marketplace',
                xtype: 'textfield',
                label: 'Marketplace',
                value: 'your marketplace'
            },
            {
                id: 'submit_button',
                xtype: 'button',
                text: 'Login',
                ui: 'confirm'
            }
        ]        
    }
});
