let currentTab = '.stat'
function toggtabs(tab){
    if(tab !== currentTab){
        // Hide the currentTab
        let hideElem = document.querySelectorAll(currentTab);
        for(let i=0; i<hideElem.length; i++){
            hideElem[i].style.visibility = 'collapse';
        }
        // Show the new tab
        let showElem = document.querySelectorAll(tab);
        for(let i=0; i<showElem.length; i++){
            showElem[i].style.visibility = 'visible';
            
        }
        // Set currentTab to the new tab
        currentTab = tab;
    }
}
