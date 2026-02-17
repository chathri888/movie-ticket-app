// LOGIN FUNCTION
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "1234") {

        // Save login session
        localStorage.setItem("isLoggedIn", "true");

        // Redirect
        window.location.href = "home.html";

    } else {
        document.getElementById("error").innerText = "Invalid Username or Password";
    }
}

// CHECK AUTH (Call this inside home.html)
function checkAuth() {
    const loggedIn = localStorage.getItem("isLoggedIn");

    if (loggedIn !== "true") {
        window.location.href = "index.html";
    }
}

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
