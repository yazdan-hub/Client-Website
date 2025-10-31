// Function to show custom alert for backend required actions
function showBackendAlert(actionName) {
    alert(`Functionality for '${actionName}' requires a proper Backend Server and Database to work. This is a Frontend Template.`);
}

// ==============================================
// LOGIN / REGISTRATION LOGIC
// ==============================================
function setupAuthForm() {
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    const authForm = document.getElementById('auth-form');
    const formTitle = document.getElementById('form-title');
    const switchAuthBtn = document.getElementById('switch-auth-btn');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const loginButton = document.querySelector('.login-button');
    
    let isLogin = true;

    // Switch between Login and Registration Form
    switchAuthBtn.addEventListener('click', () => {
        isLogin = !isLogin;
        
        if (isLogin) {
            formTitle.textContent = 'Login';
            loginButton.textContent = 'Login';
            switchAuthBtn.textContent = 'Create an account';
            confirmPasswordGroup.style.display = 'none';
        } else {
            formTitle.textContent = 'Register';
            loginButton.textContent = 'Register';
            switchAuthBtn.textContent = 'Back to Login';
            confirmPasswordGroup.style.display = 'flex';
        }
    });

    // Simulate Login/Registration (Frontend only)
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (isLogin) {
            // Simulate successful Admin Login
            alert("Login Successful! Redirecting to Dashboard...");
            loginScreen.classList.remove('active');
            dashboardScreen.classList.add('active');
            // Ensure dashboard section starts active
            document.querySelector('.content-section.active')?.classList.remove('active');
            document.getElementById('dashboard').classList.add('active');
        } else {
            // Simulate Registration
            alert("Registration Successful! Please login.");
            isLogin = true;
            switchAuthBtn.click(); // Switch back to login form
        }
    });
}

// Function to handle Logout
function logout() {
    const loginScreen = document.getElementById('login-screen');
    const dashboardScreen = document.getElementById('dashboard-screen');
    
    alert("Logout Successful! Returning to Login screen.");
    dashboardScreen.classList.remove('active');
    loginScreen.classList.add('active');
}


// ==============================================
// DASHBOARD NAVIGATION LOGIC
// ==============================================
function setupDashboardNavigation() {
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('.main-content .content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            
            const targetId = link.getAttribute('href').substring(1); // Get ID without '#'
            
            // Remove 'active' from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add 'active' to the clicked link and target section
            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
}


// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', () => {
    setupAuthForm();
    setupDashboardNavigation();
});