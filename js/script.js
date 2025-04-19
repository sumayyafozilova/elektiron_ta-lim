// document.addEventListener("DOMContentLoaded", () => {
   
//     const form = document.getElementById('signupForm');

//     form.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;

//         if (name !== "" && email !== "" && password !== "") {
//             window.location.href = "motivation.html"; 
//         } else {
//             alert("Iltimos, barcha maydonlarni to'ldiring!");
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('signupForm');

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (name && email && password) {
                window.location.href = "motivation.html"; 
            } else {
                alert("Iltimos, barcha maydonlarni to'ldiring!");
            }
        });
    }
});
