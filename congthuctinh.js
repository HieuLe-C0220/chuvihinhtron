function ketQua() {
    let r = document.getElementById("radius").value;
    const PI = 3.14159;
    let perimeter = 2*r*PI
    document.getElementById("perimeter").innerHTML = perimeter.toFixed(2);
}