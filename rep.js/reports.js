document.addEventListener("DOMContentLoaded", () => {
  const dictionary = {
    Reports: "التقارير",
    "Generate and download warehouse reports": "إنشاء وتحميل تقارير المستودع",
    "Stock count": "جرد المخزون",
    "Generate Report": "إنشاء تقرير",
    "Last 7 days": "آخر 7 أيام",
    "Last 30 days": "آخر 30 يوماً",
    "This quarter": "هذا الربع",
    "Custom range": "نطاق مخصص",
    "Reports generated": "التقارير المُنشأة",
    "This month": "هذا الشهر",
    Scheduled: "المجدولة",
    "Run automatically": "تشغيل تلقائي",
    "Last generated": "آخر إنتاج",
    "Today · Low Stock report": "اليوم · تقرير نقص المخزون",
    "Available reports": "التقارير المتاحة",
    "Inventory Summary": "ملخص المخزون",
    "All products, stock levels and values":
      "جميع المنتجات، مستويات وقيم المخزون",
    "Stock Movement": "حركة المخزون",
    "Items received and shipped per day": "العناصر المستلمة والمشحونة يومياً",
    "Low Stock & Reorder": "نقص المخزون وإعادة الطلب",
    "Products below minimum stock": "المنتجات التي أقل من الحد الأدنى",
    "Supplier Performance": "أداء الموردين",
    "On-time delivery and order accuracy": "دقة التسليم في المواعيد المحددة",
    "AI Demand Forecast": "التنبؤ الذكي بالطلب",
    "Predicted stock-outs and reorder plan":
      "توقع نفاد المخزون وخطة إعادة الطلب",
    "Camera Detections": "اكتشافات الكاميرا",
    "Detections per camera and accuracy": "الاكتشافات لكل كاميرا ودقتها",
    Generate: "إنشاء",
    "Recent reports": "التقارير الأخيرة",
    "Scheduled reports": "التقارير المجدولة",
    Report: "التقرير",
    Period: "الفترة",
    Generated: "تاريخ الإنشاء",
    Format: "الصيغة",
    Status: "الحالة",
    Ready: "جاهز",
    Active: "نشط",
    Download: "تحميل",
    Edit: "تعديل",
    Dashboard: "لوحة التحكم",
    "Active users": "المستخدمون النشطون",
    "Signed in to the website": "مسجل الدخول إلى الموقع",
    "5 online": "5 متصلون",
    Employee: "موظف",
    Merchant: "تاجر",
    Admin: "مدير النظام",
    "Active 8 min ago": "نشط منذ 8 دقائق",
    Alerts: "التنبيهات",
    Inventory: "المخزون",
    "AI forecast": "التنبؤ الذكي",
    "Purchase orders": "أوامر الشراء",
    Suppliers: "الموردين",
    "Search products, SKUs...": "البحث عن المنتجات، الرموز...",
    Employee: "موظف",
    "5 online": "٥ متصلون",
"Warehouse Manager": "مدير المخزون",
WM: "وم",
    Merchant: "تاجر",
    Manager: "مدير",
  };

  const reverseDictionary = Object.fromEntries(
    Object.entries(dictionary).map(([key, value]) => [value, key]),
  );
  let currentLang = "en";

  const langButtons = document.querySelectorAll(".lang-btn");

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      langButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const btnText = btn.textContent.trim();
      if (btnText === "العربية" && currentLang !== "ar") {
        currentLang = "ar";
      } else if (btnText === "English" && currentLang !== "en") {
        currentLang = "en";
      } else {
        return;
      }

      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = currentLang;
const teamCount = document.getElementById("teamCount");
if (teamCount) {
  teamCount.textContent = currentLang === "ar" ? "٥" : "5";
}
      function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          let text = node.nodeValue.trim();
          if (!text) return;

          if (currentLang === "ar" && dictionary[text]) {
            node.nodeValue = node.nodeValue.replace(text, dictionary[text]);
          } else if (currentLang === "en" && reverseDictionary[text]) {
            node.nodeValue = node.nodeValue.replace(
              text,
              reverseDictionary[text],
            );
          }
        } else {
          if (node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
            node.childNodes.forEach((child) => translateNode(child));
          }
        }
      }

      document.body.childNodes.forEach((child) => translateNode(child));
    });
  });

  const bellBtn = document.querySelector(".bell");
  if (bellBtn) {
    bellBtn.addEventListener("click", () => {
      alert(
        currentLang === "ar"
          ? "لا توجد تنبيهات جديدة حالياً."
          : "No new notifications right now.",
      );
    });
  }

  const generateReportBtn = document.querySelector(".add");
  if (generateReportBtn) {
    generateReportBtn.addEventListener("click", () => {
      alert(
        currentLang === "ar"
          ? "تم فتح نافذة إنشاء التقرير بنجاح!"
          : "Report generation window opened successfully!",
      );
    });
  }

  const stockCountBtn = document.querySelector(".stock-btn");
  if (stockCountBtn) {
    stockCountBtn.addEventListener("click", () => {
      alert(
        currentLang === "ar"
          ? "جاري فتح نافذة جرد المخزون..."
          : "Opening stock count window...",
      );
    });
  }

  const genButtons = document.querySelectorAll(".report-item .view");
  genButtons.forEach((btn) => {
    if (
      btn.textContent.trim() === "Generate" ||
      btn.textContent.trim() === "إنشاء"
    ) {
      btn.addEventListener("click", (e) => {
        const reportName = e.target
          .closest(".report-item")
          .querySelector("h2").textContent;
        alert(
          currentLang === "ar"
            ? `جاري إنشاء تقرير: ${reportName}`
            : `Generating report for: ${reportName}`,
        );
      });
    }
  });

  const tableActionBtns = document.querySelectorAll("tbody .view");
  tableActionBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const actionText = e.target.textContent.trim();
      if (actionText === "Download" || actionText === "تحميل") {
        alert(
          currentLang === "ar"
            ? "جاري تحميل التقرير..."
            : "Downloading report...",
        );
      } else {
        alert(
          currentLang === "ar"
            ? "جاري فتح نافذة تعديل التقرير..."
            : "Opening report editor...",
        );
      }
    });
  });

  const tabButtons = document.querySelectorAll(".tabs .tab");
  tabButtons.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabButtons.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const selectedPeriod = tab.textContent.trim();
      const msg =
        currentLang === "ar"
          ? `تم تحديث التقارير لتشمل فترة: ${selectedPeriod}`
          : `Reports updated for period: ${selectedPeriod}`;

      alert(msg);
    });
  });

  const teamBtn = document.querySelector(".team");
  const usersPopup = document.getElementById("usersPopup");

  if (teamBtn && usersPopup) {
    teamBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      usersPopup.style.display =
        usersPopup.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
      if (!usersPopup.contains(e.target) && !teamBtn.contains(e.target)) {
        usersPopup.style.display = "none";
      }
    });
  }

  const userItems = document.querySelectorAll(".popup-user-item");
  userItems.forEach((item) => {
    item.addEventListener("click", () => {
      const userName = item.getAttribute("data-name");
      const userRole = item.getAttribute("data-role");
      const userInitials = item.getAttribute("data-initials");

      document.getElementById("sidebarManagerName").textContent = userName;
      document.getElementById("currentManagerName").textContent = userName;
      const displayedRole =
        currentLang === "ar" ? dictionary[userRole] || userRole : userRole;

      document.getElementById("sidebarManagerRole").textContent = displayedRole;
      document.getElementById("currentManagerRole").textContent = displayedRole;

      const profileAvatar = document.querySelector(".profile .avatar");
      if (profileAvatar) profileAvatar.textContent = userInitials;

      usersPopup.style.display = "none";

      const alertMsg =
        currentLang === "ar"
          ? `تم التبديل بنجاح إلى حساب: ${userName}`
          : `Successfully switched to account: ${userName}`;
      alert(alertMsg);
    });
  });

  const logoutBtn = document.querySelector(".popup-action-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      const msg =
        currentLang === "ar"
          ? "جاري تسجيل الخروج..."
          : "Logging out current session...";
      alert(msg);
    });
  }
});
