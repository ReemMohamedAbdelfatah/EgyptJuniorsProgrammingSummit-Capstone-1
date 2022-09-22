const hamburgerIcon = document.querySelector('.hamburger-icon');
const modalWindowOverlay = document.getElementById('modal-overlay');
const ListLinks = document.querySelectorAll('.hamburger-menu-link');
const body = document.querySelector('body');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('active');
  modalWindowOverlay.classList.toggle('overlay-active');
  if (modalWindowOverlay.classList.contains('overlay-active')) {
    modalWindowOverlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  } else {
    modalWindowOverlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
});

ListLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    modalWindowOverlay.classList.toggle('overlay-active');
    if (modalWindowOverlay.classList.contains('overlay-active')) {
      modalWindowOverlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    } else {
      modalWindowOverlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    }
    body.classList.toggle('overflow');
  });
});

const speakerCardsItems = [
  {
    speaker_image: 'assets/images/speaker_yousef.jpg',
    speaker_name: 'Eng. Ebrahim Youssef',
    speaker_bio: 'Managing-Director MBA, Strategic management',
  },
  {
    speaker_image: 'assets/images/speaker_Gawish.jpg',
    speaker_name: 'Eng. Muhammed Gawish',
    speaker_bio: 'Business Developer Pro degree, Kelley business school',
  },
  {
    speaker_image: 'assets/images/speaker_abdelmonem.jpg',
    speaker_name: 'Eng. Mostafa Abdelmonem',
    speaker_bio: 'Accounting Manager, Financial Analyst',
  },
  {
    speaker_image: 'assets/images/speaker_nabil.jpg',
    speaker_name: 'Eng. Mohamed Nabil',
    speaker_bio: 'Operation Head Process, Technical Consultant',
  },
  {
    speaker_image: 'assets/images/speaker_ahmed.jpeg',
    speaker_name: 'Eng. Ahmed Abdelfatah',
    speaker_bio: 'Android developer',
  },
  {
    speaker_image: 'assets/images/speaker_abdelfatah.jpeg',
    speaker_name: 'Eng. Abdelfatah Mohamed',
    speaker_bio: 'Mechatronics Engineer',
  },
];

speakerCardsItems.forEach((Element, index) => {
  const speakerCard = document.querySelector('.featured_speakers_main_div');
  const cardSection = document.createElement('div');
  cardSection.classList = 'cardSection';
  const speakerCardHTML = `

  <div class="speaker_div">
    <div class="speaker_image_container">
      <img class="speaker_image" src="${speakerCardsItems[index].speaker_image}" alt="">
    </div>
    <div class="speaker_text_container">
      <h3 class="speaker_name"> ${speakerCardsItems[index].speaker_name}</h3>
      <div class="divider_line"></div>
      <p class="speaker_education_bio">
      ${speakerCardsItems[index].speaker_bio}
      </p>
    </div>
  </div>
  
`;

  cardSection.innerHTML += speakerCardHTML;
  speakerCard.appendChild(cardSection);
});
