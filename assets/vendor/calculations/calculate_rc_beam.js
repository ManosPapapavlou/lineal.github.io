// Get elements by ID from the HTML
const calculateButton = document.getElementById("calculate-button");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", () => {
    // Get input values from the form
    const h = parseFloat(document.getElementById("h").value);
    const b = parseFloat(document.getElementById("b").value);
    const sid = parseFloat(document.getElementById("sid").value) / 10;
    const sid2 = parseFloat(document.getElementById("sid2").value) / 10;
    const synd = parseFloat(document.getElementById("synd").value) / 10;
    const c = parseFloat(document.getElementById("c").value);
    const fc = parseFloat(document.getElementById("fc").value);
    const gc = parseFloat(document.getElementById("gc").value);
    const fs = parseFloat(document.getElementById("fs").value);
    const gs = parseFloat(document.getElementById("gs").value);
    const ar_sid = parseFloat(document.getElementById("ar_sid").value);
    const ar_sid2 = parseFloat(document.getElementById("ar_sid2").value);

    // Calculation logic from MATLAB code
    const d = h - (sid / 2000) - (synd / 1000) - c; // m
    const fcd = 0.85 * fc / gc;
    const fyd = fs / gs;
     sid=sid/10;
     sid2=sid2/10;
    const As = ar_sid * Math.PI * (sid ** 2) / 4 + ar_sid2 * Math.PI * (sid2 ** 2) / 4;

    const x = As * (fyd / 10) / (0.8 * b * fcd * 1000); // Calculation might need 'b'
    const z = d - 0.4 * x;

    const Mrd = As * fyd * z / 10; // Moment

    // Display the result
    resultDiv.innerText = `Η ροπή είναι ${Mrd.toFixed(2)} KNm`;
});
