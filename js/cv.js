$(function() {
    // Enable tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Get my age from current date
    $("#age").html(getAge()+" ans");
});

/**
 * Get my age from current date
 *
 * @returns {number}
 */
var getAge = function() {
    var today = new Date();
    var bday  = new Date(1988, 2, 5); // 04 Mars 1988
    var age   = today.getFullYear() - bday.getFullYear();
    var month = today.getMonth() - bday.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < bday.getDate()))
        age--;

    return age;
};