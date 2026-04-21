const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');

// عند الضغط على الزر
hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active'); // إذا كان فيه active ينحيها، وإذا مكانش يزيدها
});

// اختياري: غلق القائمة عند الضغط في أي مكان خارجها
document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});