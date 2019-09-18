$(document).ready(function(){

    // Sign Up Listener
    $('#signup').mouseenter(() => {
        $('#signup')
        .addClass('background')
        .css({transform: "scale(1.1, 1.1)"})
        .html(`<h5 class="card-title" style="text-align: center;color:white;">Sign up, Log in Screen</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A fully functional welcoming sign up and log in screen</p>
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
        .css({transform: "scale(1, 1)"})
        .empty()
        .html(' <img src="signup.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
    
      // Interactive Map Listener
      $('#interactive').mouseenter(() => {
        $('#interactive')
        .addClass('background')
        .css({transform: "scale(1.1, 1.1)"})
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
        .css({transform: "scale(1, 1)"})
        .empty()
        .html(' <img src="interactivemap.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
    // GitHub User Finder
    $('#github-user').mouseenter(() => {
        $('#github-user')
        .addClass('background')
        .css({transform: "scale(1.1, 1.1)"})
        .html(`<h5 class="card-title" style="text-align: center;color:white;">GitHub User Finder</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A website that helps you find any GitHub user and see some information about them.</p>
        <ul style="margin-top:69px;">
        <li style="display:inline" >
        <a href="https://github.com/NenadPanicc/GitHub-User-Finder" target="_blank""><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
        </li>
        <li style="display:inline">
        <a href="https://nenadpanicc.github.io/GitHub-User-Finder/"target="_blank"><img src="live.png" class="m-4" width="50px" height="50px" ></a>
        </li>
    </ul>`)
        console.log('enter')
    })
    $('#github-user').mouseleave(() => {
        $('#github-user')
        .removeClass('background')
        .css({transform: "scale(1, 1)"})
        .empty()
        .html(' <img src="github user finder photo.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
    // Tech Scroll
    $('#techscroll').mouseenter(() => {
        $('#techscroll')
        .addClass('background')
        .css({transform: "scale(1.1, 1.1)"})
        .html(`<h5 class="card-title" style="text-align: center;color:white;">TechScroll</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A stylish and elegant product presentation website.</p>
        <ul style="margin-top:69px;">
        <li style="display:inline" >
        <a href="https://github.com/NenadPanicc/Tech-Scroll" target="_blank""><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
        </li>
        <li style="display:inline">
        <a href="https://nenadpanicc.github.io/Tech-Scroll/"target="_blank"><img src="live.png" class="m-4" width="50px" height="50px" ></a>
        </li>
    </ul>`)
        console.log('enter')
    })
    $('#techscroll').mouseleave(() => {
        $('#techscroll')
        .removeClass('background')
        .css({transform: "scale(1, 1)"})
        .empty()
        .html(' <img src="techscroll.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
    // News
    $('#news').mouseenter(() => {
        $('#news')
        .addClass('background')
        .css({transform: "scale(1.1, 1.1)"})
        .html(`<h5 class="card-title" style="text-align: center;color:white;">Daily news</h5>
        <p class="card-text pt-5 pl-3 pr-3"style="color:white;">A news website made possible with the NY Times API.</p>
        <ul style="margin-top:69px;">
        <li style="display:inline" >
        <a href="https://github.com/NenadPanicc/Daily-News" target="_blank""><img src="github-logo.png" class="m-5" width="50px" height="50px" ></a>
        </li>
        <li style="display:inline">
        <a href="https://nenadpanicc.github.io/Daily-News/"target="_blank"><img src="live.png" class="m-4" width="50px" height="50px" ></a>
        </li>
    </ul>`)
        console.log('enter')
    })
    $('#news').mouseleave(() => {
        $('#news')
        .removeClass('background')
        .css({transform: "scale(1, 1)"})
        .empty()
        .html(' <img src="news.png"class="card-img"height="400px;"style="opacity:0.8">')
        console.log('leave')
    })
})
