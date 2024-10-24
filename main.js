window.onload = function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // إذا كان هناك عنصر مطابق للـ href، قم بالتمرير إليه
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

let isDark = false; // حالة الثيم الافتراضية (الفاتح)

function toggleTheme() {
    if (isDark) {
        // إذا كان الثيم داكن، بدّله إلى الفاتح
        document.getElementById('themeIcon').classList.remove('fa-moon');
        document.getElementById('themeIcon').classList.add('fa-sun');
        changeTheme('dark'); // استدعاء وظيفة لتغيير الثيم
    } else {
        // إذا كان الثيم فاتح، بدّله إلى الداكن
        document.getElementById('themeIcon').classList.remove('fa-sun');
        document.getElementById('themeIcon').classList.add('fa-moon');
        changeTheme('light'); // استدعاء وظيفة لتغيير الثيم
    }
    isDark = !isDark; // تغيير الحالة
}



function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const links = navLinks.querySelectorAll('li');
    
    if (navLinks.style.display === 'flex') {
        // إغلاق القائمة
        navLinks.style.display = 'none';
        
        // إخفاء العناصر بتأثير متتابع
        links.forEach((link, index) => {
            setTimeout(() => {
                link.classList.remove('show');  // إزالة الفئة لبدء الاختفاء
            }, index * 200); // تأخير 200ms لكل عنصر
        });
    } else {
        // فتح القائمة
        navLinks.style.display = 'flex';

        // ظهور العناصر بشكل متتابع
        links.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add('show');
            }, index * 200); // تأخير 200ms لكل عنصر
        });
    }
}


 window.onload = function() {
    var messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';

    // إخفاء الرسالة بعد 3 ثوانٍ
    setTimeout(function() {
        messageDiv.style.opacity = '0'; // بدء التلاشي
        setTimeout(function() {
            messageDiv.style.display = 'none'; // إخفاء العنصر بعد التلاشي
        }, 450); // الانتظار حتى ينتهي تأثير التلاشي
    }, 3000);
};

let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert('تم إضافة المنتج إلى السلة!');
}
function checkVisibility() {
    const products = document.querySelectorAll('.product');
    const windowHeight = window.innerHeight;

    products.forEach(product => {
        const rect = product.getBoundingClientRect();
        if (rect.top <= windowHeight - 100) {
            product.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // لتحميل العناصر عند البداية
function sendMessage(event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة
    alert('تم إرسال رسالتك! شكراً لتواصلك معنا.');
    document.getElementById('contact-form').reset(); // إعادة تعيين النموذج
}
// function searchProducts() {
//     const query = document.getElementById('search').value.toLowerCase();
//     const products = document.querySelectorAll('.product');

//     products.forEach(product => {
//         const title = product.querySelector('h3').innerText.toLowerCase();
//         product.style.display = title.includes(query) ? 'block' : 'none';
//     });
// }

// function searchProducts() {
//     const input = document.getElementById('search');
//     const filter = input.value.toLowerCase();
//     const products = document.querySelectorAll('.product');

//     console.log("بحث عن:", filter); // عرض النص المدخل

//     products.forEach(product => {
//         const title = product.querySelector('h2').textContent.toLowerCase();
//         console.log("عنوان المنتج:", title); // عرض عنوان كل منتج
        
//         if (title.includes(filter)) {
//             product.style.display = ''; // إظهار المنتج
//             console.log("إظهار المنتج:", title);
//         } else {
//             product.style.display = 'none'; // إخفاء المنتج
//             console.log("إخفاء المنتج:", title);
//         }
//     });
// }


function loginUser(event) {
    event.preventDefault();
    // منطق تسجيل الدخول
}


//ده بيخلي الشاشه سوده بس العناصر زي ما هي

    // عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }
});

function changeTheme(theme) {
    if (theme === 'light') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.backgroundColor = '#ffffff';
            section.style.color = '#000000';
        });
    } else if (theme === 'dark') {
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.backgroundColor = '#333333';
            section.style.color = '#ffffff';
        });
    }
    // حفظ الثيم في localStorage
    localStorage.setItem('theme', theme);
}


const images = document.querySelectorAll('img[data-src]');
const config = {
    rootMargin: '0px 0px',
    threshold: 0.1
};

let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            observer.unobserve(img);
        }
    });
}, config);

images.forEach(image => {
    observer.observe(image);
});
// window.onscroll = function() {
//     var backToTopButton = document.getElementById("back-to-top");
//     var scrollHeight = document.documentElement.scrollHeight;
//     var scrollPosition = window.innerHeight + window.scrollY;
    
//     // إذا كان المستخدم وصل إلى نهاية الصفحة أو بالقرب منها، تظهر الأيقونة
//     if (scrollHeight - scrollPosition < 10) {
//         backToTopButton.style.display = "block";
//     } else {
//         backToTopButton.style.display = "none";
//     }
// };





