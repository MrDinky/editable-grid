'use strict';

Vue.component('grid', {
    template: '#grid-template',
    data: () => ({ rows: [] }),
    created: function () {
        let self = this;
        $.ajax({
            url: 'api/get-rows',
            type: 'POST',
            success: function(data) {
                self.rows = data;
            },
            error: function() {
                alert("Some error.")
            }
        });
    },
    methods: {
        updateRow: function(id, value, column) {
            $.ajax({
                url: 'api/update-row',
                type: 'POST',
                dataType: 'JSON',
                data: {id: id, value: value, column: column},
                success: function(data) {
                    if(!data.status) {
                        alert("Field has not been updated.");
                    }
                },
                error: function() {
                    alert("Request error.")
                }
            });
        },
        addRow: function(){
            let self = this;
            $.ajax({
                url: 'api/add-row',
                type: 'POST',
                success: function(data) {
                    if(data.status) {
                        self.rows.push({ id: data.id ,  name:"", last_name: "", city: ""});
                    } else {
                        alert("Row has not been added.");
                    }
                },
                error: function() {
                    alert("Request error.")
                }
            });
        },
        removeRow: function(id, index){
            let self = this;
            $.ajax({
                url: 'api/delete-row',
                type: 'POST',
                dataType: 'JSON',
                data: {id: id},
                success: function(data) {
                    if(data.status) {
                        self.rows.splice(index, 1);
                    } else {
                        alert("Row has not been deleted.");
                    }
                },
                error: function() {
                    alert("Request error.")
                }
            });
        }
    }
})

new Vue({
    el: "#wrapper"
});