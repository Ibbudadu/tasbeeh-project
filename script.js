let count = 0;
let totalSum = parseInt(localStorage.getItem('totalSum')) || 0;
let countHistory = JSON.parse(localStorage.getItem('countHistory')) || [];

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment-btn');
const resetButton = document.getElementById('reset-btn');
const historyButton = document.getElementById('history-btn');
const totalSumElement = document.getElementById('total-sum');
const historyElement = document.getElementById('history');
const duaTextElement = document.getElementById('dua-text');

const duas = [
    "سُبْحَانَ ٱللَّهُ (SubhanAllah)",
    "الْحَمْدُ لِلَّهِ (AlhamduLillah)",
    "اللَّهُ أَكْبَرُ (AllahuAkbar)",
    "بِسْمِ ٱللَّهِ (Bismillah)",
    "الحمد لله (Alhamdulillah)",
    "أستغفر الله (Astaghfirullah)",
    "لا إله إلا الله (La ilaha illallah)"
];

// Function to display a random dua
function displayRandomDua() {
    const randomIndex = Math.floor(Math.random() * duas.length);
    duaTextElement.textContent = duas[randomIndex];
}

// Function to update the total sum display
function updateTotalSum() {
    totalSumElement.textContent = `Total Sum: ${totalSum}`;
}

// Increment the count and update the total sum
incrementButton.addEventListener('click', () => {
    count++;
    counterElement.textContent = count;
    totalSum += 1;
    countHistory.push(count);
    localStorage.setItem('totalSum', totalSum);
    localStorage.setItem('countHistory', JSON.stringify(countHistory));
    updateTotalSum();
});

// Reset the count, clear history, and display a new dua
resetButton.addEventListener('click', () => {
    count = 0;
    counterElement.textContent = count;
    totalSum = 0;
    countHistory = [];
    localStorage.setItem('totalSum', totalSum);
    localStorage.setItem('countHistory', JSON.stringify(countHistory));
    updateTotalSum();
    historyElement.innerHTML = ''; // Clear history display
    displayRandomDua(); // Display a new dua
});

// Show count history
historyButton.addEventListener('click', () => {
    if (countHistory.length === 0) {
        historyElement.innerHTML = 'No history available.';
    } else {
        historyElement.innerHTML = countHistory.map((value, index) => `<div>Count ${index + 1}: ${value}</div>`).join('');
    }
});

// Initialize total sum and dua display on page load
updateTotalSum();
displayRandomDua();
