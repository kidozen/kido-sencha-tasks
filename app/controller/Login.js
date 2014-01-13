Ext.define('KidozenTasks.controller.Login', {
    extend: 'Ext.app.Controller',
    xtype: 'logincontroller',
    config: {
        refs: {
            submitButton: '#submit_button',
            user: '#user',
            secret: '#secret',
            marketplace: '#marketplace'
        },
        control: {
            'submitButton' : {
                tap: 'onSubmitTap'
            }
        }
    },

    onSubmitTap: function(t, index, target, record, e, eOpts) {
        var user = this.getUser().getValue(); 
        var secret = this.getSecret().getValue(); 
        var mkp = 'https://' + this.getMarketplace().getValue() + '.kidocloud.com';
        
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Loggin in, please wait...'
        });

        model.authenticate(user, secret, "tasks", mkp)
            .done(function () {
                Ext.Viewport.setActiveItem({xtype:'tasklistview'});
                Ext.Viewport.unmask();
            })
            .fail(function () {
                Ext.Msg.alert('Error', 'Please check the information. Also ensure you have a valid KidoZen account');       
                Ext.Viewport.unmask();
            });
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log('login view');
    }
});
