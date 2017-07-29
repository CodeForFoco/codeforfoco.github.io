'use strict';

(function initGroupCalendar() {
    var $ = jQuery,
        eventsQueryParams = function () {
            return mup_widget.api_call("/2/events", {
                group_urlname: 'Code-for-Fort-Collins',
                page: 4,
            });
        },
        $target = $("#meetups");

    $.getJSON(eventsQueryParams(), function (data) {
        $target.empty();

        if (data.status && data.status.match(/^200/) === null) {
            $("#meetup_listing").empty();
        } else {
            $($target).html(
                prepUpcomingMarkup(data.results.reverse())
            );
        }
    });

    function prepUpcomingMarkup(data) {
        var event, date,
            html = '';

        for (var i in data) {
            event = data[data.length - i - 1];
            date = timeConverter(event.time);

            html +=
                '<li class="meetup-list__item">' +
                    '<a target="_blank" href="' + event.event_url +
                    '" title="' + event.name + ' details">' +
                    event.name +
                    '</a><br>' +
                    '<span>' + date + '</span>' +
                '</li>';
        }

        return html;
    }

    function timeConverter(UNIX_timestamp) {
        var fullDate = new Date(UNIX_timestamp),
            months = [
                'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ],
            year = fullDate.getFullYear(),
            month = months[fullDate.getMonth()],
            date = fullDate.getDate(),
            hour = fullDate.getHours(),
            min = fullDate.getMinutes() < 10 ? '0' + fullDate.getMinutes() : fullDate.getMinutes(),
            time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min;

        return time;
    }
})();
