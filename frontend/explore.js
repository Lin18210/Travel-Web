// Sample destination data
const destinations = [
  {
    id: 1,
    title: "Alpine Mountain Lodge",
    location: "Swiss Alps, Switzerland",
    category: "mountains",
    price: 245,
    rating: 4.8,
    reviews: 127,
    description:
      "Experience luxury in the heart of the Swiss Alps with breathtaking mountain views, world-class skiing, and cozy alpine charm.",
    features: ["WiFi", "Spa", "Skiing", "Restaurant", "Pool", "Fireplace"],
    image: "Mountain resort with snow-capped peaks",
    badge: "Luxury",
  },
  {
    id: 2,
    title: "Beachfront Paradise Villa",
    location: "Maldives",
    category: "beaches",
    price: 890,
    rating: 4.9,
    reviews: 89,
    description:
      "Private overwater villa with crystal clear waters, pristine beaches, and unparalleled luxury in tropical paradise.",
    features: [
      "Private Beach",
      "Snorkeling",
      "Spa",
      "Butler Service",
      "Infinity Pool",
      "Sunset Views",
    ],
    image: "Overwater villa in crystal blue lagoon",
    badge: "Featured",
  },
  {
    id: 3,
    title: "Metropolitan Penthouse",
    location: "New York, USA",
    category: "cities",
    price: 350,
    rating: 4.6,
    reviews: 203,
    description:
      "Sophisticated penthouse in the heart of Manhattan with panoramic city views and luxury amenities.",
    features: ["City Views", "Gym", "Concierge", "WiFi", "Kitchen", "Terrace"],
    image: "Modern penthouse with city skyline",
    badge: "Popular",
  },
  {
    id: 4,
    title: "Tuscan Countryside Estate",
    location: "Tuscany, Italy",
    category: "countryside",
    price: 180,
    rating: 4.7,
    reviews: 156,
    description:
      "Charming villa surrounded by rolling hills, vineyards, and olive groves in the heart of Tuscany.",
    features: [
      "Wine Tasting",
      "Cooking Classes",
      "Pool",
      "Garden",
      "WiFi",
      "Fireplace",
    ],
    image: "Tuscan villa with vineyard views",
    badge: "Authentic",
  },
  {
    id: 5,
    title: "Desert Oasis Retreat",
    location: "Sahara Desert, Morocco",
    category: "countryside",
    price: 220,
    rating: 4.5,
    reviews: 74,
    description:
      "Unique desert camp experience with luxury tents, camel trekking, and unforgettable stargazing.",
    features: [
      "Stargazing",
      "Camel Rides",
      "Traditional Cuisine",
      "Campfire",
      "Guided Tours",
      "Spa",
    ],
    image: "Luxury desert camp under stars",
    badge: "Adventure",
  },
  {
    id: 6,
    title: "Tropical Rainforest Lodge",
    location: "Costa Rica",
    category: "countryside",
    price: 165,
    rating: 4.8,
    reviews: 91,
    description:
      "Eco-friendly lodge immersed in lush rainforest with incredible wildlife and sustainable luxury.",
    features: [
      "Wildlife Tours",
      "Zip Lining",
      "Spa",
      "Organic Food",
      "WiFi",
      "Hiking Trails",
    ],
    image: "Treehouse lodge in rainforest canopy",
    badge: "Eco-Friendly",
  },
  {
    id: 7,
    title: "Cliffside Ocean Resort",
    location: "Santorini, Greece",
    category: "beaches",
    price: 420,
    rating: 4.9,
    reviews: 145,
    description:
      "Dramatic cliffside location with infinity pools, white-washed architecture, and stunning sunset views.",
    features: [
      "Infinity Pool",
      "Sunset Views",
      "Spa",
      "Fine Dining",
      "WiFi",
      "Private Terrace",
    ],
    image: "White buildings on cliff overlooking sea",
    badge: "Romantic",
  },
  {
    id: 8,
    title: "Urban Boutique Hotel",
    location: "Tokyo, Japan",
    category: "cities",
    price: 280,
    rating: 4.6,
    reviews: 188,
    description:
      "Modern boutique hotel blending traditional Japanese design with contemporary luxury in bustling Tokyo.",
    features: [
      "Spa",
      "Restaurant",
      "WiFi",
      "Concierge",
      "Tea Ceremony",
      "Garden",
    ],
    image: "Modern hotel with traditional Japanese elements",
    badge: "Cultural",
  },
  {
    id: 9,
    title: "Highland Castle Experience",
    location: "Scottish Highlands, UK",
    category: "mountains",
    price: 195,
    rating: 4.7,
    reviews: 112,
    description:
      "Historic castle offering royal treatment with medieval charm, highland views, and luxury accommodations.",
    features: [
      "Historic Tours",
      "Fine Dining",
      "Spa",
      "WiFi",
      "Library",
      "Highland Views",
    ],
    image: "Medieval castle in misty highlands",
    badge: "Historic",
  },
  {
    id: 10,
    title: "Private Island Escape",
    location: "Seychelles",
    category: "luxury",
    price: 1200,
    rating: 5.0,
    reviews: 32,
    description:
      "Exclusive private island with pristine beaches, crystal waters, and unmatched privacy and luxury.",
    features: [
      "Private Island",
      "Butler Service",
      "Yacht",
      "Spa",
      "Fine Dining",
      "Helicopter Access",
    ],
    image: "Private island with white sand beaches",
    badge: "Exclusive",
  },
  {
    id: 11,
    title: "Ski Chalet Deluxe",
    location: "Aspen, Colorado",
    category: "mountains",
    price: 485,
    rating: 4.8,
    reviews: 167,
    description:
      "Luxury ski chalet with direct slope access, hot tub, and panoramic mountain views in world-famous Aspen.",
    features: [
      "Ski-in/Ski-out",
      "Hot Tub",
      "Fireplace",
      "Mountain Views",
      "Chef Service",
      "Wine Cellar",
    ],
    image: "Wooden chalet with snow and mountains",
    badge: "Ski Resort",
  },
  {
    id: 12,
    title: "Jungle Canopy Lodge",
    location: "Amazon, Brazil",
    category: "countryside",
    price: 145,
    rating: 4.6,
    reviews: 78,
    description:
      "Sustainable lodge high in the jungle canopy with incredible biodiversity and authentic Amazon experience.",
    features: [
      "Wildlife Viewing",
      "Guided Tours",
      "Sustainable",
      "Research Center",
      "Canopy Walk",
      "Local Cuisine",
    ],
    image: "Lodge platform high in jungle trees",
    badge: "Conservation",
  },
];

// Global variables
let currentDestinations = [...destinations];
let currentCategory = "all";
let currentSort = "popular";
let currentView = "grid";
let displayedCount = 8;

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Set up event listeners
  setupEventListeners();

  // Initial render
  filterAndRenderDestinations();
  updateResultsCount();
});

function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", handleSearch);

  // Category filters
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active state
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Update current category
      currentCategory = this.dataset.category;
      displayedCount = 8; // Reset displayed count
      filterAndRenderDestinations();
    });
  });

  // Sort select
  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", function () {
    currentSort = this.value;
    filterAndRenderDestinations();
  });

  // View toggles
  const viewBtns = document.querySelectorAll(".view-btn");
  viewBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update active state
      viewBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Update view
      currentView = this.dataset.view;
      updateView();
    });
  });

  // Load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.addEventListener("click", function () {
    displayedCount += 8;
    renderDestinations();

    // Hide button if all destinations are shown
    if (displayedCount >= currentDestinations.length) {
      this.style.display = "none";
    }
  });

  // Modal close
  const closeModal = document.getElementById("closeModal");
  const modal = document.getElementById("destinationModal");

  closeModal.addEventListener("click", closeDestinationModal);
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeDestinationModal();
    }
  });

  // Escape key to close modal
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeDestinationModal();
    }
  });
}

function handleSearch() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  displayedCount = 8; // Reset displayed count
  filterAndRenderDestinations(searchTerm);
}

function filterAndRenderDestinations(searchTerm = "") {
  // Filter by category
  let filtered =
    currentCategory === "all"
      ? [...destinations]
      : destinations.filter((dest) => dest.category === currentCategory);

  // Filter by search term
  if (searchTerm) {
    filtered = filtered.filter(
      (dest) =>
        dest.title.toLowerCase().includes(searchTerm) ||
        dest.location.toLowerCase().includes(searchTerm) ||
        dest.description.toLowerCase().includes(searchTerm),
    );
  }

  // Sort destinations
  filtered.sort((a, b) => {
    switch (currentSort) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      case "popular":
      default:
        return b.reviews - a.reviews;
    }
  });

  currentDestinations = filtered;
  renderDestinations();
  updateResultsCount();
}

function renderDestinations() {
  const container = document.getElementById("destinationsContainer");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  // Show loading state
  container.classList.add("loading");

  setTimeout(() => {
    // Clear container
    container.innerHTML = "";

    // Get destinations to display
    const destinationsToShow = currentDestinations.slice(0, displayedCount);

    // Render each destination
    destinationsToShow.forEach((dest, index) => {
      const card = createDestinationCard(dest);
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add("fade-in");
      container.appendChild(card);
    });

    // Show/hide load more button
    if (displayedCount >= currentDestinations.length) {
      loadMoreBtn.style.display = "none";
    } else {
      loadMoreBtn.style.display = "block";
    }

    // Remove loading state
    container.classList.remove("loading");

    // Re-initialize icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  }, 300);
}

function createDestinationCard(destination) {
  const card = document.createElement("div");
  card.className = "explore-destination-card";
  card.innerHTML = `
    <div class="explore-card-image">
      <div class="image-placeholder">
        <span>${destination.image}</span>
      </div>
      <div class="card-badge">${destination.badge}</div>
      <button class="card-favorite" data-id="${destination.id}">
        <i data-lucide="heart"></i>
      </button>
    </div>
    <div class="explore-card-content">
      <div class="card-header">
        <h3 class="card-title">${destination.title}</h3>
        <div class="card-rating">
          <i data-lucide="star"></i>
          <span>${destination.rating}</span>
          <span>(${destination.reviews})</span>
        </div>
      </div>
      <div class="card-location">
        <i data-lucide="map-pin"></i>
        <span>${destination.location}</span>
      </div>
      <p class="card-description">${destination.description}</p>
      <div class="card-footer">
        <div class="card-price">
          <span class="currency">$</span>${destination.price}
          <span class="period">/night</span>
        </div>
      </div>
      <div class="card-features">
        ${destination.features
          .slice(0, 3)
          .map((feature) => `<span class="feature-tag">${feature}</span>`)
          .join("")}
      </div>
    </div>
  `;

  // Add click handler for card
  card.addEventListener("click", function (e) {
    if (!e.target.closest(".card-favorite")) {
      openDestinationModal(destination);
    }
  });

  // Add favorite button handler
  const favoriteBtn = card.querySelector(".card-favorite");
  favoriteBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleFavorite(this, destination.id);
  });

  return card;
}

function toggleFavorite(button, destinationId) {
  button.classList.toggle("active");

  // Animate the button
  button.style.transform = "scale(1.2)";
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 150);

  // In a real app, you would save this to localStorage or send to server
  console.log(`Toggled favorite for destination ${destinationId}`);
}

function updateView() {
  const container = document.getElementById("destinationsContainer");

  // Remove all view classes
  container.classList.remove("list-view", "map-view");

  // Add current view class
  if (currentView === "list") {
    container.classList.add("list-view");
  } else if (currentView === "map") {
    container.classList.add("map-view");
    // In a real app, you would initialize a map here
    console.log("Map view selected - would show interactive map");
  }
}

function updateResultsCount() {
  const countElement = document.getElementById("resultsCount");
  countElement.textContent = currentDestinations.length;
}

function openDestinationModal(destination) {
  const modal = document.getElementById("destinationModal");
  const modalBody = document.getElementById("modalBody");

  modalBody.innerHTML = `
    <div class="modal-image">
      <span>${destination.image}</span>
    </div>
    <h2 class="modal-title">${destination.title}</h2>
    <div class="modal-location">
      <i data-lucide="map-pin"></i>
      <span>${destination.location}</span>
    </div>
    <div class="card-rating" style="margin-bottom: 16px;">
      <i data-lucide="star"></i>
      <span>${destination.rating}</span>
      <span>(${destination.reviews} reviews)</span>
    </div>
    <p class="modal-description">${destination.description}</p>
    <div class="modal-features">
      ${destination.features
        .map(
          (feature) => `
        <div class="modal-feature">
          <i data-lucide="check"></i>
          <span>${feature}</span>
        </div>
      `,
        )
        .join("")}
    </div>
    <div class="modal-actions">
      <button class="btn btn-outline">
        <i data-lucide="heart"></i>
        Save
      </button>
      <button class="btn btn-primary">
        <span class="currency">$</span>${destination.price}/night - Book Now
      </button>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Re-initialize icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Add event listeners for modal buttons
  const saveBtn = modalBody.querySelector(".btn-outline");
  const bookBtn = modalBody.querySelector(".btn-primary");

  saveBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    const icon = this.querySelector("i");
    icon.setAttribute(
      "data-lucide",
      this.classList.contains("active") ? "heart" : "heart",
    );
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }
  });

  bookBtn.addEventListener("click", function () {
    alert(
      `Booking ${destination.title} for $${destination.price}/night. This would open the booking flow.`,
    );
  });
}

function closeDestinationModal() {
  const modal = document.getElementById("destinationModal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Add smooth scrolling for better UX
function smoothScrollTo(element) {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Intersection Observer for infinite scroll (alternative to Load More)
function setupInfiniteScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          displayedCount < currentDestinations.length
        ) {
          displayedCount += 4;
          renderDestinations();
        }
      });
    },
    {
      rootMargin: "100px",
    },
  );

  // Observe the load more button
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    observer.observe(loadMoreBtn);
  }
}

// Initialize infinite scroll (uncomment to use instead of Load More button)
// setupInfiniteScroll();

console.log("Explore page initialized successfully!");
