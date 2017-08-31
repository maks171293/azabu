jQuery(document).ready(function($){
    $('.datepicker').pickadate();

    $('.datepicker').pickadate({
        container: '#rtb-date'
    });

    $('.timepicker').pickatime()
});