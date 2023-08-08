// import 'flowbite';

function loadComponent(url, containerId){
    fetch(url)
    .then((response)=>response.text())
    .then((html)=>{
        document.getElementById(containerId).innerHTML = html;
    })
    .catch((error)=>{
        console.error('Error loading component:', error);
    })
}

// load sidebar and navigation
document.addEventListener("DOMContentLoaded", function() {
    loadComponent('../../../components/sidebar.html', 'sidebarContainer');

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
loadComponent('../../../components/navbar.html', 'navbarContainer');

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
