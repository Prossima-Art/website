window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel");
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });
  
  async function carousel(root) {
    var figure = root.querySelector("figure"),
      nav = root.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = "bfc" in root.dataset,
      theta = (2 * Math.PI) / n,
      currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    async function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
  
      rotateCarousel(currImage);
    }
  
    async function setupNavigation() {
      nav.addEventListener("click", onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() !== "BUTTON") return;
  
        if (t.classList.contains("next")) {
          currImage++;
        } else {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
    }
  
    async function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  }
  // right_content grid

  async function setupTabs (){
    document.querySelectorAll('.tab-btn').forEach(button=>{
      button.addEventListener('click',()=>{
        
        
        const sidebar = button.parentElement;
        const tabs = sidebar.parentElement;
        const tabNumber = button.dataset.forTab;
        const tabActivate = tabs.querySelector(`.tab-content[data-tab="${tabNumber}"]`)
        
        sidebar.querySelectorAll('.tab-btn').forEach(button=>{
          button.classList.remove('tab-btn-active')
        })
         tabs.querySelectorAll('.tab-content').forEach(tab=>{
          tab.classList.remove('tab-content-active')
        })
        button.classList.add('tab-btn-active')
        tabActivate.classList.add('tab-content-active')
      })
    })
  }
  
  document.addEventListener('DOMContentLoaded',()=>{
    setupTabs();
  })