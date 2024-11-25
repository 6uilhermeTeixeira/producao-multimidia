// Script do Menu // Script do Menu // Script do Menu // Script do Menu // Script do Menu 
// Seleciona todos os links do menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Adiciona um evento de clique a cada link
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'active' de todos os links
        menuLinks.forEach(item => item.classList.remove('active'));
        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');
    });
});
// Script do Menu // Script do Menu // Script do Menu // Script do Menu // Script do Menu 

// Script dos Music Players // Script dos Music Players // Script dos Music Players 
// Define a primeira lista de musicas que deve ser reproduzida
let track_list1 = [
    {
      name: "Aleluia",
      artist: "L Lima",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Aleluia - L Lima.wav"
    },
    {
      name: "Dia Tranquilo",
      artist: "Viih Rodrigues",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Dia Tranquilo - Viih Rodrigues.wav"
    },
    {
      name: "Entre Becos e Vielas",
      artist: "Viih Rodrigues",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Entre Becos e Vielas - Viih Rodrigues.wav",
    },
    {
      name: "Fica",
      artist: "Keren, Guh, Jade Chris",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Fica - Keren, Guh, Jade Chris.wav",
    },
    {
      name: "Gang do Assalto",
      artist: "Dioin FG",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Gang do Assalto - Dioin FG.wav",
    },
    {
      name: "Não se Justifica",
      artist: "Jeff",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Não se Justifica - Jeff.wav",
    },
    {
      name: "Nua",
      artist: "Keren Chris Feat Fael Andrade",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Nua - Keren Chris Feat Fael Andrade.wav",
    },
    {
      name: "Omlad",
      artist: "La Cintura",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Omlad - La Cintura.wav",
    },
    {
      name: "Rebola pra mim",
      artist: "Gringa Cara Feat Keren Chris",
      image: "../imgs/cover1.png",
      path: "../musicas/guias/Rebola pra mim - Gringa Cara Feat Keren Chris.wav",
    },
  ];
  
  // Define a segunda lista de musicas que deve ser reproduzida
  let track_list2 = [
    {
      name: "Chicano - Latin Trap Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Chicano - Latin Trap Beat.wav"
    },
    {
      name: "Double Blunt - Plug Trap Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Double Blunt - Plug Trap Beat.wav"
    },
    {
      name: "Criminal - Trap Funk Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Criminal - Trap Funk Beat.wav"
    },
    {
      name: "Playboy - Vibes Trap Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Playboy - Vibes Trap Beat.wav"
    },
    {
      name: "9 mm - Hard Trap Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/9 mm - Hard Trap Beat.wav"
    },
    {
      name: "Chefe - Funk Consciente Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Chefe - Funk Consciente Beat.wav"
    },
    {
      name: "Di Quebra - Funk Consciente Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Di Quebra - Funk Consciente Beat.wav"
    },
    {
      name: "Momentos - Funk Consciente Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Momentos - Funk Consciente Beat.wav"
    },
    {
      name: "Double G - G Funk Boom Bap Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Double G - G Funk Boom Bap Beat.wav"
    },
    {
      name: "Goofy - Underground Boom Bap Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Goofy - Underground Boom Bap Beat.wav"
    },
    {
      name: "Smoke - Jazz Boom Bap Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Smoke - Jazz Boom Bap Beat.wav"
    },
    {
      name: "California - Jersey Club Grimme Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/California - Jersey Club Grimme Beat.wav"
    },
    {
      name: "Legacy - Drill Grimme Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Legacy - Drill Grimme Beat.wav"
    },
    {
      name: "Arriba - Afrobeat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Arriba - Afrobeat.wav"
    },
    {
      name: "Mamacita - Raggaeton Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Mamacita - Raggaeton Beat.wav"
    },
    {
      name: "Morning Sun -  RnB Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Morning Sun -  RnB Beat.wav"
    },
    {
      name: "Pecado - RnB Beat",
      artist: "Prod. G3X",
      image: "../imgs/cover2.png",
      path: "../musicas/beats/Pecado - RnB Beat.wav"
    },
  ];
  
  // Função para inicializar um player
  function initPlayer(playerId, trackList) {
    let now_playing = document.querySelector(`#${playerId} .now-playing`);
    let track_art = document.querySelector(`#${playerId} .track-art`);
    let track_name = document.querySelector(`#${playerId} .track-name`);
    let track_artist = document.querySelector(`#${playerId} .track-artist`);
  
    let playpause_btn = document.querySelector(`#${playerId} .playpause-track`);
    let next_btn = document.querySelector(`#${playerId} .next-track`);
    let prev_btn = document.querySelector(`#${playerId} .prev-track`);
  
    let seek_slider = document.querySelector(`#${playerId} .seek_slider`);
    let volume_slider = document.querySelector(`#${playerId} .volume_slider`);
    let curr_time = document.querySelector(`#${playerId} .current-time`);
    let total_duration = document.querySelector(`#${playerId} .total-duration`);
  
    let track_index = 0;
    let isPlaying = false;
    let updateTimer;
  
    // Criar um nome elemento de audio
    let curr_track = new Audio();
  
    function loadTrack(track_index) {
      clearInterval(updateTimer);
      resetValues();
      curr_track.src = trackList[track_index].path;
      curr_track.load();
  
      track_art.style.backgroundImage = "url(" + trackList[track_index].image + ")";
      track_name.textContent = trackList[track_index].name;
      track_artist.textContent = trackList[track_index].artist;
      now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + trackList.length;
  
      updateTimer = setInterval(seekUpdate, 1000);
      curr_track.addEventListener("ended", nextTrack);
    }
  
    function resetValues() {
      curr_time.textContent = "00:00";
      total_duration.textContent = "00:00";
      seek_slider.value = 0;
    }
  
    loadTrack(track_index);
  
    function playpauseTrack() {
      if (!isPlaying) playTrack();
      else pauseTrack();
    }
  
    function playTrack() {
      curr_track.play();
      isPlaying = true;
      playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }
  
    function pauseTrack() {
      curr_track.pause();
      isPlaying = false;
      playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    }
  
    function nextTrack() {
      if (track_index < trackList.length - 1)
        track_index += 1;
      else track_index = 0;
      loadTrack(track_index);
      playTrack();
    }
  
    function prevTrack() {
      if (track_index > 0)
        track_index -= 1;
      else track_index = trackList.length - 1;
      loadTrack(track_index);
      playTrack();
    }
  
    function seekTo() {
      let seekto = curr_track.duration * (seek_slider.value / 100);
      curr_track.currentTime = seekto;
    }
  
    function setVolume() {
      curr_track.volume = volume_slider.value / 100;
    }
  
    function seekUpdate() {
      let seekPosition = 0;
  
      if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
  
        seek_slider.value = seekPosition;
  
        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
  
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
  
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
      }
    }
  
    // Expor as funções para serem acessíveis no HTML
    window[`${playerId}_loadTrack`] = loadTrack;
    window[`${playerId}_resetValues`] = resetValues;
    window[`${playerId}_playpauseTrack`] = playpauseTrack;
    window[`${playerId}_playTrack`] = playTrack;
    window[`${playerId}_pauseTrack`] = pauseTrack;
    window[`${playerId}_nextTrack`] = nextTrack;
    window[`${playerId}_prevTrack`] = prevTrack;
    window[`${playerId}_seekTo`] = seekTo;
    window[`${playerId}_setVolume`] = setVolume;
    window[`${playerId}_seekUpdate`] = seekUpdate;
  
    // Iniciar o player
    loadTrack(track_index);
  }
  
  // Inicializar os dois players com suas respectivas listas de faixas
  initPlayer('player1', track_list1);
  initPlayer('player2', track_list2);
// Script dos Music Players // Script dos Music Players // Script dos Music Players 

// Script dos Carouseis de Imagens // Script dos Carouseis de Imagens // Script dos Carouseis de Imagens 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
// Script dos Carouseis de Imagens // Script dos Carouseis de Imagens // Script dos Carouseis de Imagens 