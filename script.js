// वही JavaScript लॉजिक (जैसा पहले था)
document.getElementById("calculateBtn").addEventListener("click", function () {
  const hectares = parseFloat(document.getElementById("hectares").value);
  if (isNaN(hectares) || hectares <= 0) {
    alert("कृपया मान्य हेक्टेयर मान दर्ज करें");
    return;
  }
  const acres = hectares * 2.47105;
  const multipliedValue = acres * 2100;
  const multipliedValueNoDecimal = Math.floor(multipliedValue);
  const quintalValue = multipliedValueNoDecimal / 100;
  const numberOfBags = Math.floor(multipliedValueNoDecimal / 40);
  const quintalFromBags = (numberOfBags * 40) / 100;

  document.getElementById("acresResult").textContent = acres.toFixed(8);
  document.getElementById("quintalResult").textContent =
    quintalValue.toFixed(2);
  document.getElementById("bagsResult").textContent = numberOfBags;
  document.getElementById("quintalFromBags").textContent =
    quintalFromBags.toFixed(2);
});

document
  .getElementById("bagsToQuintalBtn")
  .addEventListener("click", function () {
    const bags = parseFloat(document.getElementById("bagsInput").value);
    if (isNaN(bags) || bags <= 0)
      return alert("कृपया मान्य बोरी संख्या दर्ज करें");
    const quintal = (bags * 40) / 100;
    document.getElementById("bagsToQuintalResult").textContent =
      quintal.toFixed(2);
  });

document
  .getElementById("quintalToBagsBtn")
  .addEventListener("click", function () {
    const quintal = parseFloat(document.getElementById("quintalInput").value);
    if (isNaN(quintal) || quintal <= 0)
      return alert("कृपया मान्य क्विंटल मान दर्ज करें");
    const bags = Math.floor(quintal * (100 / 40));
    document.getElementById("quintalToBagsResult").textContent = bags;
  });

document
  .getElementById("hectareToAcreBtn")
  .addEventListener("click", function () {
    const hectares = parseFloat(document.getElementById("hectareInput").value);
    if (isNaN(hectares) || hectares <= 0)
      return alert("कृपया मान्य हेक्टेयर मान दर्ज करें");
    document.getElementById("hectareToAcreResult").textContent = (
      hectares * 2.47105
    ).toFixed(8);
  });

document
  .getElementById("acreToHectareBtn")
  .addEventListener("click", function () {
    const acres = parseFloat(document.getElementById("acreInput").value);
    if (isNaN(acres) || acres <= 0)
      return alert("कृपया मान्य एकड़ मान दर्ज करें");
    document.getElementById("acreToHectareResult").textContent = (
      acres * 0.404686
    ).toFixed(8);
  });
