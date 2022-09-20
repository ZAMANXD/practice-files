//step-1: add event handler in the submit button
document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2 get the email address inside the email input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step-3: get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step-4: verify email and password
    if (email === 'sontan@baaperbank.com' && password === 'baapkabeta') {
        window.location.href = 'bank.html';
    } else if (email !== 'sontan@baaperbank.com' && password === 'baapkabeta') {
        alert('তুই Email ভুলে গেছস!! তোকে আমি ব্যাংক এ ঢুকতে দিব না!!');
    } else if (email === 'sontan@baaperbank.com' && password !== 'baapkabeta') {
        alert('তুই Passeword ভুলে গেছস!! তোকে আমি ব্যাংক এ ঢুকতে দিব না!!');
    } else (
        alert('তুই Email, Password দুইটাই ভুলে গেছস!! তোকে আমি ত্যাজ্যপুত্র ঘোষণা করলাম। বের হয়ে যাহ আমার ব্যাংক থেকে!! এই মুখ আর কোনোদিন দেখাবি না!!! ')
    )
})