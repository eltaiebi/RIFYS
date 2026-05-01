/* ============================================================
   RIFYS KRANKENBEFÖRDERUNG — script.js
   ────────────────────────────────────────────────────────────
   KONFIGURATION:
     Alle editierbaren Inhalte befinden sich im CONFIG-Objekt
     ganz oben in dieser Datei. Ersetze einfach die Werte.

   EMAILJS:
     1. Erstelle ein Konto auf https://www.emailjs.com/
     2. Erstelle einen Service und ein Template
     3. Ersetze die drei Platzhalter in CONFIG.emailjs
============================================================ */

/* ──────────────────────────────────────────────────────────
   KONFIGURATION — Hier alle Inhalte anpassen
────────────────────────────────────────────────────────── */
var CONFIG = {

  /* ── Unternehmen ──────────────────────────────────────── */
  company: {
    name:      "Rifys Krankenbeförderung",
    tagline:   "Ihr zuverlässiger Partner für Krankenbeförderung in Düsseldorf & Umgebung.",
    phone:     "0211 15888414",          // Angezeigte Telefonnummer
    phoneRaw:  "+4921115888414",         // Für tel:-Links (nur Ziffern + +)
    email:     "Info@rifys.de",
    address:   "jut thakhwa warari cha 3ath",
    hours:     "Täglich von 06:00 bis 20:00 Uhr",
    area:      "Düsseldorf &amp; Umgebung",
  },

  /* ── EmailJS ──────────────────────────────────────────────
     Ersetze diese drei Werte mit deinen echten EmailJS-Daten.
     Anleitung: https://www.emailjs.com/docs/tutorial/overview/
  ────────────────────────────────────────────────────────── */
  emailjs: {
    publicKey:  "rIiNFTdUuoGdTMVDL",       // ← EmailJS Public Key
    serviceID:  "service_babugsa",       // ← EmailJS Service ID
    templateID: "template_c2v5onf",      // ← EmailJS Template ID (format: template_XXXXXXX)
  },

  /* ── Hero ─────────────────────────────────────────────── */
  hero: {
    badge:    "Ihr Transportpartner in Düsseldorf &amp; Umgebung",
    title:    "Sicher. Pünktlich.<br>Einfühlsam.",
    subtitle: "Service aus einer Hand: Sie teilen uns lediglich Ihre Termine mit – wir kümmern uns um den Rest, von der Routenplanung bis zur Koordination mit den medizinischen Einrichtungen.",
  },

  /* ── Leistungen ───────────────────────────────────────── */
  services: [
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
      title: "Dialysefahrten",
      desc:  "Pünktlichkeit ist bei der Dialyse entscheidend. Wir stimmen die Termine direkt mit Ihrem Dialysezentrum in Düsseldorf und Umgebung ab, damit Sie sich um nichts kümmern müssen.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      title: "Konsilfahrten",
      desc:  "Ob zum Facharzt, zur Reha-Klinik oder zu anderen medizinischen Einrichtungen – wir garantieren durch rechtzeitige Koordination eine pünktliche Hin- und Rückfahrt.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>',
      title: "Fernfahrten",
      desc:  "Über die Stadtgrenzen hinaus sind wir für Sie da. Auf Langstrecken bundesweit genießen Patienten exklusiven Komfort und maximale Sicherheit.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>',
      title: "Liegendfahrten",
      desc:  "In Kürze verfügbar: Wir erweitern unseren Fuhrpark! Bald bieten wir fachgerechte Transporte in modernen, medizinisch ausgestatteten Liegendfahrzeugen an.",
      badge: "Demnächst",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l4-8 4 4 4-6 4 10"/><path d="M3 20h18"/></svg>',
      title: "Tragestuhlfahrten",
      desc:  "Wir überwinden Treppen! Unser Team trägt Sie mit leistungsstarken Tragestühlen sicher aus Wohnungen ohne Aufzug zum Fahrzeug – und natürlich auch wieder zurück.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><path d="M5 20a7 7 0 0114 0"/><path d="M8 14l-2 6"/><path d="M16 14l2 6"/><path d="M8 14h8"/></svg>',
      title: "Rollstuhlfahrten",
      desc:  "Unsere spezialisierten Behindertentransportwagen (BTW) bieten maximale Sicherheit und Komfort für Rollstuhlfahrer auf allen Wegen in Düsseldorf und der Region.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 4v4H16V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
      title: "Krankenfahrten",
      desc:  "Tägliche Beförderung in ganz Düsseldorf und Umgebung. Abrechnung über Krankenkassen bei ärztlicher Verordnung oder bequem als Privatpatient.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>',
      title: "Flughafenfahrten",
      desc:  "Wir bringen Sie sicher und pünktlich zu allen Flughäfen und holen Sie zuverlässig ab – auch mit Gepäck und bei eingeschränkter Mobilität, stets komfortabel.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>',
      title: "Arbeitsfahrten",
      desc:  "Wir unterstützen Sie zuverlässig auf dem Weg zur Arbeit und zurück. Regelmäßig planbar, pünktlich und individuell auf Ihre Bedürfnisse abgestimmt.",
    },
  ],

  /* ── Warum Rifys ──────────────────────────────────────── */
  whyUs: [
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      title: "Service aus einer Hand",
      desc:  "Sie teilen uns lediglich Ihre Termine mit – wir kümmern uns um den Rest: Routenplanung, Koordination mit medizinischen Einrichtungen und pünktliche Abholung.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      title: "Täglich erreichbar",
      desc:  "Wir sind täglich von 06:00 bis 20:00 Uhr telefonisch für Sie erreichbar und beraten Sie gerne zu Ihren Möglichkeiten in Düsseldorf und Umgebung.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
      title: "Geschultes Fachpersonal",
      desc:  "Unser Team begleitet Sie sicher und zuverlässig – mit Einfühlungsvermögen, Professionalität und Erfahrung im Umgang mit Patienten aller Altersgruppen.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
      title: "Moderne Fahrzeugflotte",
      desc:  "Barrierefreie und medizinisch ausgestattete Fahrzeuge für maximale Sicherheit, Hygiene und Komfort – von Rollstuhltransportern bis zu Tragestuhlfahrzeugen.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
      title: "Kassenabrechnungsfähig",
      desc:  "Wir rechnen bei ärztlicher Verordnung direkt mit Ihrer gesetzlichen Krankenkasse ab. Kein Aufwand, keine Vorleistung – wir erledigen alles für Sie.",
    },
    {
      icon:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>',
      title: "Transparente Preise",
      desc:  "Keine versteckten Kosten. Wir erklären alle Tarife im Voraus – für Kassenpatienten und Privatpatienten gleichermaßen ehrlich und klar.",
    },
  ],

  /* ── FAQ ──────────────────────────────────────────────────
     Hinweis: Passe die Einsatzgebiete in Frage 5 an
     CONFIG.company.area an, falls du es änderst.
  ────────────────────────────────────────────────────────── */
  faq: [
    {
      q: "Brauche ich für einen Krankentransport eine ärztliche Verordnung?",
      a: "In der Regel ist für eine Krankenfahrt eine ärztliche Verordnung erforderlich. Diese erhalten Sie bei Ihrem Hausarzt oder dem behandelnden Facharzt.",
    },
    {
      q: "Übernimmt meine Krankenkasse die Transportkosten?",
      a: "Gesetzliche Krankenkassen übernehmen die Kosten für medizinisch notwendige Transporte unter bestimmten Voraussetzungen – z.B. bei Dialysefahrten, onkologischen Behandlungen oder bei Patienten mit eingeschränkter Gehfähigkeit. Sprechen Sie uns an – wir klären den Anspruch gemeinsam mit Ihnen.",
    },
    {
      q: "Wie früh im Voraus muss ich eine Fahrt anmelden?",
      a: "Wir empfehlen, Fahrten mindestens 24 Stunden im Voraus zu reservieren. Für regelmäßige Termine wie Dialysefahrten richten wir gerne einen Dauerauftrag für Sie ein. In dringenden Fällen versuchen wir, auch kurzfristig zu helfen – rufen Sie uns einfach an.",
    },
    {
      q: "Können Begleitpersonen mitfahren?",
      a: "Ja, in unseren Fahrzeugen ist Platz für eine Begleitperson. Bei medizinisch begründeter Notwendigkeit kann auch die Begleitung über die Krankenkasse abgerechnet werden. Bitte teilen Sie uns bei der Anmeldung mit, ob eine Begleitung mitfährt.",
    },
    {
      q: "In welchem Gebiet sind Sie tätig?",
      a: "Unser Haupteinsatzgebiet ist Düsseldorf und Umgebung. Für Fernfahrten bundesweit sprechen Sie uns bitte direkt an – wir finden gemeinsam die passende Lösung für Ihren Transport.",
    },
    {
      q: "Fahren Sie auch an Wochenenden und Feiertagen?",
      a: "Ja, wir sind täglich von 06:00 bis 20:00 Uhr für Sie im Einsatz – auch an Wochenenden und Feiertagen. Buchen Sie einfach Ihre Fahrt über das Formular oder rufen Sie uns direkt an.",
    },
    {
      q: "Welche Zahlungsarten akzeptieren Sie?",
      a: "Kassenpatienten: Wir rechnen direkt mit Ihrer Krankenkasse ab – Sie zahlen nichts vor. Privatpatienten können per Überweisung, EC-Karte oder Barzahlung bezahlen. Alle Preise werden transparent im Voraus mitgeteilt.",
    },
    {
      q: "Was ist der Unterschied zwischen Tragestuhl und Rollstuhl?",
      a: "Ein Tragestuhl ist ein zusammenklappbarer Stuhl, der es uns ermöglicht, Patienten sicher über Treppen zu tragen – ideal für Wohnungen ohne Aufzug. Ein Rollstuhl hingegen wird auf ebenem Untergrund gerollt. Wir beraten Sie gerne, welche Option für Sie am besten geeignet ist.",
    },
  ],

}; // Ende CONFIG


/* ──────────────────────────────────────────────────────────
   EMAILJS — Initialisierung
   Wird nur ausgeführt, wenn der echte Public Key eingetragen ist.
────────────────────────────────────────────────────────── */
(function initEmailJS() {
  if (typeof emailjs !== "undefined" && CONFIG.emailjs.publicKey !== "DEIN_PUBLIC_KEY") {
    emailjs.init({ publicKey: CONFIG.emailjs.publicKey });
  }
}());


/* ──────────────────────────────────────────────────────────
   DOM READY
────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  applyConfig();
  renderServices();
  renderWhyUs();
  renderFAQ();
  initHeader();
  initHamburger();
  initFAQAccordion();
  initContactForm();
  initBackToTop();
  initNavHighlight();
  setFooterYear();
});


/* ──────────────────────────────────────────────────────────
   APPLY CONFIG — Texte und Links aus CONFIG einsetzen
────────────────────────────────────────────────────────── */
function applyConfig() {
  var c = CONFIG.company;

  /* Phone — nur href aktualisieren für CTA-Buttons */
  var phoneButtons = ["header-phone", "hero-phone", "fab-call"];
  phoneButtons.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute("href", "tel:" + c.phoneRaw);
  });

  /* Contact phone — href + sichtbarer Text */
  var contactPhone = document.getElementById("contact-phone");
  if (contactPhone) {
    contactPhone.setAttribute("href", "mailto:" + c.phoneRaw);
    contactPhone.setAttribute("href", "tel:" + c.phoneRaw);
    contactPhone.textContent = c.phone;
  }

  /* Footer phone */
  var footerPhone = document.getElementById("footer-phone");
  if (footerPhone) {
    footerPhone.setAttribute("href", "tel:" + c.phoneRaw);
    footerPhone.textContent = c.phone;
  }

  /* Email */
  var contactEmail = document.getElementById("contact-email");
  if (contactEmail) {
    contactEmail.setAttribute("href", "mailto:" + c.email);
    contactEmail.textContent = c.email;
  }
  var footerEmail = document.getElementById("footer-email");
  if (footerEmail) {
    footerEmail.setAttribute("href", "mailto:" + c.email);
    footerEmail.textContent = c.email;
  }

  /* Address */
  setText("contact-address", c.address);
  setText("footer-address",  c.address);

  /* Hours — enthält <br>, daher innerHTML */
  setHTML("contact-hours", c.hours);

  /* Area — enthält &amp; HTML-Entity */
  setHTML("contact-area", c.area);

  /* Footer company name */
  setText("footer-company-name", c.name);

  /* Hero — dynamisch aus Config */
  setHTML("hero-badge", CONFIG.hero.badge);
  setHTML("hero-title", CONFIG.hero.title);
  setText("hero-subtitle", CONFIG.hero.subtitle);
}


/* ──────────────────────────────────────────────────────────
   RENDER SERVICES
────────────────────────────────────────────────────────── */
function renderServices() {
  var grid = document.getElementById("services-grid");
  if (!grid) return;

  /* SVG-Icons kommen aus dem CONFIG-Objekt (developer-controlled),
     daher wird nur der Text mit escapeHTML gesichert. */
  var html = CONFIG.services.map(function (s) {
    var badgeHtml = s.badge
      ? '<span class="service-card__badge">' + escapeHTML(s.badge) + '</span>'
      : '';
    return (
      '<article class="service-card" role="listitem">' +
        '<div class="service-card__icon" aria-hidden="true">' + s.icon + '</div>' +
        '<h3 class="service-card__title">' + escapeHTML(s.title) + badgeHtml + '</h3>' +
        '<p class="service-card__desc">' + escapeHTML(s.desc) + '</p>' +
      '</article>'
    );
  }).join('');

  grid.innerHTML = html;
}


/* ──────────────────────────────────────────────────────────
   RENDER WHY US
────────────────────────────────────────────────────────── */
function renderWhyUs() {
  var grid = document.getElementById("whyus-grid");
  if (!grid) return;

  var html = CONFIG.whyUs.map(function (w) {
    return (
      '<div class="why-card" role="listitem">' +
        '<div class="why-card__icon" aria-hidden="true">' + w.icon + '</div>' +
        '<div class="why-card__body">' +
          '<h3 class="why-card__title">' + escapeHTML(w.title) + '</h3>' +
          '<p class="why-card__desc">' + escapeHTML(w.desc) + '</p>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  grid.innerHTML = html;
}


/* ──────────────────────────────────────────────────────────
   RENDER FAQ
────────────────────────────────────────────────────────── */
function renderFAQ() {
  var list = document.getElementById("faq-list");
  if (!list) return;

  var html = CONFIG.faq.map(function (f, i) {
    var answerId = "faq-answer-" + i;
    var btnId    = "faq-btn-" + i;
    return (
      '<div class="faq__item">' +
        '<button ' +
          'class="faq__question" ' +
          'id="' + btnId + '" ' +
          'aria-expanded="false" ' +
          'aria-controls="' + answerId + '">' +
          '<span>' + escapeHTML(f.q) + '</span>' +
          '<svg class="faq__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">' +
            '<polyline points="6 9 12 15 18 9"/>' +
          '</svg>' +
        '</button>' +
        '<div class="faq__answer" id="' + answerId + '" role="region" aria-labelledby="' + btnId + '">' +
          '<div class="faq__answer-inner">' + escapeHTML(f.a) + '</div>' +
        '</div>' +
      '</div>'
    );
  }).join('');

  list.innerHTML = html;
}


/* ──────────────────────────────────────────────────────────
   FAQ ACCORDION
────────────────────────────────────────────────────────── */
function initFAQAccordion() {
  document.addEventListener("click", function (e) {
    var btn = e.target.closest(".faq__question");
    if (!btn) return;

    var item   = btn.closest(".faq__item");
    var answer = item.querySelector(".faq__answer");
    var isOpen = item.classList.contains("open");

    /* Close all open items */
    document.querySelectorAll(".faq__item.open").forEach(function (openItem) {
      openItem.classList.remove("open");
      openItem.querySelector(".faq__question").setAttribute("aria-expanded", "false");
      openItem.querySelector(".faq__answer").style.maxHeight = "0";
    });

    /* Open the clicked one (unless it was already open) */
    if (!isOpen) {
      item.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}


/* ──────────────────────────────────────────────────────────
   STICKY HEADER — Schatten nach Scroll
────────────────────────────────────────────────────────── */
function initHeader() {
  var header = document.getElementById("header");
  if (!header) return;

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });
}


/* ──────────────────────────────────────────────────────────
   HAMBURGER MENU
────────────────────────────────────────────────────────── */
function initHamburger() {
  var burger = document.getElementById("hamburger");
  var nav    = document.getElementById("main-nav");
  if (!burger || !nav) return;

  function closeMenu() {
    burger.classList.remove("open");
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  burger.addEventListener("click", function () {
    var isOpen = burger.classList.toggle("open");
    nav.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  /* Close on nav link click */
  nav.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  /* Close on click outside */
  document.addEventListener("click", function (e) {
    if (nav.classList.contains("open") &&
        !nav.contains(e.target) &&
        !burger.contains(e.target)) {
      closeMenu();
    }
  });

  /* Close on Escape key */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      closeMenu();
      burger.focus();
    }
  });
}


/* ──────────────────────────────────────────────────────────
   CONTACT FORM — EmailJS Integration
   ──────────────────────────────────────────────────────────
   Template-Variablen in EmailJS:
     {{from_name}}          – Name des Anfragenden
     {{patient_name}}       – Name des Patienten
     {{from_email}}         – E-Mail
     {{from_phone}}         – Telefon
     {{pickup_street}}      – Abholstraße
     {{pickup_city}}        – Abholort
     {{destination_street}} – Zielstraße
     {{destination_city}}   – Zielort
     {{pickup_date}}        – Datum
     {{pickup_time}}        – Uhrzeit Abholung
     {{appointment_time}}   – Uhrzeit Termin
     {{transport_type}}     – Transportart
     {{transport_voucher}}  – Transportschein
     {{message}}            – Zusätzliche Information
────────────────────────────────────────────────────────── */

/* ── Format-Validatoren ─────────────────────────────────── */
var FIELD_VALIDATORS = {
  from_phone: {
    /* Erlaubt: +49..., 0049..., 0211..., Leerzeichen, -, /, () */
    test: function (v) {
      return /^(\+|00)?[0-9][\d\s\-\/\(\)]{6,19}$/.test(v.trim());
    },
    msg: "Bitte geben Sie eine gültige Telefonnummer ein (z.B. 0211 15888414 oder +49 211 15888414)."
  },
  from_email: {
    test: function (v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
    },
    msg: "Bitte geben Sie eine gültige E-Mail-Adresse ein (z.B. name@example.de)."
  }
};

/* ── Inline-Fehler Hilfsfunktionen ──────────────────────── */
function getOrCreateErrorEl(input) {
  var id  = "field-err-" + input.name;
  var el  = document.getElementById(id);
  if (el) return el;
  el = document.createElement("span");
  el.id        = id;
  el.className = "form__field-error";
  el.setAttribute("role", "alert");
  el.setAttribute("aria-live", "polite");
  el.hidden    = true;
  input.parentNode.insertBefore(el, input.nextSibling);
  return el;
}

function showFieldError(input, msg) {
  input.classList.add("is-error");
  input.setAttribute("aria-invalid", "true");
  var el = getOrCreateErrorEl(input);
  el.textContent = msg;
  el.hidden = false;
}

function clearFieldError(input) {
  input.classList.remove("is-error");
  input.removeAttribute("aria-invalid");
  var el = document.getElementById("field-err-" + input.name);
  if (el) { el.textContent = ""; el.hidden = true; }
}

/* Prüft ein einzelnes Textfeld (Pflicht + Format) */
function validateSingleField(input) {
  var v = input.value.trim();

  /* Pflichtfeld leer? */
  if (input.required && !v) {
    showFieldError(input, "Dieses Feld ist ein Pflichtfeld.");
    return false;
  }

  /* Format-Check */
  var validator = FIELD_VALIDATORS[input.name];
  if (validator && v && !validator.test(v)) {
    showFieldError(input, validator.msg);
    return false;
  }

  clearFieldError(input);
  return true;
}

/* ── Formular initialisieren ────────────────────────────── */
function initContactForm() {
  var form      = document.getElementById("contact-form");
  var submitBtn = document.getElementById("form-submit");
  var btnText   = document.getElementById("form-btn-text");
  var spinner   = document.getElementById("form-spinner");
  var statusBox = document.getElementById("form-status");
  if (!form) return;

  /* Heutiges Datum als min setzen */
  var dateInput = form.querySelector("#form-date");
  if (dateInput) {
    var today = new Date();
    var yyyy  = today.getFullYear();
    var mm    = String(today.getMonth() + 1).padStart(2, "0");
    var dd    = String(today.getDate()).padStart(2, "0");
    dateInput.setAttribute("min", yyyy + "-" + mm + "-" + dd);
  }

  /* Blur-Validierung: Echtzeit-Feedback je Feld */
  form.querySelectorAll(".form__input").forEach(function (input) {
    if (input.type === "radio" || input.type === "checkbox") return;
    input.addEventListener("blur", function () {
      validateSingleField(this);
    });
    input.addEventListener("input", function () {
      /* Fehler sofort löschen sobald Inhalt geändert wird */
      if (this.classList.contains("is-error")) {
        var v = FIELD_VALIDATORS[this.name];
        if (!v || (this.value.trim() && v.test(this.value))) {
          clearFieldError(this);
        }
      }
    });
  });

  /* Entferne Fehlerklasse bei Radio-Auswahl */
  form.querySelectorAll("input[type='radio']").forEach(function (radio) {
    radio.addEventListener("change", function () {
      var group = this.closest(".form__radio-group");
      if (group) group.classList.remove("is-error");
    });
  });

  /* Entferne Fehlerklasse bei Checkbox-Auswahl */
  var consentInput = form.querySelector("#form-consent");
  if (consentInput) {
    consentInput.addEventListener("change", function () {
      var item = this.closest(".form__checkbox-item");
      if (item) item.classList.remove("is-error");
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideStatus(statusBox);

    var valid        = true;
    var firstInvalid = null;

    /* ── Alle Text/Date/Time-Felder validieren ── */
    form.querySelectorAll(".form__input").forEach(function (field) {
      if (field.type === "radio" || field.type === "checkbox") return;
      if (!validateSingleField(field)) {
        valid = false;
        if (!firstInvalid) firstInvalid = field;
      }
    });

    /* ── Radio-Gruppen validieren ── */
    ["transport_type", "transport_voucher"].forEach(function (name) {
      var radios  = form.querySelectorAll('input[name="' + name + '"]');
      var checked = Array.prototype.some.call(radios, function (r) { return r.checked; });
      if (!checked) {
        valid = false;
        var wrap = radios[0] && radios[0].closest(".form__radio-group");
        if (wrap) wrap.classList.add("is-error");
        if (!firstInvalid && radios[0]) firstInvalid = radios[0];
      }
    });

    /* ── Datenschutz-Checkbox validieren ── */
    var consent = form.querySelector("#form-consent");
    if (consent && !consent.checked) {
      valid = false;
      var consentWrap = consent.closest(".form__checkbox-item");
      if (consentWrap) consentWrap.classList.add("is-error");
      if (!firstInvalid) firstInvalid = consent;
    }

    if (!valid) {
      showStatus(statusBox, "is-error", "Bitte korrigieren Sie die markierten Felder, um fortzufahren.");
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
        firstInvalid.focus();
      }
      return;
    }

    /* Prüfe, ob EmailJS konfiguriert ist */
    var cfg = CONFIG.emailjs;
    if (
      cfg.publicKey  === "DEIN_PUBLIC_KEY"  ||
      cfg.serviceID  === "DEIN_SERVICE_ID"  ||
      cfg.templateID === "DEIN_TEMPLATE_ID"
    ) {
      showStatus(
        statusBox,
        "is-error",
        "EmailJS ist noch nicht konfiguriert. Bitte ersetzen Sie publicKey, serviceID und templateID in script.js."
      );
      return;
    }

    /* Prüfe, ob EmailJS SDK geladen wurde */
    if (typeof emailjs === "undefined") {
      showStatus(
        statusBox,
        "is-error",
        "Das Formularsystem konnte nicht geladen werden. Bitte kontaktieren Sie uns direkt per Telefon."
      );
      return;
    }

    hideStatus(statusBox);
    setLoading(submitBtn, btnText, spinner, true);

    emailjs
      .sendForm(cfg.serviceID, cfg.templateID, form)
      .then(function () {
        setLoading(submitBtn, btnText, spinner, false);
        showStatus(
          statusBox,
          "is-success",
          "Vielen Dank für Ihre Fahrtanfrage! Wir melden uns schnellstmöglich bei Ihnen. Das Team von Rifys Krankenbeförderung freut sich darauf, Sie sicher zu begleiten."
        );
        form.reset();
      })
      .catch(function (err) {
        setLoading(submitBtn, btnText, spinner, false);
        showStatus(
          statusBox,
          "is-error",
          "Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Telefon."
        );
        console.error("EmailJS Fehler:", err);
      });
  });
}

function setLoading(btn, textEl, spinnerEl, isLoading) {
  btn.disabled = isLoading;
  if (textEl)    textEl.textContent = isLoading ? "Wird gesendet…" : "Fahrt anfragen";
  if (spinnerEl) spinnerEl.hidden   = !isLoading;
}

function showStatus(el, cssClass, message) {
  if (!el) return;
  el.className = "form__status " + cssClass;
  el.textContent = message;
  el.hidden = false;
  el.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function hideStatus(el) {
  if (!el) return;
  el.hidden = true;
  el.className = "form__status";
  el.textContent = "";
}


/* ──────────────────────────────────────────────────────────
   BACK TO TOP
────────────────────────────────────────────────────────── */
function initBackToTop() {
  var btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    btn.hidden = window.scrollY < 400;
  }, { passive: true });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


/* ──────────────────────────────────────────────────────────
   NAV HIGHLIGHT — Aktive Sektion in der Navigation markieren
────────────────────────────────────────────────────────── */
function initNavHighlight() {
  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".nav__link");
  if (!sections.length || !navLinks.length) return;

  /* IntersectionObserver für smooth highlight ohne Scroll-Events */
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    },
    { rootMargin: "-35% 0px -60% 0px" }
  );

  sections.forEach(function (s) { observer.observe(s); });
}


/* ──────────────────────────────────────────────────────────
   FOOTER YEAR
────────────────────────────────────────────────────────── */
function setFooterYear() {
  var el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}


/* ──────────────────────────────────────────────────────────
   UTILITY HELPERS
────────────────────────────────────────────────────────── */

/**
 * Setzt textContent eines Elements nach ID.
 * @param {string} id
 * @param {string} text
 */
function setText(id, text) {
  var el = document.getElementById(id);
  if (el && typeof text === "string") el.textContent = text;
}

/**
 * Setzt innerHTML eines Elements nach ID.
 * NUR für developer-kontrollierte Werte aus CONFIG verwenden.
 * @param {string} id
 * @param {string} html
 */
function setHTML(id, html) {
  var el = document.getElementById(id);
  if (el && typeof html === "string") el.innerHTML = html;
}

/**
 * Verhindert XSS bei dynamisch eingefügtem Benutzertext.
 * @param {string} str
 * @returns {string}
 */
function escapeHTML(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g,  "&amp;")
    .replace(/</g,  "&lt;")
    .replace(/>/g,  "&gt;")
    .replace(/"/g,  "&quot;")
    .replace(/'/g,  "&#39;");
}
