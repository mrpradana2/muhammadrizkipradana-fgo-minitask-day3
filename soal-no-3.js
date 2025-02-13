function konversi(suhu, tipeSuhu) {
  let celcius = 0;
  let reamur = 0;
  let fahreinheit = 0;
  let kelvin = 0;

  if (tipeSuhu === c) {
    reamur = (suhu * 4) / 5;
    fahreinheit = (suhu * 9) / 5 + 32;
    kelvin = suhu + 273.15;
    console.log(
      `Hasil konversi dari ${suhu}°C adalah\nReamur = ${reamur}°R\nFahreinheit = ${fahreinheit}°F\nKelvin = ${kelvin}°K`
    );
  } else if (tipeSuhu === r) {
    celcius = (suhu * 5) / 4;
    fahreinheit = (suhu * 9) / 4 + 32;
    kelvin = (suhu * 5) / 4 + 273.15;
    console.log(
      `Hasil konversi dari ${suhu}°R adalah\nCelcius = ${celcius}°C\nFahreinheit = ${fahreinheit}°F\nKelvin = ${kelvin}°K`
    );
  } else if (tipeSuhu === f) {
    celcius = ((suhu - 32) * 5) / 9;
    reamur = ((suhu - 32) * 4) / 9;
    kelvin = ((suhu + 459.67) * 5) / 9;
    console.log(
      `Hasil konversi dari ${suhu}°F adalah\nCelcius = ${celcius}°C\nReamur = ${reamur}°R\nKelvin = ${kelvin}°K`
    );
  } else if (tipeSuhu === k) {
    celcius = suhu - 273.15;
    reamur = ((suhu - 273.15) * 4) / 5;
    fahreinheit = (suhu * 9) / 5 - 459.67;
    console.log(
      `Hasil konversi dari ${suhu}°K adalah\nCelcius = ${celcius}°C\nReamur = ${reamur}°R\nFahreinheit = ${fahreinheit}°F`
    );
  }
}

const c = "celcius";
const r = "reamur";
const f = "fahreinheit";
const k = "kelvin";

konversi(30, c);
konversi(24, r);
konversi(86, f);
konversi(303.15, k);
