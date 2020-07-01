$('input').change(function() {
  var body = document.getElementById('Preview');
  var file = $(this.files)[0];
  console.log(file);

  var url = window.URL.createObjectURL(file);

  var img = document.createElement('img');
  img.src = window.URL.createObjectURL(file);
  img.height = 60;
  img.onload = function() {
    window.URL.revokeObjectURL(this.src);
  };
  body.appendChild(img);

  console.log(url);
});

$('.custom-file-input').on('change', function() {
  var fileName = $(this)
    .val()
    .split('\\')
    .pop();
  $(this)
    .siblings('.custom-file-label')
    .addClass('selected')
    .html(fileName);
});