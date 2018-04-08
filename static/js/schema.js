/**
 * A front end representation of the api's data models.
 */
AUMed.Schema = {
    Patient: function(data) {
        this.name = data.name;
        this.auth_id = data.auth_id;
        this.medicine = data.medicine;
        this.amount = parseInt(data.amount || 0);

        this.update = function() {};
    },
    Policy: function(data) {
        this.policy_id = data.policy_id;
        this.data_id = data.data_id;
        this.group_id = data.group_id;
        this.column_name = data.column_name;
        this.table_name = data.table_name;
        this.expiration = data.expiration;
        this.policy_bitwise = data.policy_bitwise;
    },
};