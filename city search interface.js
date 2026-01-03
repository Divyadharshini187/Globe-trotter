// ===================================
// CITY SEARCH INTERFACE - JAVASCRIPT
// ===================================

// Sample City Data
const citiesData = [
    {
        id: 1,
        name: "New York City",
        country: "USA",
        flag: "🇺🇸",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.8,
        description: "The city that never sleeps",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 2,
        name: "Paris",
        country: "France",
        flag: "🇫🇷",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.7,
        description: "City of lights and romance",
        image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        flag: "🇯🇵",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.9,
        description: "Where tradition meets innovation",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 4,
        name: "Barcelona",
        country: "Spain",
        flag: "🇪🇸",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.5,
        description: "Architecture and beaches",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 5,
        name: "Sydney",
        country: "Australia",
        flag: "🇦🇺",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.6,
        description: "Harbor city with iconic landmarks",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 6,
        name: "Berlin",
        country: "Germany",
        flag: "🇩🇪",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.4,
        description: "History and modern culture",
        image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 7,
        name: "Rome",
        country: "Italy",
        flag: "🇮🇹",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.6,
        description: "Eternal city of ancient wonders",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=250&fit=crop&crop=center"
    },

    {
        id: 9,
        name: "Toronto",
        country: "Canada",
        flag: "🇨🇦",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.5,
        description: "Multicultural urban hub",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 10,
        name: "Amsterdam",
        country: "Netherlands",
        flag: "🇳🇱",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.6,
        description: "Canals and cycling culture",
        image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 11,
        name: "Prague",
        country: "Czech Republic",
        flag: "🇨🇿",
        costIndex: "low",
        costLabel: "$",
        popularity: 4.7,
        description: "Fairy-tale architecture",
        image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 12,
        name: "Dubai",
        country: "UAE",
        flag: "🇦🇪",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.5,
        description: "Luxury and innovation",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 13,
        name: "Lisbon",
        country: "Portugal",
        flag: "🇵🇹",
        costIndex: "low",
        costLabel: "$",
        popularity: 4.4,
        description: "Coastal charm and history",
        image: "https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 14,
        name: "Singapore",
        country: "Singapore",
        flag: "🇸🇬",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.7,
        description: "Garden city of the future",
        image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 15,
        name: "Mexico City",
        country: "Mexico",
        flag: "🇲🇽",
        costIndex: "low",
        costLabel: "$",
        popularity: 4.3,
        description: "Rich culture and cuisine",
        image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=400&h=250&fit=crop&crop=center"
    },
    // Added more cities similar to Mexico (Latin American or vibrant cultural destinations)
    {
        id: 16,
        name: "Rio de Janeiro",
        country: "Brazil",
        flag: "🇧🇷",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.6,
        description: "Beaches, Carnival, and vibrant culture",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=250&fit=crop&crop=center"
    },
    {
        id: 17,
        name: "Buenos Aires",
        country: "Argentina",
        flag: "🇦🇷",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.4,
        description: "Tango, architecture, and culinary delights",
        image: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=400&h=250&fit=crop&crop=center"
    },
 


];

// State Management
let tripCities = [];
let filteredCities = [...citiesData];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const countryFilter = document.getElementById('countryFilter');
const costFilter = document.getElementById('costFilter');
const popularityFilter = document.getElementById('popularityFilter');
const citiesGrid = document.getElementById('citiesGrid');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const loadingState = document.getElementById('loadingState');
const tripCitiesList = document.getElementById('tripCitiesList');
const tripCount = document.getElementById('tripCount');
const clearTripBtn = document.getElementById('clearTripBtn');

// Initialize the application
function init() {
    displayCities(citiesData);
    setupEventListeners();
    updateTripSummary();
}

// Setup Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    countryFilter.addEventListener('change', handleFilter);
    costFilter.addEventListener('change', handleFilter);
    popularityFilter.addEventListener('change', handleFilter);
    clearTripBtn.addEventListener('click', clearTrip);
}

// Debounce function for search
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

// Handle Search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterAndDisplayCities(searchTerm);
}

// Handle Filters
function handleFilter() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterAndDisplayCities(searchTerm);
}

// Filter and Display Cities
function filterAndDisplayCities(searchTerm = '') {
    // Show loading state
    showLoading();

    // Simulate async delay for better UX
    setTimeout(() => {
        const country = countryFilter.value;
        const cost = costFilter.value;
        const popularity = popularityFilter.value;

        filteredCities = citiesData.filter(city => {
            // Search filter
            const matchesSearch = searchTerm === '' || 
                city.name.toLowerCase().includes(searchTerm) ||
                city.country.toLowerCase().includes(searchTerm) ||
                city.description.toLowerCase().includes(searchTerm);

            // Country filter
            const matchesCountry = country === '' || city.country === country;

            // Cost filter
            const matchesCost = cost === '' || city.costIndex === cost;

            // Popularity filter
            let matchesPopularity = true;
            if (popularity === 'high') {
                matchesPopularity = city.popularity >= 4.5;
            } else if (popularity === 'medium') {
                matchesPopularity = city.popularity >= 4.0;
            } else if (popularity === 'low') {
                matchesPopularity = city.popularity >= 3.5;
            }

            return matchesSearch && matchesCountry && matchesCost && matchesPopularity;
        });

        displayCities(filteredCities);
        hideLoading();
    }, 300);
}

// Display Cities
function displayCities(cities) {
    citiesGrid.innerHTML = '';

    if (cities.length === 0) {
        showEmptyState();
        updateResultsCount(0);
        return;
    }

    hideEmptyState();
    updateResultsCount(cities.length);

    cities.forEach(city => {
        const cityCard = createCityCard(city);
        citiesGrid.appendChild(cityCard);
    });
}

// Create City Card
function createCityCard(city) {
    const isAdded = tripCities.some(c => c.id === city.id);
    const card = document.createElement('div');
    card.className = `city-card ${isAdded ? 'added' : ''}`;
    card.dataset.cityId = city.id;

    card.innerHTML = `
        <div class="city-image">
            <img src="${city.image}" alt="${city.name}" loading="lazy">
        </div>
        <div class="city-card-header">
            <div>
                <h3 class="city-name">${city.name}</h3>
                <div class="city-country">
                    <span class="city-flag">${city.flag}</span>
                    <span>${city.country}</span>
                </div>
            </div>
        </div>

        <div class="city-metrics">
            <div class="metric">
                <span class="metric-label">Cost Index</span>
                <div class="cost-index">
                    <span class="cost-badge cost-${city.costIndex}">${city.costLabel}</span>
                </div>
            </div>
            <div class="metric">
                <span class="metric-label">Popularity</span>
                <div class="popularity-display">
                    <div class="stars">
                        ${generateStars(city.popularity)}
                    </div>
                    <span class="popularity-number">${city.popularity}</span>
                </div>
            </div>
        </div>

        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 16px;">
            ${city.description}
        </p>

        <button class="add-button ${isAdded ? 'success' : 'primary'}" 
                onclick="${isAdded ? `removeFromTrip(${city.id})` : `addToTrip(${city.id})`}"
                ${isAdded ? '' : `id="addBtn-${city.id}"`}>
            ${isAdded ? '✓ Added to Trip' : '+ Add to Trip'}
        </button>
    `;

    return card;
}

// Generate Stars
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHTML += `<svg class="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
        } else {
            starsHTML += `<svg class="star empty" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
        }
    }
    return starsHTML;
}

// Add to Trip
function addToTrip(cityId) {
    const city = citiesData.find(c => c.id === cityId);
    if (city && !tripCities.some(c => c.id === cityId)) {
        tripCities.push(city);
        updateCityCard(cityId, true);
        updateTripSummary();
        
        // Visual feedback
        const button = document.getElementById(`addBtn-${cityId}`);
        if (button) {
            button.innerHTML = '✓ Added!';
            setTimeout(() => {
                updateCityCard(cityId, true);
            }, 500);
        }
    }
}

// Remove from Trip
function removeFromTrip(cityId) {
    tripCities = tripCities.filter(c => c.id !== cityId);
    updateCityCard(cityId, false);
    updateTripSummary();
}

// Update City Card State
function updateCityCard(cityId, isAdded) {
    const card = document.querySelector(`.city-card[data-city-id="${cityId}"]`);
    if (card) {
        if (isAdded) {
            card.classList.add('added');
        } else {
            card.classList.remove('added');
        }
        
        // Update button
        const button = card.querySelector('.add-button');
        button.className = `add-button ${isAdded ? 'success' : 'primary'}`;
        button.setAttribute('onclick', `${isAdded ? `removeFromTrip(${cityId})` : `addToTrip(${cityId})`}${!isAdded ? `; this.id='addBtn-${cityId}'` : ''}`);
        button.innerHTML = isAdded ? '✓ Added to Trip' : '+ Add to Trip';
    }
}

// Update Trip Summary
function updateTripSummary() {
    tripCitiesList.innerHTML = '';

    if (tripCities.length === 0) {
        tripCitiesList.innerHTML = '<li style="color: var(--text-secondary); text-align: center; padding: 20px 0;">No cities added yet</li>';
    } else {
        tripCities.forEach(city => {
            const li = document.createElement('li');
            li.className = 'trip-city-item';
            li.innerHTML = `
                <div class="trip-city-content">
                    <img src="${city.image}" alt="${city.name}" class="trip-city-image" loading="lazy">
                    <span class="trip-city-name">
                        <span style="margin-right: 8px;">${city.flag}</span>
                        ${city.name}
                    </span>
                </div>
                <button class="remove-button" onclick="removeFromTrip(${city.id})">Remove</button>
            `;
            tripCitiesList.appendChild(li);
        });
    }   
    tripCount.textContent = tripCities.length;
}
// Clear Trip
function clearTrip() {
    tripCities = [];
    filteredCities.forEach(city => updateCityCard(city.id, false));
    updateTripSummary();
}
// Update Results Count
function updateResultsCount(count) {
    resultsCount.textContent = `${count} ${count === 1 ? 'city' : 'cities'} found`;
}
// Show Empty State
function showEmptyState() {
    emptyState.style.display = 'block';
}   
// Hide Empty State
function hideEmptyState() {
    emptyState.style.display = 'none';
}   
// Show Loading State
function showLoading() {
    loadingState.style.display = 'block';
}   
// Hide Loading State
function hideLoading() {
    loadingState.style.display = 'none';
}
// Initialize App
init();


