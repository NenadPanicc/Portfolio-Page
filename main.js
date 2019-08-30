$(document).ready(function(){
    // Booklist Event listener
    $('#booklist').mouseenter(() => {
        $('#booklist')
        .addClass('background')
        .html(`<h5  class="card-title" style="text-align: center;color:white;" height="600px;">Book List</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">Simple Website allowing for keeping the list of books you want to read</p>
        <ul style="margin-top:92px;">
            <li style="display:inline" >
            <a href="https://github.com/NenadPanicc/Book-list" target="_blank""><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
            </li>
            <li style="display:inline">
            <a href="https://nenadpanicc.github.io/Book-list/" target="_blank"><img src="live.png" class="m-4" width="50px" height="50px" ></a>
            </li>
        </ul>`)
        
        console.log('enter')
    })
    $('#booklist').mouseleave(() => {
        $('#booklist')
        .removeClass('background')
        .empty()
        .html(' <img src="booklist.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
})
    // To do Listener

    $('#todo').mouseenter(() => {
        $('#todo')
        .addClass('background')
        .html(`<h5 class="card-title" style="text-align: center;color:white;">To Do List</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A simple website that enables the creation of a to do list</p>
        <ul style="margin-top:92px;">
        <li style="display:inline" >
        <a href="https://github.com/NenadPanicc/To-do-list" target="_blank""><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
        </li>
    </ul>`)
        console.log('enter')
    })
    $('#todo').mouseleave(() => {
        $('#todo')
        .removeClass('background')
        .empty()
        .html(' <img src="todo.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })

    // Sign Up Listener
    $('#signup').mouseenter(() => {
        $('#signup')
        .addClass('background')
        .html(`<h5 class="card-title" style="text-align: center;color:white;">Sign up, Log in Screen</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A welcoming sign up and log in screen</p>
        <ul style="margin-top:115px;">
        <li style="display:inline" >
        <a href="https://github.com/NenadPanicc/Sign-up-Log-in-screen" target="_blank"><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
        </li>
        <li style="display:inline">
        <a href="https://nenadpanicc.github.io/Sign-up-Log-in-screen/" target="_blank"><img src="live.png" class="m-4" width="50px" height="50px" ></a>
        </li>
    </ul>`)
        console.log('enter')
    })
    $('#signup').mouseleave(() => {
        $('#signup')
        .removeClass('background')
        .empty()
        .html(' <img src="signup.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
    
    // Number(Date) Listener
    $('#number').mouseenter(() => {
        $('#number')
        .addClass('background')
        .html(`<h5 class="card-title" style="text-align: center;color:white;">Date Facts App</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A Website showing interesting facts about entered dates, that it is getting from an API.</p>
        <ul style="margin-top:69px;">
        <li style="display:inline" >
        <a href="https://github.com/NenadPanicc/Date-facts-app" target="_blank""><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
        </li>
        <li style="display:inline">
        <a href="https://nenadpanicc.github.io/Date-facts-app/" target="_blank"><img src="live.png" class="m-4" width="50px" height="50px" ></a>
        </li>
    </ul>`)
        console.log('enter')
    })
    $('#number').mouseleave(() => {
        $('#number')
        .removeClass('background')
        .empty()
        .html(' <img src="number.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
      // Interactive Map Listener
      $('#interactive').mouseenter(() => {
        $('#interactive')
        .addClass('background')
        .html(`<h5 class="card-title" style="text-align: center;color:white;">Interactive Map</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A simple interactive map focusing on parts of a city when hovering over a specific nav link.</p>
        <ul style="margin-top:69px;">
        <li style="display:inline" >
        <a href="https://github.com/NenadPanicc/interactivemap.github.io" target="_blank""><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
        </li>
        <li style="display:inline">
        <a href="https://nenadpanicc.github.io/interactivemap.github.io/"target="_blank"><img src="live.png" class="m-4" width="50px" height="50px" ></a>
        </li>
    </ul>`)
        console.log('enter')
    })
    $('#interactive').mouseleave(() => {
        $('#interactive')
        .removeClass('background')
        .empty()
        .html(' <img src="interactivemap.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
})
