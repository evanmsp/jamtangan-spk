fetch("http://localhost:3000")
  .then(res => res.text())
  .then(data => console.log(data));

  document.getElementById("preferenceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    warna: this.warna.value,
    occasion: this.occasion.value,
    budget: this.budget.value,
    jumlah: this.jumlah.value,
    gender: this.gender.value
  };

  console.log("Preferensi User:", data);

  alert("Next: Frame 3 (AHP / Bundle)");
});
