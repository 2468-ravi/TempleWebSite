document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navUl = document.querySelector('nav ul');

  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('show');
    hamburger.classList.toggle('open');
  });
  // setTimeout(() => {
  //window.location.href = "index.htm";
//}, 1000); // 1 second delay




  // Optional: Close menu when clicking a nav link (for better UX)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if (navUl.classList.contains('show')) {
        navUl.classList.remove('show');
        hamburger.classList.remove('open');
      }
    });
  });
});

 document.addEventListener("scroll", () => {
    const section = document.getElementById("temple-video");
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });


document.addEventListener("DOMContentLoaded", () => {

  // ===== NAVBAR ACTIVE LINK =====
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
 window.addEventListener("scroll", () => {
    let currentSectionId = "";
    let minDistance = window.innerHeight;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= -100 && rect.top < minDistance) {
        minDistance = rect.top;
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSectionId) {
        link.classList.add("active");
      }
    });
  });

  // ===== GALLERY =====
  
  const gallery = document.getElementById("gallery-grid");
const loadBtn = document.getElementById("load-more-btn");

const galleryImages = [
  "./images/Pushkarni.jpg",
  "./images/Fort.jpg",
  "./images/Swamiji1.jpg",
  "./images/Aerial2.jpg",
  "./images/Swamiji2.jpg",
  "./images/Swamiji4.jpg",
  "./images/Topshot2.jpg",
  "./images/Open1.jpg",
  "./images/Mata2.jpg",
  "./images/Mata3.jpg",
  "./images/Mata4.jpg",
  "./images/Old1.jpg",
  "./images/Old2.jpg",
  "./images/Pic1.jpg",
  "./images/Pic2.jpg",
  "./images/Pic3.jpg",

];

let visibleCount = 6;
let currentActiveImage = null;

// Create dark overlay for enlarged image
const overlay = document.createElement("div");
overlay.classList.add("gallery-overlay");
document.body.appendChild(overlay);

function renderGallery() {
  gallery.innerHTML = "";
  galleryImages.slice(0, visibleCount).forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Temple Image";
    img.classList.add("gallery-img");
    gallery.appendChild(img);
  });
  loadBtn.style.display = visibleCount >= galleryImages.length ? "none" : "inline-block";
}

loadBtn.addEventListener("click", () => {
  visibleCount += 4;
  renderGallery();
  bindGalleryClickEvents(); // rebind click events
});

function bindGalleryClickEvents() {
  const imgs = document.querySelectorAll(".gallery-img");
  imgs.forEach(img => {
    img.addEventListener("click", () => {
      // If clicked again → shrink
      if (currentActiveImage === img) {
        img.classList.remove("enlarged");
        overlay.classList.remove("show");
        currentActiveImage = null;
        return;
      }

      // Remove enlargement from any previously active image
      if (currentActiveImage) {
        currentActiveImage.classList.remove("enlarged");
      }

      // Enlarge current image
      img.classList.add("enlarged");
      overlay.classList.add("show");
      currentActiveImage = img;
    });
  });
}

// Clicking on overlay will close the enlarged image
overlay.addEventListener("click", () => {
  if (currentActiveImage) currentActiveImage.classList.remove("enlarged");
  overlay.classList.remove("show");
  currentActiveImage = null;
});

// Initialize
renderGallery();
bindGalleryClickEvents();


  // ===== SERVICES =====
  const serviceDetails = {
    pooja: {
      title: "Daily Pooja & Aarti",
      description: "Daily Pooja & Aarti are conducted every morning and evening with Vedic chants and devotional hymns to invoke the blessings of Goddess Durga.",
      image: "./images/Mata.jpg",
      poojas: [
        "Suprabhata Seva (Morning)",
        "Alankara Seva",
        "Kumkuma Archana",
        "Lalitha Sahasranama Kumkuma Archana",
        "Sarvaseva with Prasada",
        "Sandhya Aarti (Evening)",
        "Lalitha Yaaga Homa",
        "Chandi Homa",
        "Nava Chandi Homa",
        "<span class='highlight'>For more details about bookings and pooja activities reach out to given contact details '9380057453'.</span>"
      ]
    },
    annadana: {
      title: "Nitya Annadana (Free Meal Service)",
      description: "Our temple serves free meals daily through Nitya Annadana, feeding countless devotees and the needy. Join this sacred mission by sponsoring a meal and share in the blessings of selfless service.",
      image: "https://www.ayyappa.org/wp-content/uploads/2019/05/Annadanam-1.jpg",
      poojas: [
        "Morning Meals for Devotees",
        "Afternoon Annadana",
        "Evening Prasadam Distribution"
      ]
    },
    goushala: {
      title: "Goushala (Cow Shelter)",
      description: "Our Goshala cares for over 1200+ sacred cows, providing them food, shelter, and love. Join us in this divine service by sponsoring a cow and be part of this holy mission of Gau Seva.",
      image: "./images/Swamiji3.jpg",
      poojas: [
        "Feeding the Cows",
        "Maintenance & Cleanliness",
        "Cow Adoption Program",
        "Gaupuja",
        "Kamadhenu Yaaga",
        "Desi Ghee",
        "Cow-Derived Natural Products (Panchagavya Range)",
        "<span class='highlight'>For more details about  pooja activities and Panchagavya products reach out to given contact details '9380057453'.</span>"
      
      ]
    },
    yatri: {
      title: "Yatri Nivas (Accommodation)",
      description: "Yatri Nivas offers clean and peaceful accommodation for devotees visiting the temple, ensuring a restful stay near the shrine.",
      image: "./images/Yatri Nivas.jpg",
      poojas: [
        "Clean Rooms for Devotees",
        "Hot Water Facility",
        "Temple Proximity Stay",
        "<span class='highlight'>For more details about bookings reach out to given contact details '9380057453'.</span>"
      ]
    }
  };

  const buttons = document.querySelectorAll(".service-btn");
  const descriptionBox = document.getElementById("service-description");
  let currentActiveKey = null;
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.dataset.service;
      const detail = serviceDetails[key];
      if (!detail) return;
      // Toggle off if the same key is clicked
      if (currentActiveKey === key) {
        descriptionBox.innerHTML = "";
        descriptionBox.classList.remove("active");
        currentActiveKey = null;
        return;
      }
      descriptionBox.innerHTML = `
        <div class="service-card fade-in">
          <h3>${detail.title}</h3>
          <img src="${detail.image}" alt="${detail.title}">
          <p>${detail.description}</p>
          <ul class="service-poojas">
            ${detail.poojas ? detail.poojas.map(item => `<li>${item}</li>`).join("") : ""}
          </ul>
        </div>
      `;
      const list = descriptionBox.querySelector(".service-poojas");
      if (list) setTimeout(() => list.classList.add("show"), 50);
      descriptionBox.classList.add("active");
      descriptionBox.scrollIntoView({ behavior: "smooth", block: "center" });
      currentActiveKey = key;
    });
  });

  // ===== MOBILE HAMBURGER MENU =====
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("show");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("show")) {
          navMenu.classList.remove("show");
          hamburger.classList.remove("open");
        }
      });
    });
  }

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // ===== LOGO CLICK SCROLL =====
  const logo = document.querySelector(".site-logo");
  if (logo) {
    logo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // ===== DONATION FORM WITH UPI + GOOGLE SHEET =====

  // ===== DONATION FORM WITH UPI + GOOGLE SHEET =====
  const donationForm = document.getElementById("donation-form");
  const message = document.getElementById("donation-message");
  const qrBox = document.getElementById("upi-box");
  const upiLinkEl = document.getElementById("upi-link");
  const donationTypeEl = document.getElementById("donation-type");
  const donationAmountEl = document.getElementById("donation-amount");
  const amountFormGroup = donationAmountEl.closest(".form-group");

  // Replace with your UPI ID and Apps Script URL
  const templeUpiId = "9380057453@ybl";
  const sheetUrl = "https://script.google.com/macros/s/AKfycbzZPSrFx4KiGwQ7IZoMjC7Qp31AmVEBk7bN87L7rp3oEO8XGmUFVazSnFCFbpQ7gMvh/exec";

  // Fixed seva amounts
  const sevaAmounts = {
    "kumkuma-archana": 251,
    "lalitha": 501,
    "abhisheka": 1001,
    "sarva-seva": 2001,
    "annadasoha": 10000,
    "adoption": 11001
  };

  // Hide amount box initially
  amountFormGroup.style.display = "none";

  // Show amount input only for "Others"
  donationTypeEl.addEventListener("change", () => {
    const selected = donationTypeEl.value;

    if (sevaAmounts[selected]) {
      amountFormGroup.style.display = "none";
      donationAmountEl.value = sevaAmounts[selected];
      donationAmountEl.readOnly = true;
    } else if (selected === "others") {
      amountFormGroup.style.display = "block";
      donationAmountEl.value = "";
      donationAmountEl.readOnly = false;
    } else {
      amountFormGroup.style.display = "none";
      donationAmountEl.value = "";
      donationAmountEl.readOnly = false;
    }
  });

  donationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("donor-name").value.trim();
    const contact = document.getElementById("donor-contact").value.trim();
    const address = document.getElementById("donor-address").value.trim();
    let amount = Number(donationAmountEl.value);
    

    const selectedSeva = donationTypeEl.value;
    if (!sevaAmounts[selectedSeva] && selectedSeva !== "others") {
      amount = 0;
    } else if (sevaAmounts[selectedSeva] && selectedSeva !== "others") {
      amount = sevaAmounts[selectedSeva]; // fixed amount for selected seva
    }

          
    // Validate fields
    if (!name || !contact || !address || !amount || amount < 1) {
      message.style.color = "red";
      message.innerHTML = "⚠️ Please fill in all details and enter a valid amount.";
      qrBox.style.display = "none";
      return;
    }

    // Generate UPI link
    //const upiLink = `upi://pay?pa=${encodeURIComponent(templeUpiId)}&pn=${encodeURIComponent("Aadishakti Durga Temple")}&tn=${encodeURIComponent("Temple Donation")}&am=${amount}&cu=INR`;
    const upiLink = `upi://pay?pa=${templeUpiId}&pn=Aadishakti%20Durga%20Temple&am=${amount}&cu=INR`;
    qrBox.style.display = "block";
    upiLinkEl.innerHTML = `<a href="${upiLink}" target="_blank" style="font-size:1.4rem; font-weight:700; color:#c0392b; text-decoration:underline;">Pay ₹${amount.toLocaleString()} via UPI</a>`;

    // Send data to Google Sheets
    try {
      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Contact: contact,
          Address: address,
          Amount: amount
        })

      });
    } catch (err) {
      console.log("Error sending to Google Sheets:", err);
    }

    // Success message
    message.style.color = "green";
    message.innerHTML = `🙏 Thank you, ${name}!<br>Please click the link above to complete your donation of ₹${amount.toLocaleString()}.<br>May Goddess Durga bless you!`;

    // Reset form but keep donationType and amount hidden correctly
    donationForm.reset();
    amountFormGroup.style.display = "none";
  });


});
