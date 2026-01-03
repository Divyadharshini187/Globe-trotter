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
        description: "The city that never sleeps"
    },
    {
        id: 2,
        name: "Paris",
        country: "France",
        flag: "🇫🇷",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.7,
        description: "City of lights and romance"
    },
    {
        id: 3,
        name: "Tokyo",
        country: "Japan",
        flag: "🇯🇵",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.9,
        description: "Where tradition meets innovation"
    },
    {
        id: 4,
        name: "Barcelona",
        country: "Spain",
        flag: "🇪🇸",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.5,
        description: "Architecture and beaches"
    },
    {
        id: 5,
        name: "Sydney",
        country: "Australia",
        flag: "🇦🇺",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.6,
        description: "Harbor city with iconic landmarks"
    },
    {
        id: 6,
        name: "Berlin",
        country: "Germany",
        flag: "🇩🇪",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.4,
        description: "History and modern culture"
    },
    {
        id: 7,
        name: "Rome",
        country: "Italy",
        flag: "🇮🇹",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.6,
        description: "Eternal city of ancient wonders"
    },
    {
        id: 8,
        name: "Bangkok",
        country: "Thailand",
        flag: "🇹🇭",
        costIndex: "low",
        costLabel: "$",
        popularity: 4.3,
        description: "Vibrant street life and temples"
    },
    {
        id: 9,
        name: "Toronto",
        country: "Canada",
        flag: "🇨🇦",
        costIndex: "medium",
        costLabel: "$$",
        popularity: 4.5,
        description: "Multicultural urban hub"
    },
    {
        id: 10,
        name: "Amsterdam",
        country: "Netherlands",
        flag: "🇳🇱",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.6,
        description: "Canals and cycling culture"
    },
    {
        id: 11,
        name: "Prague",
        country: "Czech Republic",
        flag: "🇨🇿",
        costIndex: "low",
        costLabel: "$",
        popularity: 4.7,
        description: "Fairy-tale architecture"
    },
    {
        id: 12,
        name: "Dubai",
        country: "UAE",
        flag: "🇦🇪",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.5,
        description: "Luxury and innovation"
    },
    {
        id: 13,
        name: "Lisbon",
        country: "Portugal",
        flag: "🇵🇹",
        costIndex: "low",
        costLabel: "$",
        popularity: 4.4,
        description: "Coastal charm and history"
    },
    {
        id: 14,
        name: "Singapore",
        country: "Singapore",
        flag: "🇸🇬",
        costIndex: "high",
        costLabel: "$$$",
        popularity: 4.7,
        description: "Garden city of the future"
    },
    {
        id: 15,
        name: "Mexico City",
        country: "Mexico",
        flag: "🇲🇽",
        costIndex: "low",
        costLabel: "$",
        popularity: 4.3,
        description: "Rich culture and cuisine"
    }
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
                <span class="trip-city-name">
                    <span style="margin-right: 8px;">${city.flag}</span>
                    ${city.name}
                </span>
                <button class="remove-button" onclick="removeFromTrip(${city.id})">Remove</button>
            `;
            tripCitiesList.appendChild(li);
        });
    }

    tripCount.textContent = `${tripCities.length} city${tripCities.length !== 1 ? 'ies' : ''} added`;
}

// Clear Trip
function clearTrip() {
    if (tripCities.length === 0) return;
    
    if (confirm('Are you sure you want to remove all cities from your trip?')) {
        tripCities.forEach(city => {
            updateCityCard(city.id, false);
        });
        tripCities = [];
        updateTripSummary();
    }
}

// Update Results Count
function updateResultsCount(count) {
    resultsCount.textContent = `Showing ${count} cit${count !== 1 ? 'ies' : 'y'}`;
}

// Show/Hide States
function showEmptyState() {
    emptyState.style.display = 'block';
    citiesGrid.style.display = 'none';
}

function hideEmptyState() {
    emptyState.style.display = 'none';
    citiesGrid.style.display = 'grid';
}

function showLoading() {
    loadingState.style.display = 'block';
    citiesGrid.style.display = 'none';
    emptyState.style.display = 'none';
}

function hideLoading() {
    loadingState.style.display = 'none';
    citiesGrid.style.display = 'grid';
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);