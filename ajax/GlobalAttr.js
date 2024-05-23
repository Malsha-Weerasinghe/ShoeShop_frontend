var bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjpbeyJhdXRob3JpdHkiOiJSb2xlX1VTRVIifV0sInN1YiI6IlNhbnRoYUBnbWFpbC5jb20iLCJpYXQiOjE3MTY0ODM1ODYsImV4cCI6MTcxNjU2OTk4Nn0.TNoZANtrg99pMG2NAARMT3R8QC_tc2HK5n7pJJ1zXPo';

function showAlert(iconType,titleMessage,textMessage){
    Swal.fire({
        icon: iconType,
        title: titleMessage,
        text: textMessage,
    });
}

function formatDate(dateString) {
    var date = new Date(dateString);
    var year = date.getFullYear();
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}