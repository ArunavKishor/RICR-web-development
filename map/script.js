
const statePositions = {
  "andhra pradesh": [40, 70],
  "arunachal pradesh": [89, 34],
  assam: [80, 38],
  bihar: [61, 40],
  chhattisgarh: [52, 54],
  goa: [23.5, 72],
  gujarat: [18, 48],
  haryana: [35, 30],
  "himachal pradesh": [40, 22],
  jharkhand: [61, 48],
  karnataka: [30, 76],
  kerala: [31, 88],
  "madhya pradesh": [40, 48],
  maharashtra: [30, 60],
  manipur: [88, 43],
  meghalaya: [84, 34],
  mizoram: [85, 47],
  nagaland: [89, 39],
  odisha: [58, 56],
  punjab: [32, 25],
  rajasthan: [26, 38],
  sikkim: [70, 35],
  "tamil nadu": [38, 86],
  telangana: [42, 63],
  tripura: [81, 46],
  "uttar pradesh": [48, 38],
  uttarakhand: [44, 27],
  "west bengal": [70, 48],
  delhi: [36, 31.5],
  "jammu & kashmir": [40, 15],
  ladakh: [48, 4],
  chandigarh: [46, 28],
  "andaman and nicobar islands": [86, 78],
  puducherry: [66, 78],
  "dadra and nagar haveli": [9, 48],
  "daman and diu": [10, 46],
  lakshadweep: [6, 80],
};
const stateInfo = {
  "andhra pradesh": {
    capital: "Amaravati",
    income: "₹1,70,215",
    cm: "N. Chandrababu Naidu",
  },
  "arunachal pradesh": {
    capital: "Itanagar",
    income: "₹1,21,437",
    cm: "Pema Khandu",
  },
  assam: { capital: "Dispur", income: "₹92,718", cm: "Himanta Biswa Sarma" },
  bihar: { capital: "Patna", income: "₹54,383", cm: "Nitish Kumar" },
  chhattisgarh: {
    capital: "Raipur",
    income: "₹1,05,448",
    cm: "Vishnu Deo Sai",
  },
  goa: { capital: "Panaji", income: "₹4,23,516", cm: "Pramod Sawant" },
  gujarat: {
    capital: "Gandhinagar",
    income: "₹2,12,821",
    cm: "Bhupendra Patel",
  },
  haryana: {
    capital: "Chandigarh",
    income: "₹2,96,685",
    cm: "Nayab Singh Saini",
  },
  "himachal pradesh": {
    capital: "Shimla",
    income: "₹2,27,021",
    cm: "Sukhvinder Singh Sukhu",
  },
  jharkhand: { capital: "Ranchi", income: "₹1,00,954", cm: "Hemant Soren" },
  karnataka: { capital: "Bengaluru", income: "₹2,34,888", cm: "Siddaramaiah" },
  kerala: {
    capital: "Thiruvananthapuram",
    income: "₹2,68,963",
    cm: "Pinarayi Vijayan",
  },
  "madhya pradesh": {
    capital: "Bhopal",
    income: "₹1,42,930",
    cm: "Mohan Yadav",
  },
  maharashtra: { capital: "Mumbai", income: "₹2,42,247", cm: "Eknath Shinde" },
  manipur: { capital: "Imphal", income: "₹94,876", cm: "N. Biren Singh" },
  meghalaya: { capital: "Shillong", income: "₹96,793", cm: "Conrad Sangma" },
  mizoram: { capital: "Aizawl", income: "₹1,38,122", cm: "Lalduhoma" },
  nagaland: { capital: "Kohima", income: "₹1,10,894", cm: "Neiphiu Rio" },
  odisha: {
    capital: "Bhubaneswar",
    income: "₹1,37,447",
    cm: "Mohan Charan Majhi",
  },
  punjab: { capital: "Chandigarh", income: "₹1,73,873", cm: "Bhagwant Mann" },
  rajasthan: {
    capital: "Jaipur",
    income: "₹1,47,922",
    cm: "Bhajan Lal Sharma",
  },
  sikkim: { capital: "Gangtok", income: "₹4,12,864", cm: "Prem Singh Tamang" },
  "tamil nadu": { capital: "Chennai", income: "₹2,41,131", cm: "M. K. Stalin" },
  telangana: {
    capital: "Hyderabad",
    income: "₹2,75,443",
    cm: "Anumula Revanth Reddy",
  },
  tripura: { capital: "Agartala", income: "₹1,02,029", cm: "Manik Saha" },
  "uttar pradesh": {
    capital: "Lucknow",
    income: "₹80,423",
    cm: "Yogi Adityanath",
  },
  uttarakhand: {
    capital: "Dehradun",
    income: "₹1,98,738",
    cm: "Pushkar Singh Dhami",
  },
  "west bengal": {
    capital: "Kolkata",
    income: "₹1,18,000",
    cm: "Mamata Banerjee",
  },
  delhi: { capital: "New Delhi", income: "₹3,76,221", cm: "Arvind Kejriwal" },
  "jammu & kashmir": {
    capital: "Srinagar/Jammu",
    income: "₹1,48,701",
    cm: "Under LG Manoj Sinha",
  },
  ladakh: { capital: "Leh", income: "₹1,56,000", cm: "Under LG" },
  chandigarh: {
    capital: "Chandigarh",
    income: "₹2,92,000",
    cm: "UT Under Administrator",
  },
  "andaman and nicobar islands": {
    capital: "Port Blair",
    income: "₹1,48,000",
    cm: "Under LG",
  },
  puducherry: {
    capital: "Puducherry",
    income: "₹2,00,000",
    cm: "N. Rangasamy",
  },
  "dadra and nagar haveli": {
    capital: "Silvassa",
    income: "₹1,52,000",
    cm: "UT Under Administrator",
  },
  "daman and diu": {
    capital: "Daman",
    income: "₹1,42,000",
    cm: "UT Under Administrator",
  },
  lakshadweep: {
    capital: "Kavaratti",
    income: "₹1,00,500",
    cm: "UT Under Administrator",
  },
};
const aliases = {
  tn: "tamil nadu",
  tamilnadu: "tamil nadu",
  ap: "andhra pradesh",
  andhra: "andhra pradesh",
  mp: "madhya pradesh",
  mh: "maharashtra",
  up: "uttar pradesh",
  uk: "uttarakhand",
  jk: "jammu & kashmir",
  wb: "west bengal",
  raj: "rajasthan",
};
const lookup = {};
Object.keys(statePositions).forEach((k) => (lookup[k] = k));
Object.keys(aliases).forEach((a) => (lookup[a] = aliases[a]));

const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const dropdown = document.getElementById("stateDropdown");
const mapWrap = document.getElementById("mapWrap");

const placed = new Set();

Object.keys(statePositions)
  .sort()
  .forEach((st) => {
    const opt = document.createElement("option");
    opt.value = st;
    opt.textContent = st.replace(/\b\w/g, (c) => c.toUpperCase());
    dropdown.appendChild(opt);
  });

dropdown.onchange = () => {
  if (dropdown.value) search(dropdown.value);
};
function normalize(s) {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}

function placeFlag(state) {
  const [xp, yp] = statePositions[state];

  const marker = document.createElement("div");
  marker.className = "marker";
  marker.style.left = xp + "%";
  marker.style.top = yp + "%";

  const info = stateInfo[state];

  marker.innerHTML = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <rect x="2" y="2" width="2" height="20" fill="#333"/>
      <path d="M4 5c2-1 5-1 7 0 2 1 5 1 7 0v10c-2 1-5 1-7 0-2-1-5-1-7 0V5z" fill="#d10000"/>
    </svg>

    <div class="tooltip">
      <b>${state.replace(/\b\w/g, (c) => c.toUpperCase())}</b><br>
      Capital: ${info.capital}<br>
      Per-capita Income: ${info.income}<br>
      Chief Minister: ${info.cm}
    </div>
  `;

  mapWrap.appendChild(marker);
  placed.add(state);
}

// Flash animation if state already placed
function flash(state) {
  document.querySelectorAll(".marker").forEach((m) => {
    if (m.querySelector(".tooltip").innerHTML.toLowerCase().includes(state)) {
      m.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(1.3)" },
          { transform: "scale(1)" },
        ],
        { duration: 400 }
      );
    }
  });
}

function search(arg) {
  const raw = arg || input.value;
  const name = normalize(raw);
  if (!name) return alert("Enter a state!");

  let st = lookup[name];
  if (!st) {
    for (const k in lookup) {
      if (k.includes(name)) st = lookup[k];
    }
  }

  if (!st) return alert("Not found: " + raw);

  if (placed.has(st)) return flash(st);

  placeFlag(st);
  input.value = "";
}
btn.onclick = () => search();
input.onkeydown = (e) => e.key === "Enter" && search();
clearBtn.onclick = () => {
  document.querySelectorAll(".marker").forEach((m) => m.remove());
  placed.clear();
};
