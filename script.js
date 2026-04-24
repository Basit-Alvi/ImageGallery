// Gallery and Lightbox Functionality
class ImageGallery {
    constructor() {
        this.currentImageIndex = 0;
        this.images = [];
        this.filteredImages = [];
        this.currentFilter = 'all';
        
        this.init();
    }

    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.loadGalleryImages();
    }

    cacheElements() {
        this.gallery = document.querySelector('.gallery');
        this.lightbox = document.getElementById('lightbox');
        this.lightboxImg = document.getElementById('lightbox-img');
        this.closeBtn = document.querySelector('.close');
        this.prevBtn = document.querySelector('.prev');
        this.nextBtn = document.querySelector('.next');
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.currentImageSpan = document.getElementById('current-image');
        this.totalImagesSpan = document.getElementById('total-images');
    }

    setupEventListeners() {
        // Gallery view buttons
        this.gallery.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-btn')) {
                const item = e.target.closest('.gallery-item');
                this.openLightbox(item);
            }
        });

        // Lightbox navigation
        this.closeBtn.addEventListener('click', () => this.closeLightbox());
        this.prevBtn.addEventListener('click', () => this.previousImage());
        this.nextBtn.addEventListener('click', () => this.nextImage());

        // Category filters
        this.filterBtns.forEach((btn) => {1``````````
            btn.addEventListener('click', () => this.filterByCategory(btn));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.lightbox.classList.contains('active')) {
                if (e.key === 'ArrowLeft') this.previousImage();
                if (e.key === 'ArrowRight') this.nextImage();
                if (e.key === 'Escape') this.closeLightbox();
            }
            
        });

        // Close lightbox when clicking outside image
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
    }

    loadGalleryImages() {
        const galleryItems = document.querySelectorAll('.gallery-item');
        this.images = Array.from(galleryItems).map((item) => ({
            element: item,
            img: item.querySelector('img'),
            category: item.dataset.category,
        }));
        this.filteredImages = [...this.images];
        this.totalImagesSpan.textContent = this.filteredImages.length;
    }

    openLightbox(item) {
        const clickedImage = this.images.findIndex(
            (img) => img.element === item
        );
        this.currentImageIndex = this.filteredImages.findIndex(
            (img) => img.element === item
        );
        this.lightboxImg.src = this.filteredImages[this.currentImageIndex].img.src;
        this.lightboxImg.alt = this.filteredImages[this.currentImageIndex].img.alt;
        this.lightbox.classList.add('active');
        this.updateCounter();
        document.body.style.overflow = 'hidden';
    }

    closeLightbox() {
        this.lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    nextImage() {
        this.currentImageIndex =
            (this.currentImageIndex + 1) % this.filteredImages.length;
        this.updateLightbox();
    }

    previousImage() {
        this.currentImageIndex =
            (this.currentImageIndex - 1 + this.filteredImages.length) %
            this.filteredImages.length;
        this.updateLightbox();
    }

    updateLightbox() {
        const image = this.filteredImages[this.currentImageIndex];
        this.lightboxImg.src = image.img.src;
        this.lightboxImg.alt = image.img.alt;
        this.updateCounter();
    }

    updateCounter() {
        this.currentImageSpan.textContent = this.currentImageIndex + 1;
    }

    filterByCategory(btn) {
        // Update active button
        this.filterBtns.forEach((button) =>
            button.classList.remove('active')
        );
        btn.classList.add('active');

        const category = btn.dataset.category;
        this.currentFilter = category;

        // Filter images
        if (category === 'all') {
            this.filteredImages = [...this.images];
            this.images.forEach((img) =>
                img.element.classList.remove('hidden')
            );
        } else {
            this.filteredImages = this.images.filter(
                (img) => img.category === category
            );
            this.images.forEach((img) => {
                if (img.category === category) {
                    img.element.classList.remove('hidden');
                } else {
                    img.element.classList.add('hidden');
                }
            });
        }

        this.totalImagesSpan.textContent = this.filteredImages.length;
        this.currentImageIndex = 0;

        // Close lightbox if open and no images match filter
        if (this.filteredImages.length === 0 && this.lightbox.classList.contains('active')) {
            this.closeLightbox();
        }
    }
}

// Initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ImageGallery();
});
