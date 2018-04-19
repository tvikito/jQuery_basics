const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $cssS = $('a[href$=".css"]');
const $cssCheckbox = $('#allowCss');
const $cssContainer = `
  <label>
  <input type='checkbox' id='allowCss'> Allow CSS downloads
  </label>
`;

/* add checkbox on the end of form
====================================================== */

$('#links').append($cssContainer);

/* allow direct download .css files
====================================================== */

$cssS.attr('download', true);

/* add labels to anchor https:// and .css files
====================================================== */

$secureLinks.addClass('secure');
$cssS.addClass('css');


/* block open anchor link without checked checkbox
====================================================== */

$cssS.on('click', function(e){
  if ($('#allowCss:checked').length === 0) {
    e.preventDefault();
    alert('Please check checkbox to allow CSS downloads');
  }
});

/* after click on checkbox change label on anchor .css files
====================================================== */

$('#links').on('click', '#allowCss', function(){
  $cssS.toggleClass('css--open');
});

/* add target="_blank" and href next to anchor links
====================================================== */

$('a').attr('target', '_blank');

$('a').each(function(){
  const url = $(this).attr('href');
  $(this).parent().append(` (${url})`);
});