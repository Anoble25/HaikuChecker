import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Haiku } from './haiku.js';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
    var haikuText = $('#haiku-text-area').val();
    var output = Haiku(haikuText);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});
