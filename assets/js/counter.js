function updateCounter() {
    const counter = document.getElementById('counter');
    let count = localStorage.getItem('visiterCount');
     if(count==null){
        count=null || 1 ;}
     else{ 
        count++;}
    localStorage.setItem('visiterCount', count);
    counter.innerHTML = `Vistor Count: ${localStorage.getItem('visiterCount')}`;
}
updateCounter();