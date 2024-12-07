const flagImages = [
    "afghanistan.png",
    "angola.png",
    "abkhazia.png",
    "albania.png",
    "algeria.png",
    "andorra.png",
    "antigua-and-barbuda.png",
    "argentina.png",
    "armenia.png",
    "australia.png",
    "azerbaijan.png", 
    "germany (1).png",
    "bahamas.png",
    "bahrain.png",
    "barbados.png",
    "belgium.png",
    "benin.png",
    "bhutan.png",
    "bosnia-and-herzegovina.png",
    "botswana.png",
    "brunei.png",
    "burkina-faso.png",
    "cambodia.png",
    "cameroon.png",
    "canada.png",
    "chad.png",
    "chile.png",
    "china.png",
    "colombia.png",
    "comoros.png",
    "cook-islands.png",
    "costa-rica.png",
    "croatia.png",
    "cuba.png",
    "czech-republic.png",
    "democratic-republic-of-congo.png",
    "denmark.png",
    "djibouti.png",
    "dominica.png",
    "dominican-republic.png",
    "east-timor.png",
    "ecuador.png",
    "egypt.png",
    "el-salvador.png",
    "equatorial-guinea.png",
    "eritrea.png",
    "estonia.png",
    "ethiopia.png",
    "fiji.png",
    "finland.png",
    "france.png",
    "gabon.png",
    "gambia.png",
    "georgia.png",
    "ghana.png",
    "greece.png",
    "grenada.png",
    "guatemala.png",
    "guinea.png",
    "guinea-bissau.png",
    "guyana.png",
    "haiti.png",
    "honduras.png",
    "hungary.png",
    "iceland.png",
    "india.png",
    "indonesia.png",
    "iran.png",
    "iraq.png",
    "ireland.png",
    "israel.png",
    "italy.png",
    "ivory-coast.png",
    "jamaica.png",
    "japan.png",
    "jordan.png",
    "kazakhstan.png",
    "kenya.png",
    "kiribati.png",
    "kosovo.png",
    "kuwait.png",
    "kyrgyzstan.png",
    "latvia.png",
    "lebanon.png",
    "lesotho.png",
    "liberia.png",
    "libya.png",
    "liechtenstein.png",
    "lithuania.png",
    "location.png",
    "luxembourg.png",
    "madagascar.png",
    "malawi.png",
    "malaysia.png",
    "mali.png",
    "malta.png",
    "marshall-island.png",
    "mauritania.png",
    "mauritius.png",
    "mexico.png",
    "micronesia.png",
    "moldova.png",
    "monaco.png",
    "mongolia.png",
    "morocco.png",
    "mozambique.png",
    "myanmar.png",
    "namibia.png",
    "nauru.png",
    "nepal.png",
    "netherlands.png",
    "new-zealand.png",
    "nicaragua.png",
    "niger.png",
    "nigeria.png",
    "niue.png",
    "cyprus.png",
    "north-korea.png",
    "north-macedonia.png",
    "norway.png",
    "oman.png",
    "pakistan.png",
    "palau.png",
    "palestine.png",
    "panama.png",
    "papua-new-guinea.png",
    "paraguay.png",
    "peru.png",
    "poland.png",
    "philippines.png",
    "portugal.png",
    "qatar.png",
    "republic-of-the-congo.png",
    "russia.png",
    "rwanda.png",
    "sahrawi-arab-democratic-republic.png",
    "saint-kitts-and-nevis.png",
    "saint-lucia.png",
    "saint-vincent-and-the-grenadines.png",
    "samoa.png",
    "san-marino.png",
    "saudi-arabia.png",
    "senegal.png",
    "serbia.png",
    "seychelles.png",
    "sierra-leone.png",
    "singapore.png",
    "slovenia.png",
    "solomon-islands.png",
    "somalia.png",
    "somaliland.png",
    "south-africa.png",
    "south-korea.png",
    "south-sudan.png",
    "spain.png",
    "square.png",
    "sri-lanka.png",
    "sudan.png",
    "suriname.png",
    "swaziland.png",
    "sweden.png",
    "switzerland.png",
    "syria.png",
    "tajikistan.png",
    "tanzania.png",
    "thailand.png",
    "togo.png",
    "tonga.png",
    "transnistria.png",
    "trinidad-and-tobago.png",
    "tunisia.png",
    "türkiye.png",
    "turkmenistan.png",
    "tuvalu.png",
    "uganda.png",
    "ukraine.png",
    "united-arab-emirates.png",
    "united-kingdom.png",
    "united-states.png",
    "uruguay.png",
    "uzbekistan.png",
    "vanuatu.png",
    "vatican-city.png",
    "venezuela.png",
    "vietnam.png",
    "yemen.png",
    "zambia.png",
    "zimbabwe.png"
]; // Bayrak görselleri buraya eklenmeli

let score = 100; // Başlangıç puanı
const scoreDisplay = document.getElementById('score'); // Puanı gösterecek HTML elementi

// Geri sayım
let timeLeft = 60; // Başlangıç süresi (60 saniye)
const timerDisplay = document.getElementById('timer'); // Geri sayım div'i

// Geri sayım işlevi
let countdownTimer = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
    } else {
        clearInterval(countdownTimer); // Zaman dolduğunda geri sayımı durdur
        showFeedbackMessage("Süreniz bitti!"); // Uyarı mesajını göster
        document.getElementById("newGameButton").style.display = "block"; // Yeni oyun butonunu göster
    }
}, 1000); // Her saniye geri sayımı güncelle

// Puan güncelleme işlevi
function updateScore(isCorrect) {
    if (isCorrect) {
        score = Math.min(score + 10, 100); // Doğru tahmin, 10 puan ekle (100'ü geçemez)
        showFeedbackMessage("Doğru! Skor arttı.");
    } else {
        score = Math.max(score - 10, 0); // Yanlış tahmin, 10 puan düşür (0'ın altına inemez)
        showFeedbackMessage("Yanlış! Skor düştü.");
    }
    scoreDisplay.textContent = score; // Puanı güncelle

    // Skor 0 ise "New Game" butonunu göster
    if (score === 0) {
        document.getElementById("newGameButton").style.display = "block";
    } else {
        document.getElementById("newGameButton").style.display = "none"; // Skor 0 değilse gizle
    }

    loadRandomFlag(); // Her tahminde yeni bir bayrak yükle
}

// Rastgele bir bayrak yükleme işlevi
function loadRandomFlag() {
    const randomIndex = Math.floor(Math.random() * flagImages.length);
    const flagContainer = document.getElementById("flagContainer");

    // Var olan bayrağı kaldır
    flagContainer.innerHTML = '';

    // Yeni bayrağı yükle
    const flagElement = document.createElement("img");
    flagElement.src = `images/${flagImages[randomIndex]}`; // Bayrak dosya yolunu ayarlayın
    flagElement.classList.add("draggable");
    flagElement.alt = "Country Flag";
    flagElement.id = `flag-${flagImages[randomIndex].split(".")[0]}`; // Bayrak ID'sini ayarla

    flagContainer.appendChild(flagElement);

    // Taşınabilir bayrak için olay işleyici ekle
    flagElement.addEventListener("dragstart", dragStart);
}

// Bayrak sürükleme başladığında çağrılır
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id); // Bayrak ID'sini veri olarak ayarla
}

// Ülke şekilleri üzerine bırakma işlevi
document.querySelectorAll('.allPaths').forEach(country => {
    country.addEventListener('dragover', (e) => {
        e.preventDefault(); // Varsayılan davranışı engelle
    });

    country.addEventListener('drop', (e) => {
        e.preventDefault();
        const flagId = e.dataTransfer.getData('text/plain');
        const flag = document.getElementById(flagId);

        // ID'leri karşılaştırarak doğru eşleştirmeyi kontrol etme
        const countryId = country.id.toLowerCase(); // Ülke ID'sini küçük harf yap
        const flagCountry = flagId.split('-')[1].toLowerCase(); // 'flag-afganistan' için 'afganistan' alır

        const isCorrect = countryId === flagCountry; // Doğru eşleştirme kontrolü
        updateScore(isCorrect); // Puanı güncelle
    });
});

// İlk bayrağı rastgele seçin ve başlatın
document.addEventListener("DOMContentLoaded", () => {
    loadRandomFlag(); // Oyun başlatıldığında rastgele bayrak yükle
    scoreDisplay.textContent = score; // Skoru başlangıçta göster
});

// Kullanıcıya geri bildirim veren mesaj
function showFeedbackMessage(message) {
    const feedback = document.getElementById("feedbackMessage");
    feedback.innerText = message;
    feedback.style.display = "block";
    setTimeout(() => {
        feedback.style.display = "none";
    }, 2000);
}

// Yeni Oyun Butonuna Tıklama Olayı
document.getElementById("newGameButton").addEventListener("click", function() {
    score = 100; // Skoru sıfırla
    scoreDisplay.textContent = score; // Skoru güncelle
    loadRandomFlag(); // Yeni bir bayrak yükle
    this.style.display = "none"; // Butonu gizle

    // Geri sayımı sıfırla ve başlat
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;
    clearInterval(countdownTimer); // Önceki geri sayımı durdur
    countdownTimer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = timeLeft;
        } else {
            clearInterval(countdownTimer); // Zaman dolduğunda geri sayımı durdur
            showFeedbackMessage("Süreniz bitti!"); // Uyarı mesajını göster
            document.getElementById("newGameButton").style.display = "block"; // Yeni oyun butonunu göster
        }
    }, 1000); // Her saniye geri sayımı güncelle
});
