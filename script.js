function submitName() {
    const name = document.getElementById('name-input').value;
    if (name) {
      // Ganti halaman ke ucapan
      document.getElementById('input-container').style.display = 'none';
      document.getElementById('message-container').style.display = 'block';
      document.getElementById('birthday-message').innerHTML = 
        `Untuk ${name}, <br>
       "Selamat bertambah usia yaa, adek! Terus jadi dirimu yang luar biasa dan semoga kebahagiaan selalu menyertaimu di setiap langkah,
        kk yakin adek bakal terus berkembang jadi versi terbaik dari diri adek. Apapun yang adek lakuin, 
        kk selalu dukung dari jauh serta mendoa'kan yang terbaik, semoga semua impian adek tercapai.".<br>
        sehat selalu yaa, i loved u.`;
    } else {
      alert("Tolong masukkan nama mantanmu 😢");
    }
  }
  
  function showMessage() {
    alert("Cuma dikit kok... cuma segunung 😢");
  }
  
  // Bikin animasi hati jatuh
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  
  setInterval(createHeart, 300);
  