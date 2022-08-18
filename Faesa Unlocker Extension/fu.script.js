	const delay = ms => new Promise(res => setTimeout(res, ms));

    var popupdiv;
    var startButton;

    function LoadPopup(){
        var head = document.getElementsByTagName('HEAD')[0];

        var link2 = document.createElement('link', );
        link2.rel = "stylesheet";
        link2.href = "https://fonts.googleapis.com/css2?family=Encode+Sans:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap";
        head.appendChild(link2);

        var link = document.createElement('link');    
        link.rel = 'stylesheet';         
        link.type = 'text/css';        
        link.href = 'popupstyle.css';     
        head.appendChild(link);
/*
        var fontawesome = document.createElement('link');
        fontawesome.rel = 'stylesheet';
        fontawesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';     
        head.appendChild(fontawesome);
*/
        popupdiv = document.createElement('div');
        popupdiv.className = "popup";
        popupdiv.innerHTML = `
            <div class="popup-header">FAESA Unlocker</div>
        `;
        document.body.appendChild(popupdiv);

        const buttonArea = document.createElement('div');
        buttonArea.className = "button-area";
        popupdiv.appendChild(buttonArea);

        startButton = document.createElement('button');
        startButton.className = "button-style";
        startButton.id = "startButton";
        //startButton.innerHTML = "<i style='font-size:26px' class='fa fa-unlock'></i>";
        startButton.innerHTML = "<span class='lock'></span>";
        startButton.onclick = StartButton;  
        startButton.disabled = false;
        buttonArea.appendChild(startButton);

        const credits = document.createElement('div');
        credits.className = "credits";
        credits.innerHTML = "Desenvolvido por Gustavo Prado";
        popupdiv.appendChild(credits);
    }

    function StartButton(){
        $(".lock").toggleClass('unlocked');
        $(".button-style").toggleClass('red');
        AddEvent();
    }

    async function AddEvent(){
        await delay(250);
        document.addEventListener('click', listener, false);
    }

    var listener = function (event) {    
        document.removeEventListener('click', listener, false);  

        console.log(event.target.tagName);

        try{
            event.target.removeAttribute('disabled');
        }
        catch{
            console.log("Elemento sem atributo disabled.");
        }

        $(".lock").toggleClass('unlocked');
        $(".button-style").toggleClass('red');
    };
    
    LoadPopup();
    
