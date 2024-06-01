import {SignInModel} from "../Model/SignInModel.js";


// Login
$("#loginBtn").on('click', () => {
    var loginMail = $("#loginPwMail").val();
    var loginPw   = $('#loginPwTxt').val();


    console.log(loginMail,loginPw)
    var loginDetails = new SignInModel(loginMail,loginPw)

    var loginDetailsJson = JSON.stringify(loginDetails);


    const sendAJAX = (loginDetails) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/shoes/api/v1/user/signIn",
                contentType: "application/json",
                data: loginDetails,
                success: function(data) {
                    resolve(data); // Resolve the promise with the received data


                },
                error: function(xhr, status, error) {
                    reject(error); // Reject the promise with the error
                }
            });
        });
    };

// Usage:
    sendAJAX(loginDetailsJson)
        .then(token => {
            localStorage.setItem("jwtToken",token)
            window.location.href = '../view/adminPanel.html';
        })
        .catch(error => {

            alert("Wrong Password Or Email");
        });



});


/*$("#loginBtn").on('click', () => {
    var loginMail = $("#loginPwMail").val();
    var loginPw   = $('#loginPwTxt').val();

    console.log(loginMail, loginPw);
    var loginDetails = new SignInModel(loginMail, loginPw);

    var loginDetailsJson = JSON.stringify(loginDetails);

    const sendAJAX = (loginDetails) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:8080/shoes/api/v1/user/signIn",
                contentType: "application/json",
                data: loginDetails,
                success: function(data) {
                    resolve(data); // Resolve the promise with the received data
                },
                error: function(xhr, status, error) {
                    reject(error); // Reject the promise with the error
                }
            });
        });
    };

    // Usage:
    sendAJAX(loginDetailsJson)
        .then(response => {
            const { token, role } = response;
            localStorage.setItem("jwtToken", token);
            if (role === 'admin') {
                window.location.href = '../view/adminPanel.html';
            } else if (role === 'user') {
                window.location.href = '../view/userPanel.html';
            } else {
                alert("Unknown role, contact support.");
            }
        })
        .catch(error => {
            alert("Wrong Password Or Email");
        });
});*/



/*
$("#loginBtn").click(function() {
    let value = {
        email: $("#loginPwMail").val(),
        password: $("#loginPwTxt").val(),
    };
    console.log(value);
    $.ajax({
        url: "http://localhost:8080/shoes/api/v1/user/signIn",
        method: "POST",
        data: JSON.stringify(value),
        contentType: "application/json",
        success: function (res, textStatus, jsXH) {
            localStorage.setItem('email', value.email);
            localStorage.setItem('password', value.password);
            localStorage.setItem('accessToken', res.token);
            console.log("User SignIn Successfully " + res.token);
            fetchUserDetails(value.email, res.token);
        },
        error: function (ob, textStatus, error) {
            Swal.fire({
                icon: "error",
                title: "Error Sign in",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

$(document).ready(function() {
    var username = localStorage.getItem('email');
    $("#greeting").text("Welcome, " +username);
    $("#cashierName").val(username);
});

function fetchUserDetails(email, token) {
    $.ajax({
        url: "http://localhost:8080/shoes/api/v1/user/search" + email,
        method: "GET",
        headers: {
            'Authorization': 'Bearer ' + token
        },
        dataType: "json",
        success: function (res, textStatus, xhr) {
            localStorage.setItem('role', res.role);
            localStorage.setItem('cashier', email);
            Swal.fire({
                icon: "success",
                title: "Welcome, " + res.email,
                showConfirmButton: true,
                confirmButtonText: "OK"
            }).then((result) => {
                if (result.isConfirmed) {
                    if (res.role === "ADMIN") {
                        window.location.href = "adminPanel.html";
                    } else if(res.role === "USER"){
                        window.location.href = "userPanel.html";
                    }
                }
            });
        },
        error: function (ob, textStatus, error) {
            Swal.fire({
                icon: "error",
                title: "Error fetching user details",
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function isTokenExpired(token) {
    const jwtPayload = JSON.parse(atob(token.split('.')[1]));
    const expiryTime = jwtPayload.exp * 1000;
    return Date.now() >= expiryTime;
}

function performAuthenticatedRequest() {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken || isTokenExpired(accessToken)) {
        $.ajax({
            url:  "http://localhost:8080/shoes/api/v1/user/signIn",
            method: "POST",
            data: JSON.stringify({
                email: localStorage.getItem('email'),
                password: localStorage.getItem('password'),
            }),
            contentType: "application/json",
            success: function (res, textStatus, jsXH) {
                localStorage.setItem('accessToken', res.token);
                console.log("Sign in successfully, new token: " + res.token);
            },
            error: function (ob, textStatus, error) {
                console.log("Token renew sign in error " + error);
            }
        });
    }
}
*/



