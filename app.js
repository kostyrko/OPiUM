document.getElementById('output1').style.visibility = 'hidden';
        document.getElementById('rolneInput').addEventListener('input', function(e){
            document.getElementById('output1').style.visibility = 'visible';
            let m = e.target.value;
           document.getElementById('stajeOutput').innerHTML = (m/134).toFixed(2);
           document.getElementById('sznurOutput').innerHTML = (m/44.665).toFixed(2);
           document.getElementById('laskaOutput').innerHTML = (m/8.933).toFixed(2);
           document.getElementById('pretOutput').innerHTML = (m/4.4665).toFixed(2);
           document.getElementById('krokiOutput').innerHTML = (m/2.2333).toFixed(3);
           document.getElementById('lokiecOutput').innerHTML = (m/0.5955).toFixed(3);
        });
document.getElementById('output2').style.visibility = 'hidden';
// future implementation see: https://stackoverflow.com/questions/10693845/what-do-queryselectorall-and-getelementsby-methods-return
        document.getElementById('handloweInput').addEventListener('input', function(e){
            document.getElementById('output2').style.visibility = 'visible';
            let m = e.target.value;
           document.getElementById('sazenOutput').innerHTML = (m/1.787).toFixed(2);
           document.getElementById('lokiecOutput').innerHTML = (m/0.5955).toFixed(2);
           document.getElementById('stopaOutput').innerHTML = (m/0.2978).toFixed(2);
           document.getElementById('sztychOutput').innerHTML = (m/0.1985).toFixed(2);
           document.getElementById('cwiercOutput').innerHTML = (m/0.1489).toFixed(3);
           document.getElementById('dlonOutput').innerHTML = (m/0.0744).toFixed(2);
           document.getElementById('calOutput').innerHTML = (m/0.0248).toFixed(2);
        });

    