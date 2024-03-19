
const text= "Pierwszy #projekt #javascript ćwiczenie"; 
for (let i = 0; i < text.length; i++) {
  if (text.charAt(i) === "#") {
    const p = text.indexOf(' ', i);
    console.log(text.substring(i+1, p));
    i = p; //KR - mam z tą częścią problem, bo jak mam tą częś kodu aktywną to mam nieskończoną pętlę :(
  }
console.log(i);
}

