let calendar = null;
document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('drillScheduleCalendar');
    calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'title',
        center: 'dayGridMonth,listMonth',
        right: 'prev,today,next',
      },
      initialView: 'dayGridMonth',
      editable: true, // 수정 가능?
      selectable: true,
      locale: 'ko',
      eventClick: function(info){
        if(confirm(info.event.title + " 일정을 삭제하시겠습니까?")){
          // 확인 클릭 시
          info.event.remove();
      }
      },
      dayMaxEvents: true,
      dateClick: function(info) {
        let eventName = prompt('일정 이름을 입력하시오');
        if(eventName != null){
          calendar.addEvent({
            title: eventName,
            start: info.dateStr,
            allDay: true
            }
          );
        }
      }
    });
    calendar.render();
  });