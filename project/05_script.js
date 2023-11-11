let arr = [
    {
        dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80", story:"https://images.unsplash.com/photo-1674419287834-b93e43379876?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D&w=500"
    },
    {
        dp:"https://images.unsplash.com/photo-1608477194635-63cd7d9c75bd?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887", story:"https://images.unsplash.com/photo-1604436154692-5f99b849232c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1964" 
    },
    {
        dp:"https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1942", story:"https://images.unsplash.com/photo-1574315538427-58c1e5353f18?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887" 
    },
    {
        dp:"https://images.unsplash.com/photo-1614786273885-a652af67194c?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935", story:"https://images.unsplash.com/photo-1614786269829-d24616faf56d?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935" 
    },
    {
        dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1935", story:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1920" 
    },
    {
        dp:"https://images.unsplash.com/photo-1439778615639-28529f7628bc?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1887", story:"https://images.unsplash.com/photo-1666585460627-f90a9d4a8341?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D&w=500" 
    },
]
let storiyan = document.querySelector(".storiyan")
let clutter = "";

arr.forEach(function(elem, idx) {
    clutter += `<div class="story">
    <img id ="${idx}" src="${elem.dp}" alt="">
</div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
  document.querySelector("#full-screen").style.display = "block"   
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
  
  setTimeout(function() {
    document.querySelector("#full-screen").style.display = "none"    
  },2000)
})