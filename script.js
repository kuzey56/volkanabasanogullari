// VOLKANABASANOGULLARI Havayolu Web Sitesi JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll efekti
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(26, 35, 126, 0.95) 0%, rgba(40, 53, 147, 0.95) 100%)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #1a237e 0%, #283593 100%)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Aktif menü öğesi takibi
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Aktif menü stili için CSS ekleyelim
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: #ffd700 !important;
            font-weight: 600;
            position: relative;
        }
        
        .nav-links a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: #ffd700;
            border-radius: 2px;
        }
    `;
    document.head.appendChild(style);

    // İçerik kaydetme fonksiyonu
    window.saveContent = function(elementId) {
        const textarea = document.getElementById(elementId);
        const content = textarea.value;
        
        if (content.trim() === '') {
            alert('Lütfen içerik girin!');
            return;
        }
        
        // İçeriği kaydediyoruz
        localStorage.setItem(elementId, content);
        
        // Kaydet butonunu gizliyoruz
        const btn = textarea.nextElementSibling;
        btn.style.display = 'none';
        
        // Textarea'yı salt okunur yapıyoruz (düzenlenemez)
        textarea.readOnly = true;
        textarea.style.background = '#f5f5f5';
        textarea.style.cursor = 'default';
        
        console.log(`${elementId} kaydedildi ve kilitlendi:`, content);
    };

    // Sayfa yüklendiğinde kaydedilmiş içerikleri yükle
    const editableAreas = document.querySelectorAll('.editable-area');
    editableAreas.forEach(area => {
        const savedContent = localStorage.getItem(area.id);
        if (savedContent) {
            area.value = savedContent;
        }
    });

    // Filo kartlarına hover efekti
    const fleetCards = document.querySelectorAll('.fleet-card, .management-card');
    fleetCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('fleet-card') 
                ? 'translateY(-10px) scale(1.05)' 
                : 'translateY(-5px) scale(1.03)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Smooth scroll için nav linklerine click event'i
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sayfa yüklendiğinde hoş geldin mesajı
    console.log('VOLKANABASANOGULLARI Havayolu web sitesine hoş geldiniz! ✈️');
    
    // Havayolu bilgileri için örnek placeholder metinleri
    const defaultContents = {
        'airline-info': `VOLKANABASANOGULLARI Havayolu, 2024 yılında kurulan ve Türkiye'nin en genç havayolu şirketidir. Misyonumuz, yolcularımıza güvenli, konforlu ve unutulmaz bir uçuş deneyimi sunmaktır.

Kuruluş Amacı:
- Gökyüzünde yeni standartlar belirlemek
- Yolculara premium hizmet sunmak
- Türkiye'nin hava taşımacılığında lider olmak

Değerlerimiz:
✓ Güvenlik her şeyden önce gelir
✓ Müşteri memnuniyeti en önceliğimizdir
✓ İnovasyon ve teknolojiye yatırım yaparız
✓ Çevreye duyarlı operasyonlar yürütürüz`,
        
        'fleet-info': `MODERN UÇAK FİLOMUZ

1. Airbus A320neo
   Kısa / Orta mesafe
   Ekonomik ve konforlu yolculuklar için.

2. Airbus A321neo
   Kısa / Orta mesafe
   Yoğun yolcu trafiğine sahip rotalar için.

3. Boeing 737 MAX 8
   Orta mesafe
   Verimli ve modern uçuş deneyimi.

4. Airbus A350-900
   Uzun mesafe
   Modern ve geniş gövdeli yolcu uçağı.

5. Boeing 787-9 Dreamliner
   Uzun mesafe
   Kıtalar arası uçuşlar için.

6. Airbus A380-800
   Özel / Yüksek kapasite
   Çok yüksek yolcu kapasitesine sahip çift katlı uçak.

Filo Özellikleri:
✓ Tüm uçaklarımız son teknoloji ile donatılmıştır
✓ Yakıt tasarruflu motorlar
✓ Modern kabin içi eğlence sistemleri
✓ WiFi ve USB şarj portları
✓ Geniş bagaj hacmi`,
        
        'pilot-form': ``,
        
        'hostess-form': `HOSTES/KABİN MEMURU BAŞVURU FORMU

Gereklilikler:
- En az lise mezunu
- Boy: 160-180 cm
- Yaş: 18-30 arası
- Yüzme bilgisi
- İyi derecede İngilizce

İstenen Özellikler:
- Güler yüzlü ve iletişim becerisi yüksek
- Stres altında çalışabilme
- Takım çalışmasına yatkın
- Problem çözme yeteneği

Başvuru Belgeleri:
1. Özgeçmiş
2. Diploma fotokopisi
3. Nüfus cüzdanı fotokopisi
4. 2 adet vesikalık fotoğraf
5. Sağlık raporu`,
        
        'management-info': `YÖNETİM KADROMUZ

1. VOLKAN ABAŞAN - Genel Müdür
   - 20 yıllık havacılık deneyimi
   - Eski pilot ve operasyon yöneticisi
   - MBA derecesi

2. ALİ ABAŞAN - Operasyon Direktörü
   - 15 yıllık operasyon deneyimi
   - Lojistik ve filo yönetimi uzmanı
   - İşletme mezunu

3. AYŞE ABAŞAN - İnsan Kaynakları Direktörü
   - 12 yıllık İK deneyimi
   - Havacılık sektörü uzmanı
   - Psikoloji yüksek lisansı

4. MEHMET ABAŞAN - Finans Direktörü
   - 18 yıllık finans deneyimi
   - Sermaye piyasaları uzmanı
   - CFA sertifikalı`
    };
    
    // Örnek içerikleri textarea'lara yükle (sadece boşsa)
    for (const [id, content] of Object.entries(defaultContents)) {
        const element = document.getElementById(id);
        if (element && !localStorage.getItem(id) && element.value.trim() === '') {
            element.value = content;
        }
    }
});

// Havayolu şirketi sloganları
const slogans = [
    "Gökyüzünün Efendileri",
    "Uçuşta Mükemmellik",
    "Güvenle Uçun",
    "Premium Havacılık Deneyimi"
];

// Rastgele slogan gösterme fonksiyonu
function showRandomSlogan() {
    const randomIndex = Math.floor(Math.random() * slogans.length);
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.style.opacity = '0';
        setTimeout(() => {
            tagline.textContent = slogans[randomIndex];
            tagline.style.opacity = '1';
        }, 500);
    }
}

// Her 10 saniyede bir slogan değiştir
setInterval(showRandomSlogan, 10000);
    // Düzenleme fonksiyonu (opsiyonel)
    window.editContent = function(elementId) {
        const textarea = document.getElementById(elementId);
        const saveBtn = document.querySelector(`#${elementId} + .save-btn`);
        const editBtn = document.querySelector(`#${elementId} + .save-btn + .edit-btn`);
        
        // Textarea'yı tekrar düzenlenebilir yap
        textarea.readOnly = false;
        textarea.style.background = '';
        textarea.style.cursor = 'text';
        
        // Kaydet butonunu göster
        if (saveBtn) saveBtn.style.display = 'inline-block';
        
        // Düzenle butonunu gizle
        if (editBtn) editBtn.style.display = 'none';
        
        textarea.focus();
    };

    // Sayfa yüklendiğinde kaydedilmiş içerikleri kontrol et ve butonları güncelle
    window.addEventListener('load', function() {
        const editableAreas = document.querySelectorAll('.editable-area');
        editableAreas.forEach(area => {
            const savedContent = localStorage.getItem(area.id);
            if (savedContent && savedContent.trim() !== '') {
                area.value = savedContent;
                area.readOnly = true;
                area.style.background = '#f5f5f5';
                area.style.cursor = 'default';
                
                // Kaydet butonunu gizle
                const saveBtn = area.nextElementSibling;
                if (saveBtn && saveBtn.classList.contains('save-btn')) {
                    saveBtn.style.display = 'none';
                    
                    // Düzenle butonu ekle (opsiyonel)
                    const editBtn = document.createElement('button');
                    editBtn.className = 'edit-btn';
                    editBtn.textContent = 'Düzenle';
                    editBtn.onclick = function() { editContent(area.id); };
                    saveBtn.parentNode.insertBefore(editBtn, saveBtn.nextSibling);
                }
            }
        });
    });
// Simple smooth scroll for all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Simple smooth scroll implementation
    function smoothScroll(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetPosition = targetElement.offsetTop - 80;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
    
    // Add click event to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
    
    // Special handling for Keşfet button if needed
    const kesfetBtn = document.querySelector('a.btn[href="#hakkimizda"]');
    if (kesfetBtn) {
        kesfetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll('hakkimizda');
        });
    }
    
    console.log('Smooth scroll activated!');
});