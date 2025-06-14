
function updatePreview() {
  const html = document.getElementById('htmlEditor').value || "";
  const css = "<style>" + (document.getElementById('cssEditor').value || "") + "</style>";
  const js = "<script>" + (document.getElementById('jsEditor').value || "") + "<\/script>";

  const combinedOutput = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      ${css}
    </head>
    <body>
      ${html}
      ${js}
    </body>
    </html>
  `;

  const blob = new Blob([combinedOutput], { type: "text/html" });
  const iframe = document.getElementById('preview');
  iframe.src = URL.createObjectURL(blob);

  const totalLength = html.length + css.length + js.length;
  document.getElementById('progress').innerText = 'Fortschritt: ' + totalLength + ' Zeichen';
}
