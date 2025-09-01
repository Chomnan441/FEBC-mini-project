// checkout.js

// 1. รายชื่อจังหวัดไทย สำหรับ autocomplete
const THAI_PROVINCES = [
    "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร",
    "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา", "ชลบุรี", "ชัยนาท", "ชัยภูมิ",
    "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง", "ตราด", "ตาก", "นครนายก",
    "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์",
    "นนทบุรี", "นราธิวาส", "น่าน", "บึงกาฬ", "บุรีรัมย์", "ประจวบคีรีขันธ์",
    "ปทุมธานี", "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา", "พังงา",
    "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่",
    "พะเยา", "ภูเก็ต", "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน", "ยโสธร",
    "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี", "ลพบุรี", "ลำปาง",
    "ลำพูน", "เลย", "ศรีสะเกษ", "สกลนคร", "สงขลา", "สมุทรสาคร",
    "สมุทรปราการ", "สมุทรสงคราม", "สระแก้ว", "สระบุรี", "สิงห์บุรี",
    "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี", "สุรินทร์", "หนองคาย",
    "หนองบัวลำภู", "อำนาจเจริญ", "อุดรธานี", "อุตรดิตถ์", "อุทัยธานี",
    "อุบลราชธานี"
];

// 2. นำฟังก์ชัน getProductImage มาจาก cart.js (หรือตามที่คุณกำหนด)
function getProductImage(productId) {
    switch (productId) {
        case 1_1:
            return "https://media-cdn.bnn.in.th/460544/samsung-galaxy-s25-ultra-12256-titanium-black-5g-8-square_medium.jpg";
        case 1_2:
            return "https://media-cdn.bnn.in.th/460570/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-10-square_medium.jpg";
        case 1_3:
            return "https://media-cdn.bnn.in.th/460544/samsung-galaxy-s25-ultra-12256-titanium-black-5g-8-square_medium.jpg";
        case 1_4:
            return "https://media-cdn.bnn.in.th/460570/samsung-smartphone-galaxy-s25-ultra-121tb-titanium-silver-5g-10-square_medium.jpg";
        default:
            return "https://via.placeholder.com/80?text=ไม่มี+รูป";
    }
}

// 3. แสดงรายการสินค้าใน checkout
function renderOrderItems() {
    const items = JSON.parse(localStorage.getItem("checkoutItems")) || [];
    const container = document.getElementById("order-items");
    if (!items.length) {
        container.innerHTML = `
      <div class="p-4 text-center text-gray-600">
        ไม่มีสินค้าในการชำระ
      </div>`;
        return;
    }

    let total = 0;
    const html = items.map(item => {
        const sub = item.price * item.quantity;
        total += sub;
        const img = getProductImage(item.id);
        return `
      <div class="flex items-center justify-between py-3 border-b">
        <div class="flex items-center">
          <img src="${img}"
               alt="${item.name}"
               class="w-16 h-16 object-cover rounded mr-4" />
          <div>
            <p class="font-medium">${item.name}</p>
            <p class="text-sm text-gray-500">x ${item.quantity}</p>
          </div>
        </div>
        <div class="font-medium">${sub.toLocaleString()} บาท</div>
      </div>`;
    }).join("");

    container.innerHTML = `
    ${html}
    <div class="flex justify-between py-3 text-lg font-semibold">
      <div>รวมทั้งสิ้น</div>
      <div>${total.toLocaleString()} บาท</div>
    </div>`;
}

// 4. แสดงฟอร์มที่อยู่ พร้อมรายการที่อยู่ที่บันทึกไว้และปุ่มลบ
function renderAddressSection() {
    const saved = JSON.parse(localStorage.getItem("savedAddresses")) || [];
    const section = document.getElementById("address-section");

    let html = "";

    // 4.1 ถ้ามีที่อยู่เก่า ให้เลือก แล้วแสดงลิสต์พร้อมปุ่มลบ
    if (saved.length) {
        // dropdown เลือกที่อยู่เดิม
        html += `
      <select id="addr-select" class="w-full p-2 border rounded mb-3">
        <option value="">-- เลือกที่อยู่เดิม --</option>
        ${saved.map((a, i) =>
            `<option value="${i}">${a.name}, ${a.addrLine}, ${a.city}, ${a.province}</option>`
        ).join("")}
      </select>
    `;

        // ลิสต์ที่อยู่พร้อมปุ่มลบ
        html += `<ul class="mb-4 space-y-2">`;
        saved.forEach((a, i) => {
            html += `
        <li class="flex justify-between items-center p-2 border rounded">
          <div class="text-sm">
            <p>${a.name}</p>
            <p>${a.addrLine}, ${a.city}, ${a.province} ${a.postal}</p>
            <p>โทร. ${a.tel}</p>
          </div>
          <button
            onclick="deleteSavedAddress(${i})"
            class="text-red-500 hover:text-red-700 ml-4"
            title="ลบที่อยู่นี้"
          >
            🗑️
          </button>
        </li>`;
        });
        html += `</ul>`;
    }

    // 4.2 ฟอร์มกรอกที่อยู่ใหม่
    html += `
    <div id="new-address" class="space-y-2">
      <input type="text" id="name"
             placeholder="ชื่อ-นามสกุล"
             class="w-full p-2 border rounded" required />
      <input type="text" id="addrLine"
             placeholder="ที่อยู่ (บ้านเลขที่, ถนน)"
             class="w-full p-2 border rounded" required />
      <input type="text" id="city"
             placeholder="อำเภอ/เขต"
             class="w-full p-2 border rounded" required />
      <div class="relative">
        <input type="text" id="province"
               placeholder="จังหวัด"
               autocomplete="off"
               class="w-full p-2 border rounded" required />
        <ul id="province-suggestions"
            class="absolute left-0 right-0 bg-white border border-gray-300 mt-1
                   rounded max-h-40 overflow-y-auto shadow-lg z-20 hidden"></ul>
      </div>
      <input type="text" id="postal"
             placeholder="รหัสไปรษณีย์"
             class="w-full p-2 border rounded" required />
      <input type="tel" id="tel"
             placeholder="เบอร์โทรศัพท์"
             class="w-full p-2 border rounded" required />
      <label class="inline-flex items-center mt-2">
        <input type="checkbox" id="save-address" class="form-checkbox border-2 border-black" />
        <span class="ml-2">บันทึกที่อยู่นี้สำหรับครั้งต่อไป</span>
      </label>
    </div>
  `;

    section.innerHTML = html;

    // 4.3 ผูก event ให้ select เก่าเติมข้อมูล
    const sel = document.getElementById("addr-select");
    if (sel) {
        sel.addEventListener("change", () => {
            const a = saved[sel.value];
            if (a) {
                document.getElementById("name").value = a.name;
                document.getElementById("addrLine").value = a.addrLine;
                document.getElementById("city").value = a.city;
                document.getElementById("province").value = a.province;
                document.getElementById("postal").value = a.postal;
                document.getElementById("tel").value = a.tel;
            }
        });
    }
    // ช่องเบอร์โทรศัพท์รับเฉพาะตัวเลข ไม่เกิน 10 หลัก และมี เครื่องหมายขีด (-) ระหว่างหลักที่ 3 และ 4
    const telInput = document.getElementById("tel");

    telInput.addEventListener("input", function (e) {
        let value = e.target.value.replace(/\D/g, ""); // ลบทุกตัวที่ไม่ใช่ตัวเลข
        value = value.slice(0, 10); // จำกัดแค่ 10 ตัวเลข

        // ใส่ขีดหลังหลักที่ 3
        if (value.length > 3) {
            value = value.slice(0, 3) + "-" + value.slice(3);
        }

        e.target.value = value;
    });
}

// 5. ฟังก์ชันลบที่อยู่จาก savedAddresses
function deleteSavedAddress(index) {
    const savedKey = "savedAddresses";
    let saved = JSON.parse(localStorage.getItem(savedKey)) || [];

    // ยืนยันก่อนลบ
    if (!confirm("ต้องการลบที่อยู่นี้จริงหรือไม่?")) return;

    // ลบ element ตาม index
    saved.splice(index, 1);
    localStorage.setItem(savedKey, JSON.stringify(saved));

    // รีเรนเดอร์ฟอร์มที่อยู่ใหม่
    renderAddressSection();
}

// 5. สลับฟอร์มบัตรกับ PayPal
function setupPaymentToggle() {
    document.getElementsByName("payment").forEach(radio => {
        radio.addEventListener("change", () => {
            const isCard = document.querySelector("input[name=payment]:checked").value === "card";
            document.getElementById("card-fields").classList.toggle("hidden", !isCard);
            document.getElementById("paypal-button").classList.toggle("hidden", isCard);
        });
    });
}

// 6. Autocomplete จังหวัด
function setupProvinceAutocomplete() {
    const input = document.getElementById("province");
    const listEl = document.getElementById("province-suggestions");

    input.addEventListener("input", () => {
        const q = input.value.trim().toLowerCase();
        listEl.innerHTML = "";
        if (!q) return listEl.classList.add("hidden");

        const matches = THAI_PROVINCES.filter(p => p.toLowerCase().includes(q));
        if (!matches.length) return listEl.classList.add("hidden");

        matches.forEach(p => {
            const li = document.createElement("li");
            li.textContent = p;
            li.className = "px-4 py-2 cursor-pointer hover:bg-gray-100";
            li.addEventListener("mousedown", e => {
                e.preventDefault(); // ป้องกัน blur ก่อน set value
                input.value = p;
                listEl.classList.add("hidden");
            });
            listEl.appendChild(li);
        });
        listEl.classList.remove("hidden");
    });

    document.addEventListener("click", e => {
        if (!input.contains(e.target) && !listEl.contains(e.target)) {
            listEl.classList.add("hidden");
        }
    });
}


// หลังฟังก์ชัน handleSubmit() เดิม ให้เพิ่ม:

function showThankYou() {
    document.getElementById("thankyou-modal")
        .classList.remove("hidden");

}

function closeThankYou() {
    document.getElementById("thankyou-modal")
        .classList.add("hidden");
    // ถ้าต้องการ redirect ไปหน้าอื่นให้ใส่ตรงนี้
    // window.location.href = "thank-you.html";
}

function setupPaymentToggle() {
    const cardFields = document.getElementById("card-fields");
    const paypalBtn = document.getElementById("paypal-button");

    document.getElementsByName("payment").forEach(radio => {
        radio.addEventListener("change", () => {
            const isCard = document.querySelector("input[name=payment]:checked").value === "card";

            // แสดง/ซ่อนกลุ่ม
            cardFields.classList.toggle("hidden", !isCard);
            paypalBtn.classList.toggle("hidden", isCard);

            // ENABLE/DISABLE ฟิลด์ในกลุ่ม
            cardFields.querySelectorAll("input").forEach(i => {
                i.disabled = !isCard;
                // ถ้าจะเอา required ออกตอนซ่อน ก็ทำให้ required = isCard
                i.required = isCard;
            });

            // หากมีฟิลด์ PayPal (เช่น <input> หรือ SDK) ก็ disable/required ตามต้องการ
            // ตัวอย่างถ้าใช้ PayPal SDK ไม่มี input ก็ไม่ต้องจัดการ
        });
    });
}

// 7. ส่งข้อมูลเมื่อกดปุ่ม submit
function handleSubmit(e) {
    e.preventDefault();

    const items = JSON.parse(localStorage.getItem("checkoutItems")) || [];
    const shipping = {
        name: document.getElementById("name").value.trim(),
        addrLine: document.getElementById("addrLine").value.trim(),
        city: document.getElementById("city").value.trim(),
        province: document.getElementById("province").value.trim(),
        postal: document.getElementById("postal").value.trim(),
        tel: document.getElementById("tel").value.trim()
    };
    const paymentMethod = document.querySelector("input[name=payment]:checked").value;

    // บันทึกที่อยู่ใหม่ถ้าเลือก
    if (document.getElementById("save-address").checked) {
        const key = "savedAddresses";
        const saved = JSON.parse(localStorage.getItem(key)) || [];
        saved.push(shipping);
        localStorage.setItem(key, JSON.stringify(saved));
    }

    const orderInfo = { items, shipping, paymentMethod };
    console.log("Order Info:", orderInfo);

    //   alert("สั่งซื้อเรียบร้อย! (ยังไม่ได้เชื่อม API จริง)");

    //   localStorage.removeItem("cart");
    //   localStorage.removeItem("checkoutItems");
    // ล้างตะกร้า + checkoutItems
    localStorage.removeItem("cart");
    localStorage.removeItem("checkoutItems");



    // แสดงป้ายยืนยัน
    showThankYou();
    // redirect ไปหน้าขอบคุณ ถ้ามี
    // window.location.href = "thank-you.html";

    // รีหน้าเว็บเหมือนกด F5
    setTimeout(() => {
        window.location.reload();
    }, 3000); // รอ 3 วินาที

}

// 8. เรียกใช้งานเมื่อโหลดหน้า
document.addEventListener("DOMContentLoaded", () => {
    renderOrderItems();
    renderAddressSection();
    setupPaymentToggle();
    setupProvinceAutocomplete();
    document.getElementById("checkout-form")
        .addEventListener("submit", handleSubmit);
});

