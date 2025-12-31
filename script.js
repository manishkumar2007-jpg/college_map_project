    // ---------- DATA ----------
    const locations = [
      {
        name: "Chanakya",
        type: "Academic",
        description:
          "Chanakya block School of Law and School of Management.",
        lat: 10.730101,
        lng: 79.015196,
        tags: ["School", "Law", "Management"],
        path_boys:"go straight from arundati hostel main gate",
        path_girls:"from hostel entrance go straight upto Biotechnology block and take right you will reach near college bus parking again take left and go straight upto end of road the chanakya block can be reached",
        path_main:"from main campus entrance take right", 
    },
      {
        name: "Ahalya hostel",
        type: "Hostel",
        description: "Residential hostel block inside the main campus.",
        lat: 10.729366,
        lng: 79.014947,
        tags: ["hostel"],
        path_main:"take right first then take left and go straight",
      },
      {
        name: "Arundhati hostel",
        type: "Hostel",
        description: "Residential hostel block for students.",
        lat: 10.72899,
        lng: 79.015414,
        tags: ["hostel"],
        path_main:"take right first then take left and go straight",
      },
      {
        name: "SN Old hostel",
        type: "Hostel",
        description: "Srinivasa Nagar old hostel block.",
        lat: 10.728336,
        lng: 79.015154,
        tags: ["hostel"],
        path_main:"take right first then take left and go straight  after the passing arundathi S N old can be reached ",
      },
      {
        name: "SN New hostel",
        type: "Hostel",
        description: "New Srinivasa Nagar hostel complex.",
        lat: 10.727685,
        lng: 79.015185,
        tags: ["hostel"], 
       path_main:"take right first then take left and go straight  after the passing arundhati follow the paths from sn old",
      },
      {
        name: "Sath Vihar",
        type: "Academic",
        description: "Polytechnic block Sat Vihar.",
        lat: 10.729833,
        lng: 79.01602,
        tags: ["School"],
        path_main:"just tke right and the first block is sath vihar",
      },
      {
        name: "Sri Jaya Ganapathy Temple",
        type: "Temple",
        description: "Campus temple near Sat Vihar.",
        lat: 10.729526,
        lng: 79.016342,
        tags: ["Temple"],
        path_boys:"from hostle entrance take right and go straight then take left ",
        path_girls:"go straight from hostel gate upto biotechnology block and take right next take left and follow the path after turning right go straight",
        path_main:"go straight on right half temple will be there",
      },
      {
        name: "Vinaya block 1 hostel",
        type: "Hostel",
        description: "Vinaya hostel block 1.",
        lat: 10.732238,
        lng: 79.015362,
        tags: ["hostel"],
        path_main:"the hostel was opposite to the main campus on other side of the road cross bridge safetly and you can see the hostel exact opposite to chaanakya block",
      },
      {
        name: "Vinaya block 2 hostel",
        type: "Hostel",
        description: "Vinaya hostel block 2.",
        lat: 10.732921,
        lng: 79.01516,
        tags: ["hostel"],
        path_main:"the hostel was opposite to the main campus on other side of the road cross bridge safetly and you can see the hostel exact opposite to chaanakya block",
      },
      {
        name: "Vinaya block 3 hostel",
        type: "Hostel",
        description: "Vinaya hostel block 3.",
        lat: 10.733551,
        lng: 79.015041,
        tags: ["hostel"],
       path_main:"the hostel was opposite to the main campus on other side of the road cross bridge safetly and you can see the hostel exact opposite to chaanakya block",
      },
      {
        name: "Main entrance gate",
        type: "Gate",
        description: "Primary entrance from Trichy–Thanjavur road.",
        lat: 10.730317,
        lng: 79.016575,
        tags: ["Gate"],
      },
      {
        name: "Gana Vihar",
        type: "Admin",
        description: "Dean, Students Welfare's office.",
        lat: 10.729685,
        lng: 79.016942,
        tags: ["Office"],
        path_boys:"from hostel gate go straight and take right again go straight you can see the block near CUB ATM and opposite to parking area",
        path_girls:"from hostel entrance go straight upto Biotechnology block and take right you will reach near college bus parking again take left and go straight the block was near the CUB ATM and opposite to parking area",
        path_main:"take left and it was just near to the CUB ATM",
      },
      {
        name: "Registrar's office",
        type: "Admin",
        description: "Central administrative and registrar office.",
        lat: 10.729372,
        lng: 79.016634,
        tags: ["Office"],
        path_boys:"from hostle entrance take right and go straight then take left on right side block the office is there on first floor ",
        path_girls:"go straight from hostel gate upto biotechnology block and take right next take left and follow the path after turning right go straight on right side block the office is there on first floor",
        path_main:"go straight on right side block the office is there on first floor",
      },
      {
        name: "Nirmal Vihar",
        type: "Academic",
        description: "School of Civil Engineering.",
        lat: 10.727707,
        lng: 79.017024,
        tags: ["School", "Civil"],
        path_boys:"from hostel entrance take right and go ahead and again take right and go straight take left the block was on the right side opposite to the play groung",
        path_girls:"go straight from hostel gate upto biotechnology block and take right next take left and follow the path the block was on the left side opposite to play ground",
        path_main:"go straight and follow straight path take left the block was on the right side opposite to the play groung",
      },
      {
        name: "Jeeva Chaitanya Block",
        type: "Academic",
        description: "School of Biotechnology.",
        lat: 10.727436,
        lng: 79.018103,
        tags: ["School", "Biotechnology"],
        path_boys:"from hostel entrance take right and go ahead and again take right and go straight take left and again go straight then take left you will be reached",
        path_girls:"go straight and follow the road the block exact opposite to the turngo",
        path_main:" straight and again follow straight path take left go straight then take left you will be reached",
      },
      {
        name: "Vidyut Vihar",
        type: "Academic",
        description: "School of Electrical and Electronics Engineering.",
        lat: 10.727167,
        lng: 79.019446,
        tags: ["School", "EEE"],
        path_boys:"from hostel entrance take right and go ahead and again take right and go straight take left and again go straight then take left next take right and go ahead the block was on left side",
        path_girls:"go straight and follow the path after passing the KC canteen the block was on right side",
        path_main:" straight and again follow straight path take left go straight then take left next take right and go ahead the block was on left side",
      },
      {
        name: "Vishwakarma Joth",
        type: "Academic",
        description: "School of Mechanical Engineering.",
        lat: 10.727126,
        lng: 79.020864,
        tags: ["School", "Mechanical"],
        path_boys:"from hostel entrance take right and go ahead and again take right and go straight take left and again go straight then take left next take right and go straight after passing KC the block was on left side",
        path_girls:"go straight fron hostel gate and on right side the block is ther",
        path_main:" straight and again follow straight path take left go straight then take left next take right and go straight after passing th KC the block was on left side",
      },
      {
        name: "Student Activity Center",
        type: "Recreation",
        description: "Gym and student activity center.",
        lat: 10.728106,
        lng: 79.018298,
        tags: ["Center", "Gym"],
        path_boys:"from hostel entrance take right and go ahead and again take right and go straight take left and again go straight then take right opposite side of J V C path you will be reached",
        path_girls:"go straight and follow straight path take left and go ahead the block was on left side",
      },
      {
        name: "Vidhya Vihar",
        type: "Academic",
        description: "School of Education.",
        lat: 10.729273,
        lng: 79.018187,
        tags: ["School", "Education"],
        path_main:"take left and go straight don't take any turn the block was opposite to the college bus parking",
      },
      {
        name: "Vignana Vihar",
        type: "Facility",
        description: "Hospital, shop, tailor, and Xerox center.",
        lat: 10.72922,
        lng: 79.019006,
        tags: ["Hospital", "Shop"],
        path_boys:"from hostel gate go straight and take right again go straight without taking any further turn after crossing 2 road turns the block was on right side the shops are on first floor and the hostipal was on ground floor on right side",
        path_girls:"from road side hostel gate go straight and on right side the block is there",
        path_main:" take right go straight without taking any further turn after crossing 2 road turns the block was on right side",
      },
      {
        name: "Cith Vihar",
        type: "Academic",
        description: "CITH block.",
        lat: 10.729328,
        lng: 79.019547,
        tags: ["School"],
        path_boys:"from hostel gate go straight and take right again go straight without taking any further turn after crossing 2 road turns the block was on right side after Vignana vihar",
        path_girls:"from road side hostel gate go straight and on right side the block is ther",
        path_main:"take right go straight without taking any further turn after crossing 2 road turns the block was on right side",
      },
      {
        name: "TIFAC CORE",
        type: "Center",
        description: "TIFAC Core research facility.",
        lat: 10.729308,
        lng: 79.020247,
        tags: ["Center"],
        path_boys:"from hostel gate go straight and take right again go straight without taking any further turn  the last block on right side was TIFAC core",
        path_girls:"from road side hostel gate go straight the first block on right side was TIFAC core",
        path_main:"take right go straight without taking any further turn the last block on right side was TIFAC core",
      },
      {
        name: "Knowledge Resource Center",
        type: "Library",
        description: "Central library of SASTRA.",
        lat: 10.72827,
        lng: 79.020092,
        tags: ["Center", "Library"],
        path_boys:"from hostel gate take right andd go straight without any turn you can see foot path along the way go straight finally take right turn the library was just opposite to football ground",
        path_girls:"from the hostel gate go straight and turn right from KC go straight library was on right side",
        path_main:"take right from the main entrance and then turn right on the first road go straight and turn left go straight along the foot path without any further turn then take right turn the library was just opposite to football ground",
      },
      {
        name: "Lecture Theater Complex",
        type: "Academic",
        description: "Lecture Theater Complex (LTC).",
        lat: 10.727827,
        lng: 79.020112,
        tags: ["School"],
        path_boys:"follow the path upto VKJ and turn left the block was on left side",
        path_girls:"from hostel gate go straight and take right turn opposite to VKJ the  block on left side was LTC",
        path_main:"follow the path upto VKJ and turn left the block was on left side",
      },
      {
        name: "School Of Computing",
        type: "Academic",
        description: "School of Computing (SoC).",
        lat: 10.728704,
        lng: 79.020049,
        tags: ["School", "Computing"],
        path_boys:"from hostel gate take right andd go straight without any turn you can see foot path along the way go straight finally take left turn and one right turn then go straight the block entrence was on right side",
        path_girls:"from hostel gate go straight and take right turn opposite to VKJ go straight again the block on left side was S O C",
        path_main:"take right from the main entrance and then turn right on the first road go straight and turn left go straight along the foot path without any further turn then take left turn and one right turn then go straight the block entrence was on right side",
      },
      {
        name: "SHASHE",
        type: "Academic",
        description: "School of Management (SHASHE).",
        lat: 10.728133,
        lng: 79.020679,
        tags: ["School", "Management"],
        path_boys:"follow the path upto VKJ and take left turn the block on the right side was SHASHE",
        path_girls:"from hostel gate go straight and take right turn opposite to VKJ the  block on right side was SHASHE",
        path_main:"follow the path upto VKJ and take left turn the block on the right side was SHASHE",
      },
      {
        name: "New Krishna Canteen",
        type: "Food",
        description: "KC - campus canteen.",
        lat: 10.727206,
        lng: 79.020046,
        tags: ["Canteen", "Food"],
        path_boys:"from hostel entrance take right and go ahead and again take right and go straight take left and again go straight then take left next take right and go straight after passing VV the canteen was on left side",
        path_girls:"from hostel gate go straight without any turn the entre left side entrance ",
        path_main:" straight and again follow straight path take left go straight then take left next take right and go straight after passing VV the canteen was on left side",
      },
      {
        name: "Technology Development Center",
        type: "Center",
        description: "Technology Development Center (TDC).",
        lat: 10.728753,
        lng: 79.020751,
        tags: ["Center"],
        path_boys:"from hostel gate take right andd go straight without any turn you can see foot path along the way go straight finally take left turn and one right turn then go straight you can see T D C on right side",
        path_girls:"from hostel gate go straight and take right turn opposite to VKJ go straight again the block on right side was T D C",
        path_main:"take right from the main entrance and then turn right on the first road go straight and turn left go straight along the foot path without any further turn then take left turn and one right turn then go straight you can see T D C on right side",
      },
      {
        name: "Marathi Indoor Stadium",
        type: "Sports",
        description: "Indoor sports complex.",
        lat: 10.727784,
        lng: 79.021199,
        tags: ["Sports"],
        path_boys:"follow the path for VKJ from hostel and go ahead the stadium is on the left side",
        path_girls:"from hostel gate go straight and the stadium was on right side near the turn",
        path_main:"follow the path for VKJ from main gate and go ahead the stadium is on the left side",
      },
      {
        name: "A S K 1",
        type: "Research block",
        description: "A S K 1 Research block.",
        lat: 10.727095,
        lng: 79.021821,
        tags: ["Research block"],
        path_boys:"followw the path for VKJ from hostel and go straight and turn left the blue colour block on left side was A S K 1",
        path_girls:"from hostel gate take left turn and go straight and again turn left the blue colour block on left side was A S K 1",
        path_main:"follow the path for VKJ from main gate and go straight and turn left the blue colour block on left side was A S K 1",
      },
      {
        name: "A S K 2",
        type: "Research block",
        description: "A S K 2 Research block.",
        lat: 10.726292,
        lng: 79.021839,
        tags: ["Research block"],
        path_boys:"followw the path for VKJ from hostel and go straight and turn left the blue colour block on right side was A S K 2",
        path_girls:"from hostel gate take left turn and go straight and again turn left the blue colour block on right side was A S K 2",
        path_main:"follow the path for VKJ from main gate and go straight and turn left the blue colour block on right side was A S K 2",
      },
      {
        name: "A S K 3",
        type: "Research block",
        description: "A S K 3 Research block.",
        lat: 10.72695,
        lng: 79.022354,
        tags: ["Research block"],
        path_boys:"followw the path for VKJ from hostel and go straight and turn left the blue colour block on left side was A S K 3",
        path_girls:"from hostel gate take left turn and go straight and again turn left the blue colour block on left side was A S K 3",
        path_main:"follow the path for VKJ from main gate and go straight and turn left the blue colour block on left side was A S K 3",
      },
      {
        name: "A S K 4",
        type: "Research block",
        description: "A S K 4 Research block.",
        lat: 10.726541,
        lng: 79.022393,
        tags: ["Research block"],
        path_boys:"followw the path for VKJ from hostel and go straight and turn left the blue colour block on right side was A S K 4",
        path_girls:"from hostel gate take left turn and go straight and again turn left the blue colour block on right side was A S K 4",
        path_main:"follow the path for VKJ from main gate and go straight and turn left the blue colour block on right side was A S K 4",
      },
      {
        name: "Hostel Mega",
        type: "Hostel",
        description: "Mega hostel complex(Girls hostel).",
        lat: 10.728299,
        lng: 79.022012,
        tags: ["hostel"],
        path_main:"take right and go straight to the end of road the hostel was on right side enter through the gate hostel",
      },
      {
        name: "PV hostel",
        type: "Hostel",
        description: "PV hostel block(Girls hostel).",
        lat: 10.72905,
        lng: 79.022694,
        tags: ["hostel"],
        path_main:"take right and go straight to the end of road the hostel was on right side enter through the gate hostel",
      },
    ];
    // ---------- MAP ----------
    const map = L.map("map", {
      zoomControl: true,
      minZoom: 16,
      maxZoom: 19,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    }).addTo(map); // Tile URL pattern follows Leaflet quick-start example.[web:3]

    const markerLayer = L.layerGroup().addTo(map);
    const markersByName = new Map();

    // Restrict view to campus bounding box
    const southWest = L.latLng(10.7255, 79.0138);
    const northEast = L.latLng(10.7345, 79.0235);
    const bounds = L.latLngBounds(southWest, northEast);
    map.fitBounds(bounds);
    map.setMaxBounds(bounds.pad(0.02));

    const iconColors = {
      Hostel: "#22c55e",
      Academic: "#3b82f6",
      Library: "#a855f7",
      Center: "#f97316",
      Sports: "#eab308",
      Food: "#ec4899",
      Admin: "#38bdf8",
      Temple: "#f97316",
      Gate: "#6366f1",
      Facility: "#10b981",
      Recreation: "#06b6d4",
      Research:"#ffa500",
    };

    function createMarker(location) {
      const color =
        iconColors[location.type] || "#e5e7eb";

      const markerHtml = `
        <div style="
          background:${color};
          width:12px;height:12px;border-radius:999px;
          border:2px solid #020617;
          box-shadow:0 0 0 2px rgba(15,23,42,0.7);
        "></div>
      `;

      const icon = L.divIcon({
        className: "",
        html: markerHtml,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      });

      const marker = L.marker([location.lat, location.lng], { icon }).addTo(
        markerLayer
      );

      marker.on("click", () => openLocation(location.name));

      markersByName.set(location.name.toLowerCase(), marker);
    }

    locations.forEach(createMarker);

    //SIDEBAR LIST
    const locationListEl = document.getElementById("locationList");

    function renderLocationList(filtered = locations) {
      locationListEl.innerHTML = "";

      filtered.forEach((loc) => {
        const item = document.createElement("button");
        item.className = "location-item";
        item.dataset.name = loc.name;
        item.innerHTML = `
          <span>${loc.name}</span>
          <small>${loc.type}</small>
        `;
        item.addEventListener("click", () => openLocation(loc.name));
        locationListEl.appendChild(item);
      });
    }

    renderLocationList();

    function setActiveLocation(name) {
      document
        .querySelectorAll(".location-item")
        .forEach((el) =>
          el.classList.toggle("active", el.dataset.name === name)
        );
    }

    // ---------- MODAL & NAVIGATION ----------
    const modalBackdrop = document.getElementById("infoModalBackdrop");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalMeta = document.getElementById("modalMeta");
    const modalCloseBtn = document.getElementById("modalCloseBtn");
    const modalNavBtn = document.getElementById("modalNavBtn");
    let modalCurrentLocation = null;

    function openLocation(name) {
      const loc = locations.find(
        (l) => l.name.toLowerCase() === name.toLowerCase()
      );
      if (!loc) return;

      modalCurrentLocation = loc;
      setActiveLocation(loc.name);
      map.setView([loc.lat, loc.lng], 18, { animate: true });

      modalTitle.textContent = loc.name;
      modalDesc.textContent = loc.description;
      modalMeta.textContent = `${loc.type} • Lat ${loc.lat.toFixed(
      6)}, Lng ${loc.lng.toFixed(6)}`;
      modalBackdrop.style.display = "flex";

      speakText(
        `${loc.name}. ${loc.description}. Say "start navigation" to get voice guidance.`
      );
    }

    function closeModal() {
      modalBackdrop.style.display = "none";
    }

    modalCloseBtn.addEventListener("click", closeModal);
    modalBackdrop.addEventListener("click", (e) => {
      if (e.target === modalBackdrop) closeModal();
    });

    modalNavBtn.addEventListener("click", () => {
      if (modalCurrentLocation) {
        startNavigationTo(modalCurrentLocation);
        closeModal();
      }
    });

    function startNavigationTo(loc) {
      const instruction = `Navigating to ${loc.name}. for boys ${loc.path_boys}. for girls ${loc.path_girls}. from main campus gate ${loc.path_main}`;
      document.getElementById(
        "status"
      ).textContent = `Navigation to ${loc.name} is active.`;
      speakText(instruction);
      map.setView([loc.lat, loc.lng], 18, { animate: true });
    }

    //TEXT SEARCH
    const searchInput = document.getElementById("searchInput");

    function performSearch(query) {
      const q = query.trim().toLowerCase();
      if (!q) {
        renderLocationList();
        setActiveLocation(null);
        document.getElementById("status").textContent =
          "Showing all locations.";
        return;
      }

      const filtered = locations.filter((loc) => {
        const inName = loc.name.toLowerCase().includes(q);
        const inType = loc.type.toLowerCase().includes(q);
        const inTags =
          loc.tags && loc.tags.some((t) => t.toLowerCase().includes(q));
        return inName || inType || inTags;
      });

      if (!filtered.length) {
        renderLocationList([]);
        document.getElementById(
          "status"
        ).textContent = `No match found for “${query}”.`;
        speakText(`No match found for ${query}.`);
        return;
      }

      renderLocationList(filtered);
      document.getElementById(
        "status"
      ).textContent = `Showing ${filtered.length} result(s) for “${query}”.`;

      // Auto-focus first result and center map
      const top = filtered[0];
      setActiveLocation(top.name);
      map.setView([top.lat, top.lng], 18, { animate: true });
      speakText(`Found ${filtered.length} places. Focusing on ${top.name}.`);
    }

    searchInput.addEventListener("input", (e) => {
      performSearch(e.target.value);
    });

    // Quick chips
    document.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        const q = chip.dataset.query || "";
        searchInput.value = q;
        performSearch(q);
      });
    });

    // AI-LIKE INTENT HANDLER (RULE-BASED)
    function interpretCommand(text) {
      const lower = text.toLowerCase();

      // Navigation intent
      if (lower.startsWith("navigate to")) {
        const targetName = lower.replace("navigate to", "").trim();
        if (!targetName) {
          speakText("Please say the destination name after navigate to.");
          return;
        }
        const dest = fuzzyFindLocation(targetName);
        if (dest) {
          startNavigationTo(dest);
        } else {
          speakText(`Unable to find ${targetName} in the campus map.`);
        }
        return;
      }

      if (lower.startsWith("search") || lower.startsWith("find")) {
        const q = lower.replace("search", "").replace("find", "").trim();
        if (!q) {
          speakText("What should be searched in the campus?");
          return;
        }
        searchInput.value = q;
        performSearch(q);
        return;
      }

      // Fallback: treating as location name directly
      const loc = fuzzyFindLocation(lower);
      if (loc) {
        openLocation(loc.name);
      } else {
        speakText("Command not understood. Try 'navigate to School of Computing'.");
      }
    }

    function fuzzyFindLocation(fragment) {
      const f = fragment.toLowerCase().trim();
      if (!f) return null;
      // Exact name
      let loc =
        locations.find((l) => l.name.toLowerCase() === f) ||
        locations.find((l) => l.name.toLowerCase().includes(f));

      // Trying with friendly aliases
      if (!loc) {
        if (f.includes("soc") || f.includes("computing")) {
          loc = locations.find(
            (l) => l.name === "School Of Computing"
          );
        } else if (f.includes("library")) {
          loc = locations.find(
            (l) => l.name === "Knowledge Resource Center"
          );
        } else if (f.includes("canteen") || f.includes("kc")) {
          loc = locations.find(
            (l) => l.name === "New Krishna Canteen"
          );
        }
      }
      return loc || null;
    }

    // VOICE: SPEECH SYNTHESIS
    function speakText(text) {
      if (!("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.lang = "en-IN";
      window.speechSynthesis.speak(utterance);
    }

    document
      .getElementById("stopVoiceBtn")
      .addEventListener("click", () => {
        if ("speechSynthesis" in window) {
          window.speechSynthesis.cancel();
        }
        if (recognition) recognition.stop();
        document.getElementById("status").textContent =
          "Voice guidance and recognition stopped.";
      });

    // ---------- VOICE: SPEECH RECOGNITION ----------
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition; // Pattern follows standard Web Speech API usage.[web:11]
    let recognition = null;
    let recognitionActive = false;

    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.lang = "en-IN";
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.addEventListener("result", (event) => {
        let transcript = "";
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            transcript = res[0].transcript.trim();
          }
        }
        if (transcript) {
          document.getElementById(
            "status"
          ).textContent = `Heard: "${transcript}"`;
          interpretCommand(transcript);
        }
      });

      recognition.addEventListener("end", () => {
        if (recognitionActive) {
          recognition.start(); // Restart for continuous interaction.
        }
      });
    } else {
      document.getElementById("status").textContent =
        "Speech recognition is not supported in this browser.";
    }

    const voiceNavBtn = document.getElementById("voiceNavBtn");
    voiceNavBtn.addEventListener("click", () => {
      if (!recognition) {
        speakText("Voice recognition is not supported in this browser.");
        return;
      }
      if (!recognitionActive) {
        recognitionActive = true;
        recognition.start();
        document.getElementById("status").textContent =
          "Voice navigation listening. Say “navigate to Vinaya block 3 hostel”.";
        speakText(
          "Voice navigation started. You can say, navigate to School of Computing or search hostels."
        );
        voiceNavBtn.textContent = "🎧 Listening… tap to pause";
      } else {
        recognitionActive = false;
        recognition.stop();
        document.getElementById("status").textContent =
          "Voice navigation paused.";
        voiceNavBtn.textContent = "🎧 Start voice navigation";
      }
    });

    const voiceSearchBtn = document.getElementById("voiceSearchBtn");
    voiceSearchBtn.addEventListener("click", () => {
      if (!recognition) {
        speakText("Voice search is not supported in this browser.");
        return;
      }
      if (!recognitionActive) {
        recognitionActive = true;
        recognition.start();
        document.getElementById("status").textContent =
          "Voice search listening. Say the block or hostel name.";
        speakText("Say the name of the block or hostel to search.");
        voiceNavBtn.textContent = "🎧 Listening… tap to pause";
      } else {
        recognitionActive = false;
        recognition.stop();
        document.getElementById("status").textContent =
          "Voice search stopped.";
        voiceNavBtn.textContent = "🎧 Start voice navigation";
      }
    });

    // Keep map size correct on resize
    window.addEventListener("resize", () => {
      map.invalidateSize();
    });