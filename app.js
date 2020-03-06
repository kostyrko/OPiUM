document.getElementById('output').style.visibility = 'hidden';
        document.getElementById('mInput').addEventListener('input', function(e){
            document.getElementById('output').style.visibility = 'visible';
            let m = e.target.value;
           document.getElementById('stajeOutput').innerHTML = (m/134).toFixed(2);
           document.getElementById('sznurOutput').innerHTML = (m/44.665).toFixed(2);
           document.getElementById('laskaOutput').innerHTML = (m/8.933).toFixed(2);
           document.getElementById('pretOutput').innerHTML = (m/4.4665).toFixed(2);
           document.getElementById('krokiOutput').innerHTML = (m/2.2333).toFixed(2);
        });