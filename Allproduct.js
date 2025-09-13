const products1 = [
    {
        name: "Apple iPad Air 11 inch (M3) Wi-Fi + Cellular",
        price: "฿25,300 - ฿43,300",
        description: "Purple (2025)",
        image: "https://media-cdn.bnn.in.th/478556/iPad_Air_11-inch_M3_Cellular_Purple_1-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
        frame: "best-seller",
    },
    {
        name: "Apple iPad 11 (2025) A16 Wi-Fi + Cellular",
        price: "฿17,400 - ฿28,400",
        description: "Pink (11th Gen)",
        image: "https://media-cdn.bnn.in.th/478465/iPad_A16_Cellular_Pink_1-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "Apple iPad 11 (2025) A16 Wi-Fi",
        price: "฿11,400 - ฿22,400",
        description: " Blue (11th Gen)",
        image: "https://media-cdn.bnn.in.th/475441/iPad_A16_WiFi_Blue_1-square_medium.jpg",
        frame: "discount",
    },
    {
        name: "Apple iPad Mini 7 Wi-Fi",
        price: "฿14,900 - ฿25,900",
        description: "8.3 inch Blue (2024)",
        image: "https://media-cdn.bnn.in.th/437958/iPad_mini_Blue_WiFi-2-square_medium.jpg",
        frame: "new"
    },
    {
        name: "Apple iPad Mini 7 Wi-Fi + Cellular",
        price: "฿20,900 - ฿31,900",
        description: "8.3 inch Space Gray (2024)",
        image: "https://media-cdn.bnn.in.th/437938/iPad_mini_Space_Gray_Cellular-2-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "Samsung Galaxy S25 Ultra",
        price: "฿42,900 - ฿48,900",
        description: "6.9 inch | Snapdragon 8 Elite | Android 15 | 5,000 mAh | Warranty : 1 Year",
        image: "https://media-cdn.bnn.in.th/460544/samsung-galaxy-s25-ultra-12256-titanium-black-5g-8-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "Apple iPhone 16e White",
        price: "฿21,900 - ฿25,900",
        description: "ประหยัดไป ฿1,000",
        image: "https://media-cdn.bnn.in.th/470246/iPhone_16e_White_1-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "Apple MacBook Air 13 inch M4 chip (GPU/24GB)",
        price: "฿47,000",
        description: "ประหยัดไป ฿1,900",
        image: "https://media-cdn.bnn.in.th/476115/MacBook_Air_13-inch_M4_Non-AI_Mar25_Midnight_01-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "Apple Mac Studio : M3 Ultra chip (2025)",
        price: "฿139,900",
        description: "",
        image: "https://media-cdn.bnn.in.th/476051/Mac_Studio_M3_Ultra_M4_1-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "Apple Studio Display - Standard Glass",
        price: "฿54,900",
        description: "",
        image: "https://media-cdn.bnn.in.th/190712/Apple-Studio-Display-0-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "แท็บเล็ต Lenovo Tab M11 Luna Grey",
        price: "฿7,190 - ฿8,490",
        description: "Screen Size : 11 inch | RAM 4GB / ROM 128GB | Android 13 | 7,040 mAh | Warranty : 1 Year",
        image: "https://media-cdn.bnn.in.th/392203/lenovo-tablet-tab-m11-zadb0094th-luna-grey-1-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "เครื่องสำรองไฟ ZIRCON UPS AX 1000VA/550W",
        price: "฿1,490",
        description: "Capacity: 1000 VA / 550 W | Waveform Type: Modified Sine Wave",
        image: "https://media-cdn.bnn.in.th/178127/zircon-ups-ax-1000va-550w-3-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "จอมอนิเตอร์ Xiaomi Curved Gaming",
        price: "฿8,990",
        description: "34.0 inch | 3440 x 1440 @ 180 Hz | 1 ms | 21:9 | VA | AMD FreeSync Premium",
        image: "https://media-cdn.bnn.in.th/387560/Xiaomi-Curved-Monitor-G34WQi-VA-2K-180Hz-2-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "จอมอนิเตอร์ LG 24MR400-B FHD 3-Side Borderless (IPS 100Hz FreeSync)",
        price: "฿2,890",
        description: "23.8 inch | Panel: IPS | 1920 x 1080 @ 100 Hz | 1200:1 | 250 cd/m2 | Interface: 1x D-SUB, 1x HDMI",
        image: "https://media-cdn.bnn.in.th/353425/lg-24mr400-b-3-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "หูฟังไร้สาย OPPO Enco Air4 Pro Midnight Black",
        price: "฿2,999",
        description: "รองรับ Bluetooth 5.4 มีระบบกันน้ำได้ดีเยี่ยม หูฟังเเบตเตอรี่ใช้งานได้ยาวนาน",
        image: "https://media-cdn.bnn.in.th/475528/oppo-enco-buds3-pro-graphite-grey-01-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "ลำโพงบลูทูธ JBL Flip 6 Red",
        price: "฿4,670",
        description: "",
        image: "https://media-cdn.bnn.in.th/349997/JBL-Flip-6-Red-1-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },
    {
        name: "Samsung Galaxy A56",
        price: "฿13,999 - ฿15,999",
        description: "6.7 inch | Exynose 1580 | RAM 8GB / ROM 128GB | Android 15 | 5,000 mAh | Warranty 1 Year",
        image: "https://media-cdn.bnn.in.th/472900/samsung-smartphone-galaxy-a56-8128gb-green-5g-08-square_medium.jpg",
        // highlight: true // ✅ แสดงกรอบ
    },



];


const itemsPerPage = 16;
let currentPage = 1;
const searchInput = document.getElementById("search-input");
const searchInput1 = document.getElementById("search-input1");
const autocompleteList = document.getElementById("autocomplete-list");
const searchBtn = document.getElementById("search-btn");
const productList = document.getElementById("product-list");
const pagination = document.getElementById("pagination");

// 🧠 Render products
function renderProducts(page, productArray = products1) {
    productList.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const selected = productArray.slice(start, start + itemsPerPage);
    selected.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = `bg-white rounded-lg shadow p-4 opacity-0 transform translate-y-4 transition duration-700 ease-out`;
        const frameMap = {
            "best-seller": "https://media-cdn.bnn.in.th/508611/BNNFeedJul01_010725_310725-frame_label_square_medium.png",
            "discount": "https://media-cdn.bnn.in.th/512216/iPhone16Plus-frame_label_square_medium.png",
            "new": ""
        };

        card.innerHTML = `
  <div class="relative hover:cursor-pointer">
    <img class="w-fit" src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded">
    
    ${product.frame && frameMap[product.frame] ? `
      <img src="${frameMap[product.frame]}" 
           class="absolute inset-0 w-full h-full pointer-events-none z-10">
    ` : ""}
  </div>
  <h2 class="text-lg font-semibold mt-2">${product.name}</h2>
  <p class="text-gray-600">${product.description}</p>
  <p class="text-orange-600 font-bold mt-2">${product.price}</p>
`;
        productList.appendChild(card);
        setTimeout(() => card.classList.remove("opacity-0", "translate-y-4"), index * 30);
    });

}
// 📟 Render pagination
function renderPagination(productArray = products1) {
    pagination.innerHTML = "";
    const totalPages = Math.ceil(productArray.length / itemsPerPage);

    const createButton = (label, pageNum, active = false, disabled = false) => {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.className = `px-3 py-1 rounded border ${active ? "bg-orange-300 font-bold" : "bg-white hover:bg-orange-100"} ${disabled ? "text-gray-400 cursor-not-allowed" : ""}`;
        if (!disabled) {
            btn.addEventListener("click", () => {
                currentPage = pageNum;
                renderProducts(currentPage, productArray);
                renderPagination(productArray);
            });
        }
        pagination.appendChild(btn);
    };

    createButton("Prev", currentPage - 1, false, currentPage === 1);

    for (let i = 1; i <= totalPages; i++) {
        if (i <= 2 || i > totalPages - 2 || Math.abs(i - currentPage) <= 1) {
            createButton(i, i, i === currentPage);
        } else if (pagination.lastChild?.textContent !== "...") {
            const dots = document.createElement("span");
            dots.textContent = "...";
            dots.className = "px-2 text-gray-500";
            pagination.appendChild(dots);
        }
    }

    createButton("Next", currentPage + 1, false, currentPage === totalPages);
}

// 🔎 Autocomplete
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    autocompleteList.innerHTML = "";

    const matches = products1.filter(p => p.name.toLowerCase().includes(keyword));
    if (keyword && matches.length > 0) {
        autocompleteList.classList.remove("hidden");
        matches.slice(0, 6).forEach(p => {
            const item = document.createElement("li");
            item.textContent = p.name;
            item.className = "px-4 py-2 hover:bg-orange-100 cursor-pointer";
            item.addEventListener("click", () => {
                searchInput.value = p.name;
                autocompleteList.classList.add("hidden");
                prioritizeAndRender(p.name);
            });
            autocompleteList.appendChild(item);
        });
    } else {
        autocompleteList.classList.add("hidden");
    }
});

document.addEventListener("click", e => {
    if (!autocompleteList.contains(e.target) && e.target !== searchInput) {
        autocompleteList.classList.add("hidden");
    }
});

searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const exactMatch = products1.find(p => p.name.toLowerCase() === keyword);
    prioritizeAndRender(exactMatch ? exactMatch.name : keyword);
});

// 🪄 Prioritize matched product
function prioritizeAndRender(keyword) {
    const exact = products1.find(p => p.name.toLowerCase() === keyword.toLowerCase());
    const similar = products1.filter(p => p.name.toLowerCase().includes(keyword.toLowerCase()));

    const ordered = exact ? [exact, ...similar.filter(p => p !== exact)] : similar;

    if (ordered.length > 0) {
        renderProducts(1, ordered);
        renderPagination(ordered);
    } else {
        productList.innerHTML = `<div class="col-span-full text-center py-10 text-gray-500 text-lg">ไม่พบสินค้า</div>`;
        pagination.innerHTML = "";
    }
}

// 🚀 Load initial
renderProducts(currentPage);
renderPagination();


