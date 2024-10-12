const scrollContainer = document.getElementById('scrollContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Scroll to the left by 200 pixels
    prevBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    // Scroll to the right by 200 pixels
    nextBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });