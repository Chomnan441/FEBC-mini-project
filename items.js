// cart.js
// เพิ่มสินค้าลงในตะกร้า
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ลดจำนวนสินค้า 1 ชิ้น
function decreaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            // หากเหลือ 1 ชิ้น แล้วลด → ลบออกเลยก็ได้ หรือจะเตือนก่อนก็ได้
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}
//เพิ่มสินค้า ทีละ 1 ชิ้น
function increaseQuantity(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}

// ลบสินค้าทั้งหมดออกจากรายการ
function deleteItem(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

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

function renderCart() {
  // เก็บสินค้าที่ติ๊กก่อน render ใหม่
  const prevSelected = Array.from(
    document.querySelectorAll(".cart-check:checked")
  ).map(cb => parseInt(cb.dataset.id));

  const cart         = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer= document.getElementById("cart-items");

  const selectAllBox = document.getElementById("select-all");
  const clearBtn     = document.getElementById("clear-btn");
  const checkoutBtn  = document.getElementById("checkout-btn");

  cartContainer.innerHTML = "";

  // กรณีตะกร้าว่าง
  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="p-5 text-gray-500 text-center">
        🛒 ไม่มีสินค้าในตะกร้า
      </div>`;
    
    // ปิดการใช้งานทุก control
    selectAllBox.checked  = false;
    selectAllBox.disabled = true;
    clearBtn.disabled     = true;
    checkoutBtn.disabled  = true;
    updateCartBadge();
    return;
  }

  // เปิดใช้งานเมื่อมีสินค้า
  selectAllBox.disabled = false;
  clearBtn.disabled     = false;
  checkoutBtn.disabled  = false;

  // สร้างรายการสินค้า
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "cart-item flex items-center mb-4";
    div.innerHTML = `
      <input
        type="checkbox"
        class="cart-check mr-4 w-4 h-4"
        data-id="${item.id}"
      />
      <img src="${getProductImage(item.id)}"
           class="w-20 h-20 object-cover rounded border" />
      <div class="flex-1 ml-4">
        <div class="font-bold">${item.name}</div>
        <div class="text-gray-600">${item.price.toLocaleString()} บาท</div>
        <div class="flex items-center mt-2">
          <button onclick="decreaseQuantity(${item.id})"
                  class="px-2 bg-orange-700 text-white rounded">-</button>
          <span class="px-3">${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id})"
                  class="px-2 bg-orange-700 text-white rounded">+</button>
        </div>
      </div>
      <button onclick="deleteItem(${item.id})" class="ml-4">
        <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
             class="w-6 h-6" />
      </button>
    `;
    cartContainer.appendChild(div);
  });

  // Restore สถานะ checkbox เดิม และผูก change event
  document.querySelectorAll(".cart-check").forEach(cb => {
    const id = parseInt(cb.dataset.id);
    if (prevSelected.includes(id)) cb.checked = true;
    cb.addEventListener("change", updateSelectAllState);
  });

  // อัปเดตสถานะ select-all, badge และปุ่มต่างๆ
  updateSelectAllState();
  updateCartBadge();
}

function updateSelectAllState() {
    const allChecks = Array.from(document.querySelectorAll(".cart-check"));
    const checked = allChecks.filter(cb => cb.checked);
    const selectAll = document.getElementById("select-all");

    if (allChecks.length === 0) {
        selectAll.checked = false;
        selectAll.disabled = true;
    } else {
        selectAll.disabled = false;
        selectAll.checked = (checked.length === allChecks.length);
    }
}

function checkoutSelected() {
  const selectedIds = Array.from(
    document.querySelectorAll(".cart-check:checked")
  ).map(cb => parseInt(cb.dataset.id));

  if (selectedIds.length === 0) {
    return alert("กรุณาเลือกสินค้าที่ต้องการชำระ");
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemsToCheckout = cart.filter(item => selectedIds.includes(item.id));

  // เก็บไว้ก่อนเข้า checkout.html
  localStorage.setItem("checkoutItems", JSON.stringify(itemsToCheckout));

  // ไปหน้า checkout
  window.location.href = "checkout.html";
}

// เรียกใช้เมื่อโหลดหน้า
document.addEventListener("DOMContentLoaded", renderCart);

function addCustomQuantity(name, productId, quantity, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        cart[index].quantity += quantity;
    } else {
        const newItem = {
            id: productId,
            name: name,
            price: price,
            quantity: quantity
        };
        cart.push(newItem);
    }
    // แจ้งเตือน
    alert("✅ เพิ่มสินค้าเรียบร้อยแล้ว!");
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();

}
// ฟังก์ชันเคลียร์ตะกร้าทั้งหมด
function clearCart() {
    localStorage.removeItem("cart"); // ลบเฉพาะ key "cart"
    renderCart(); // อัปเดตรายการที่แสดง
}
// อัปเดต badge ตามจำนวนสินค้าใน localStorage
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    const badge = document.getElementById("cart-count-badge");
    if (totalItems > 0) {
        badge.textContent = totalItems;
        badge.style.display = "inline-block";
    } else {
        badge.style.display = "none";
    }
    //   อยากให้แสดงเป็นเลขมากสุด 99+
    badge.textContent = totalItems > 99 ? "99+" : totalItems;
}
// เรียก updateCartBadge() ทุกครั้งที่เพิ่ม/ลด/ลบสินค้า หรือโหลดหน้า
document.addEventListener("DOMContentLoaded", () => {
    renderCart();
    updateCartBadge();
});

function clearCart() {
    localStorage.removeItem("cart"); // ลบเฉพาะ key "cart"
    renderCart(); // อัปเดตรายการที่แสดง
}


// search bar 
const products = [
    { name: "Apple iPad Air 11 inch (M3) Wi-Fi + Cellular", url: "product.html?id=iphone13-case" },
    { name: "Apple iPad 11 (2025) A16 Wi-Fi + Cellular", url: "product.html?id=ipad-air-m2" },
    { name: "Apple iPad 11 (2025) A16 Wi-Fi", url: "product.html?id=xiaomi-g27i" },
    { name: "Apple iPad Mini 7 Wi-Fi", url: "product.html?id=ipad-pro-11" },
    { name: "Apple iPad Mini 7 Wi-Fi + Cellular", url: "product.html?id=iphone13-glass" },
    { name: "iPhone 13 Pro Max เคสใส", url: "product.html?id=iphone13pro-clear" }
];

const input = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");

input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    suggestionList.innerHTML = "";

    if (query === "") {
        suggestionList.classList.add("hidden");
        return;
    }

    const matches = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    matches.forEach(product => {
        const li = document.createElement("li");
        li.textContent = product.name;
        li.className = "px-4 py-2 cursor-pointer hover:bg-orange-50 transition";
        li.onclick = () => {
            window.location.href = product.url;
        };
        suggestionList.appendChild(li);
    });

    suggestionList.classList.remove("hidden");
});

input.addEventListener("focus", () => {
    if (input.value.trim() !== "") {
        suggestionList.classList.remove("hidden");
    }
});

input.addEventListener("blur", () => {
    setTimeout(() => {
        suggestionList.classList.add("hidden");
    }, 100); // delay เพื่อให้คลิก suggestion ทัน
});

function handleSearch() {
    const query = input.value.trim().toLowerCase();
    suggestionList.innerHTML = "";

    if (query === "") {
        window.location.href = "Allproduct.html";
        return;
    }

    const matches = products.filter(product =>
        product.name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        const li = document.createElement("li");
        li.textContent = "ไม่พบสินค้า";
        li.className = " px-4 py-2 text-gray-500";
        suggestionList.appendChild(li);
    } else {
        matches.forEach(product => {
            const li = document.createElement("li");
            li.textContent = product.name;
            li.className = "flex px-4 py-2 cursor-pointer hover:bg-orange-50 transition";
            li.onclick = () => {
                window.location.href = product.url;
            };
            suggestionList.appendChild(li);
        });
    }

    suggestionList.classList.remove("hidden");
}
function toggleSelectAll(checked) {
    document.querySelectorAll(".cart-check").forEach(cb => {
        cb.checked = checked;
    });
}

// ตรวจสอบสถานะ select-all เมื่อมีการเช็คทีละตัว
function updateSelectAllState() {
    const all = Array.from(document.querySelectorAll(".cart-check"));
    const checked = all.filter(cb => cb.checked);
    const selectAllBox = document.getElementById("select-all");

    if (all.length === 0) {
        selectAllBox.checked = false;
        selectAllBox.disabled = true;
    } else {
        selectAllBox.disabled = false;
        // ถ้า checkbox ทุกตัวถูกติ๊กให้ checked, ไม่งั้นเอาออก
        selectAllBox.checked = checked.length === all.length;
    }
}

