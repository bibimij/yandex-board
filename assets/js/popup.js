function Popup(){
  this.popup = document.querySelector('.popup-wrapper');
  this.content = document.querySelector('.popup');
  this.tableRows = document.querySelectorAll('tbody tr');

  this.popup.addEventListener('click', this.hide.bind(this));

  for (var i = 0; i < this.tableRows.length; i++)
  {
    this.tableRows[i].addEventListener('click', this.show.bind(this));
  }
}

Popup.prototype.show = function(e){
  this.setData(e.currentTarget);
  this.popup.classList.add('active');
};

Popup.prototype.hide = function(){
  this.popup.classList.remove('active');
};

Popup.prototype.setData = function(el){
  var flight = el.querySelector('td:first-child');
  var schedule = el.querySelector('td:nth-child(2)');
  var status = el.querySelector('td:nth-child(3)');
  var note = el.querySelector('td:nth-child(4)');

  this.content.innerHTML =
    '<h2>Рейс</h2>' +
    flight.innerHTML +
    '<h2>Расписание</h2>' +
    '<p>' + schedule.innerHTML + '</p>' +
    '<h2>Статус</h2>' +
    '<p>' + status.innerHTML + '</p>';

  if (note.innerHTML) {
    this.content.innerHTML +=
      '<h2>Примечание</h2>' +
      '<p>' + note.innerHTML + '</p>'
  }
};
