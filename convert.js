const puppeteer = require("puppeteer");
const path = require("path");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Ruta absoluta al HTML
  const filePath = path.resolve(__dirname, "index-net10.html");

  await page.goto("file://" + filePath, {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "resultado.pdf",
    printBackground: true, // mantiene colores, fondos y CSS
    format: "A4"
  });

  await browser.close();
  console.log("PDF generado: resultado.pdf");
})();
