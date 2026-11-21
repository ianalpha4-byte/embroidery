// ===== CONFIGURATION =====
const WHATSAPP_NUMBER = '254728066999';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// ===== PRODUCT DATA =====
const products = {
  curtains: {
    title: 'Curtains',
    folder: 'curtains',
    items: [
      { file: 'curtain (1).jpeg', name: 'Elegant Sheer Curtain', desc: 'Lightweight polyester, ivory white, 2.5m length' },
      { file: 'curtain (2).jpeg', name: 'Blackout Velvet Curtain', desc: 'Thick velvet fabric, deep burgundy, 2.7m length' },
      { file: 'curtain (3).jpeg', name: 'Patterned Jacquard Curtain', desc: 'Jacquard weave, gold & cream pattern, 2.5m length' },
      { file: 'curtain (4).jpeg', name: 'Linen Blend Curtain', desc: 'Natural linen blend, soft beige, 2.4m length' },
      { file: 'curtain (5).jpeg', name: 'Embroidered Curtain', desc: 'Cotton with embroidery, dusty rose, 2.5m length' },
      { file: 'curtain (6).jpeg', name: 'Thermal Insulated Curtain', desc: 'Triple-weave fabric, charcoal grey, 2.7m length' },
      { file: 'curtain (7).jpeg', name: 'Sheer Voile Panel', desc: 'Soft voile, pure white, 2.5m length' },
      { file: 'curtain (8).jpeg', name: 'Pleated Silk Curtain', desc: 'Silk blend, champagne gold, 2.8m length' },
      { file: 'curtain (9).jpeg', name: 'Tab Top Curtain', desc: 'Cotton tab top, sage green, 2.4m length' },
      { file: 'curtain (10).jpeg', name: 'Double Layer Curtain', desc: 'Sheer + blackout combo, navy & white, 2.6m length' }
    ]
  },
  'curtain-rods': {
    title: 'Curtain Rods',
    folder: 'rods',
    items: [
      { file: 'rod (3).jfif', name: 'Double Curtain Rod', desc: 'Dual rod system, matte black, adjustable to 3m' },
      { file: 'rod (5).jfif', name: 'Ceiling Mount Track', desc: 'Aluminum track, white finish, extends to 4m' },
      { file: 'rod (9).jpeg', name: 'Crystal End Rod', desc: 'Metal with crystal finials, silver, 2.5m length' },
    ]
  },
  pillows: {
    title: 'Pillows',
    folder: 'pillows',
    items: [
      { file: 'pillow (1).jpeg', name: 'Memory Foam Pillow', desc: 'Orthopedic memory foam, medium-firm support' },
      { file: 'pillow (2).jpeg', name: 'Velvet Throw Pillow', desc: 'Decorative velvet, emerald green, ultra-soft' },
      { file: 'pillow (3).jpeg', name: 'Cotton Standard Pillow', desc: '100% cotton cover, soft hollow-fibre fill' },
      { file: 'pillow (4).jpeg', name: 'Embroidered Accent Pillow', desc: 'Hand-stitched design, gold on cream, plush' },
      { file: 'pillow (5).jpeg', name: 'Down Alternative Pillow', desc: 'Hypoallergenic fill, medium softness, king size' },
      { file: 'pillow (6).jpeg', name: 'Lumbar Support Pillow', desc: 'Ergonomic shape, charcoal fabric, firm support' },
      { file: 'pillow (7).jpeg', name: 'Satin Pillow', desc: 'Smooth satin cover, blush pink, gentle on skin' },
      { file: 'pillow (8).jpeg', name: 'Floor Cushion', desc: 'Extra-large round, bohemian pattern, medium-soft' },
      { file: 'pillow (9).jpeg', name: 'Body Pillow', desc: 'Full-length support, microfibre, ultra-soft' },
      { file: 'pillow (10).jpeg', name: 'Outdoor Cushion', desc: 'Weather-resistant fabric, teal, firm comfort' }
    ]
  },
  carpets: {
    title: 'Carpets',
    folder: 'carpets',
    items: [
      { file: 'carpet (1).jfif', name: 'Persian Style Rug', desc: '5×7 ft, intricate pattern, dense wool texture' },
      { file: 'carpet (2).jfif', name: 'Shaggy Area Carpet', desc: '6×8 ft, cream white, deep fluffy pile' },
      { file: 'carpet (3).jfif', name: 'Geometric Modern Rug', desc: '5×7 ft, grey & gold pattern, flat weave' },
      { file: 'carpet (4).jfif', name: 'Sisal Natural Carpet', desc: '4×6 ft, natural sisal fibre, coarse texture' },
      { file: 'carpet (5).jfif', name: 'Round Jute Rug', desc: '5 ft diameter, braided jute, rustic texture' },
      { file: 'carpet (7).jfif', name: 'Plush Velvet Carpet', desc: '6×9 ft, royal blue, ultra-soft velvet pile' },
      { file: 'carpet (8).jfif', name: 'Anti-Slip Kitchen Mat', desc: '2×4 ft, waterproof backing, low profile' },
      { file: 'carpet (9).jpeg', name: 'Moroccan Trellis Rug', desc: '5×7 ft, ivory & grey trellis, medium pile' },
      { file: 'carpet (10).jpeg', name: 'Vintage Overdyed Carpet', desc: '6×8 ft, faded turquoise, soft wool blend' },
      { file: 'carpet (11).jpeg', name: 'Striped Cotton Rug', desc: '4×6 ft, multi-colour stripes, flat weave' }
    ]
  },
  duvets: {
    title: 'Duvets',
    folder: 'dovets',
    items: [
      { file: 'duvet (1).jfif', name: 'Luxury Microfibre Duvet', desc: 'All-season warmth, queen size, 10.5 tog' },
      { file: 'duvet (2).jfif', name: 'Cotton Sateen Duvet Set', desc: 'Silky-smooth finish, king size, extra warm' },
      { file: 'duvet (3).jpeg', name: 'Printed Floral Duvet', desc: 'Rose garden print, queen size, medium warmth' },
      { file: 'duvet (11).jfif', name: 'Embossed Velvet Duvet', desc: 'Textured velvet cover, deep plum, king size' }
    ]
  },
  bedsheets: {
    title: 'Bedsheets',
    folder: 'bedsheets',
    items: [
      { file: 'sheets (1).jfif', name: 'Egyptian Cotton Sheet Set', desc: '400 thread count, pure white, king size' },
      
     
      { file: 'sheets (4).jfif', name: 'Polycotton Flat Sheet', desc: 'Easy-care blend, sky blue, double size' },
     
      { file: 'sheets (6).jfif', name: 'Bamboo Fibre Sheet', desc: 'Eco-friendly bamboo, sage green, queen size' },
      { file: 'sheets (7).jfif', name: 'Fitted Sheet with Elastic', desc: 'Deep pocket design, crisp white, king size' },
      { file: 'sheets (8).jfif', name: 'Printed Floral Sheet Set', desc: 'Botanical print, pink & green, double size' },
  
      { file: 'sheets (10).jfif', name: 'Linen Blend Sheet', desc: 'French linen look, natural oatmeal, queen size' }
    ]
  },
  loosecovers: {
    title: 'Loose Covers',
    folder: 'loosecovers',
    items: [
      { file: 'loosecove (1).jfif', name: 'Stretch Sofa Slipcover', desc: '3-seater fit, spandex blend, charcoal grey' },
      { file: 'loosecove (2).jfif', name: 'L-Shape Sectional Cover', desc: 'L-shaped sofa fit, polyester, cream white' },
      { file: 'loosecove (3).jfif', name: 'Quilted Sofa Protector', desc: '2-seater quilted, waterproof, chocolate brown' },
      { file: 'loosecove (4).jfif', name: 'Velvet Couch Cover', desc: '3-seater velvet, plush emerald, elastic fit' },
      { file: 'loosecove (5).jpeg', name: 'Recliner Chair Cover', desc: 'Single recliner fit, stretch fabric, beige' },
      { file: 'loosecove (6).jfif', name: 'Armchair Slipcover', desc: 'Wingback chair fit, linen look, light grey' },
      { file: 'loosecove (7).jfif', name: 'Loveseat Cover', desc: '2-seater stretch, floral jacquard, dusty pink' },
      { file: 'loosecove (8).jfif', name: 'Futon Sofa Cover', desc: 'Futon bed cover, reversible, navy/grey' },
      { file: 'loosecove (9).jfif', name: 'Ottoman Cover', desc: 'Square ottoman fit, knitted fabric, ivory' },
      { file: 'loosecove (10).jfif', name: 'Pet-Proof Sofa Cover', desc: '3-seater, waterproof, anti-scratch, dark grey' }
    ]
  }
};

// Category icons removed — using clean design without emoji
const categoryIcons = {
  curtains: '',
  'curtain-rods': '',
  pillows: '',
  carpets: '',
  duvets: '',
  bedsheets: '',
  loosecovers: ''
};

// ===== DOM ELEMENTS =====
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const categoriesGrid = document.getElementById('categories-grid');
const galleriesContainer = document.getElementById('galleries-container');
const productDropdown = document.getElementById('product-dropdown');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxOrderBtn = document.getElementById('lightbox-order-btn');

// ===== STATE =====
let currentGallery = null;
let currentImageIndex = 0;
let currentGalleryImages = [];

// ===== HEADER SCROLL EFFECT =====
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleScroll);

// ===== MOBILE MENU (NEW BULLETPROOF SYSTEM) =====
function closeMobileMenu() {
  hamburger.classList.remove('active');
  nav.classList.remove('open');
}

function toggleMobileMenu() {
  nav.classList.toggle('open');
  hamburger.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMobileMenu);

// CSS scroll-behavior: smooth handles the native anchor linking.
// We merely need to close the dropdown menu when an item is tapped.
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', function() {
    closeMobileMenu();
  });
});



// ===== RENDER CATEGORY CARDS =====
function renderCategories() {
  const delayClasses = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4', 'reveal-delay-5', 'reveal-delay-6', 'reveal-delay-7'];
  let idx = 0;

  for (const [key, product] of Object.entries(products)) {
    const card = document.createElement('div');
    card.className = `category-card reveal ${delayClasses[idx % delayClasses.length]}`;
    card.setAttribute('data-category', key);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${product.title} gallery`);

    const firstItem = product.items[0];
    const imgSrc = `${product.folder}/${firstItem.file}`;

    card.innerHTML = `
      <div class="category-card__image">
        <img src="${imgSrc}" alt="${product.title} collection at Ann's Interior Decors" loading="lazy">
      </div>
      <div class="category-card__body">
        <h3 class="category-card__title">${product.title}</h3>
        <p class="category-card__count">${product.items.length} products</p>
      </div>
      <span class="category-card__arrow">→</span>
    `;

    card.addEventListener('click', () => openGallery(key));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') openGallery(key);
    });

    categoriesGrid.appendChild(card);
    idx++;
  }
}

// ===== RENDER GALLERIES =====
function renderGalleries() {
  for (const [key, product] of Object.entries(products)) {
    const section = document.createElement('div');
    section.className = 'gallery-section';
    section.id = `gallery-${key}`;

    let itemsHTML = '';
    product.items.forEach((item, index) => {
      const imgSrc = `${product.folder}/${item.file}`;
      const waMsg = encodeURIComponent(
        `Hello, I'm interested in this product from Ann's Interior Decors.\nProduct: ${product.title}\nImage: ${item.file}`
      );

      itemsHTML += `
        <div class="gallery-item reveal">
          <div class="gallery-item__image-wrap" data-category="${key}" data-index="${index}">
            <img src="${imgSrc}" alt="${item.name} - ${item.desc}" loading="lazy">
          </div>
          <div class="gallery-item__body">
            <h4 class="gallery-item__name">${item.name}</h4>
            <p class="gallery-item__desc">${item.desc}</p>
            <div class="gallery-item__actions">
              <a href="${WHATSAPP_BASE_URL}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp" aria-label="Order ${item.name} on WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      `;
    });

    section.innerHTML = `
      <div class="gallery-header">
        <h3 class="gallery-header__title">${product.title} Collection</h3>
        <button class="gallery-header__back" onclick="closeGallery()" aria-label="Back to categories">← Back to Categories</button>
      </div>
      <div class="gallery-grid">
        ${itemsHTML}
      </div>
    `;

    galleriesContainer.appendChild(section);
  }

  // Add click events for lightbox
  document.querySelectorAll('.gallery-item__image-wrap').forEach(wrap => {
    wrap.addEventListener('click', () => {
      const category = wrap.dataset.category;
      const index = parseInt(wrap.dataset.index);
      openLightbox(category, index);
    });
  });
}

// ===== GALLERY OPEN/CLOSE =====
function openGallery(category) {
  currentGallery = category;

  // Hide categories grid
  categoriesGrid.style.display = 'none';
  document.querySelector('.product-selector').style.display = 'none';

  // Hide all galleries, show selected
  document.querySelectorAll('.gallery-section').forEach(s => s.classList.remove('active'));
  const gallery = document.getElementById(`gallery-${category}`);
  if (gallery) {
    gallery.classList.add('active');
    // Re-trigger reveal animations
    gallery.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), 50);
    });
  }

  // Update dropdown
  productDropdown.value = category;

  // Scroll to products section
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function closeGallery() {
  currentGallery = null;
  categoriesGrid.style.display = 'grid';
  document.querySelector('.product-selector').style.display = 'flex';
  document.querySelectorAll('.gallery-section').forEach(s => s.classList.remove('active'));
  productDropdown.value = '';

  // Re-trigger category card animations
  categoriesGrid.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    setTimeout(() => el.classList.add('visible'), 50);
  });

  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ===== DROPDOWN HANDLER =====
productDropdown.addEventListener('change', (e) => {
  const val = e.target.value;
  if (val) {
    openGallery(val);
  } else {
    closeGallery();
  }
});

// ===== LIGHTBOX =====
function openLightbox(category, index) {
  currentGalleryImages = products[category].items.map(item => ({
    src: `${products[category].folder}/${item.file}`,
    name: item.name,
    desc: item.desc,
    file: item.file,
    categoryTitle: products[category].title
  }));
  currentImageIndex = index;
  updateLightbox();
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateLightbox() {
  const img = currentGalleryImages[currentImageIndex];
  lightboxImage.src = img.src;
  lightboxImage.alt = `${img.name} - ${img.desc}`;
  lightboxCaption.textContent = `${img.name} — ${img.desc}`;

  const waMsg = encodeURIComponent(
    `Hello, I'm interested in this product from Ann's Interior Decors.\nProduct: ${img.categoryTitle}\nImage: ${img.file}`
  );
  lightboxOrderBtn.href = `${WHATSAPP_BASE_URL}?text=${waMsg}`;
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

lightboxPrev.addEventListener('click', (e) => {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
  updateLightbox();
});

lightboxNext.addEventListener('click', (e) => {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
  updateLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') {
    currentImageIndex = (currentImageIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    updateLightbox();
  }
  if (e.key === 'ArrowRight') {
    currentImageIndex = (currentImageIndex + 1) % currentGalleryImages.length;
    updateLightbox();
  }
});

// ===== SCROLL REVEAL ANIMATION =====
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== ACTIVE NAV LINK ON SCROLL =====
function initActiveNavTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

// ===== SMOOTH SCROLL FOR HERO BUTTON =====
// Handled natively by browser since we have CSS scroll-behavior: smooth.
// If there was any JS blocking it, it has been removed.

// ===== FORM SUBMISSION HANDLER =====
function initFormSubmission() {
  const form = document.getElementById('course-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Set loading state
    feedback.className = 'form-feedback info';
    feedback.textContent = 'Sending application...';
    feedback.style.display = 'block';

    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      const data = await response.json();

      if (response.status === 200) {
        feedback.className = 'form-feedback success';
        feedback.textContent = 'Application submitted successfully! We will contact you soon.';
        form.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.warn('Web3Forms AJAX failed, falling back to standard submission:', err);
      feedback.className = 'form-feedback info';
      feedback.textContent = 'Submitting application...';
      
      // Fallback: submit natively (bypasses event listener to prevent loop)
      form.submit();
    }
  });
}

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderGalleries();
  initScrollReveal();
  initActiveNavTracking();
  initFormSubmission();
  handleScroll(); // initial check
});
