document.addEventListener("DOMContentLoaded", () => {
    const scroller_inner = document.querySelector(".scroller-inner");
    
    const copyOfItems = Array.from(scroller_inner.children);
    
    copyOfItems.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
        scroller_inner.appendChild(duplicatedItem);
    })
})