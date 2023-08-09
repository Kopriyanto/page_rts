// import 'flowbite';

function loadComponent(url, containerId){
    fetch(url)
    .then((response)=>response.text())
    .then((html)=>{
        document.getElementById(containerId).innerHTML = html;
        openSidebar();
        showSearch();
    })
    .catch((error)=>{
        console.error('Error loading component:', error);
    })
}

// load sidebar and navigation
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('sidebar.html', 'sidebarContainer');
    loadComponent('navbar.html', 'navbarContainer');

    let openDropdown = null;

    document.addEventListener('click', function (event) {
        const toggleButton = event.target.closest('.dropdown-toggle');
        
        if (toggleButton) {
            const dropdownId = toggleButton.getAttribute('data-target');
            const dropdownContent = document.getElementById(dropdownId);
            
            if (openDropdown && openDropdown !== dropdownContent) {
                openDropdown.classList.add('hidden');
            }
            
            dropdownContent.classList.toggle('hidden');
            openDropdown = dropdownContent;
        } else if (openDropdown) {
            openDropdown.classList.add('hidden');
            openDropdown = null;
        }
    });
    
});

function openSidebar(){
    const hamBtn = document.getElementById('ham-button');
    const sidebar = document.getElementById('sidebarContainer');
    const logoSidebar = document.getElementById('logo-sidebar');
    const closeIcon = document.getElementById('close-sidebar');
    const hamIcon = document.getElementById('ham-sidebar');
    const rightContent = document.getElementById('right-content');

    if (hamBtn && sidebar) {
        hamBtn.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar-md');
            closeIcon.classList.toggle('hidden');
            hamIcon.classList.toggle('hidden');
            rightContent.classList.toggle('right-content', sidebar.classList.contains('sidebar-md'));

            // sidebar.classList.add('transition-semua');
            rightContent.classList.add('transition-semua');
        });
    }
}

function showSearch(){
    const btnShow = document.getElementById('button-show-search');
    const searchIcon = document.getElementById('search-icon');
    const closeIcon = document.getElementById('close-icon');
    const search = document.getElementById('search-div');

    if(btnShow && search){
        btnShow.addEventListener('click', () =>{
            // btnShow.classList.toggle('hidden');
            searchIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
            // console.log('berhasil');
            search.classList.toggle('hidden');
        })
    }
}

const sidebarLinks = document.querySelectorAll('.sidebar-link');
// Add click event listener to each link
sidebarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
  
      // Get the href attribute from the clicked link
      const targetUrl = link.getAttribute('href');
  
      // Load content from the target URL into the mainContent div
      fetch(targetUrl)
        .then(response => response.text())
        .then(content => {
          const mainContent = document.getElementById('mainContent');
          mainContent.innerHTML = content;
        });
    });
  });

// function loadContent(url){
//     fetch(url)
//     .then((response)=>response.text())
//     .then((html)=>{
//         document.getElementById('mainContent').innerHTML = html
//     })
//     .catch((error)=>{
//         console.error('Error loading component:', error)
//     })
// }
