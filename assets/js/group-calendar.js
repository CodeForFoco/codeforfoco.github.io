'use strict';

(function initGroupCalendar() {

    var $ = jQuery;

    var $queries = {
            events: function () {
                return mup_widget.api_call("/2/events", {
                    group_urlname: 'Code-for-Fort-Collins',
                    page: 4,
                });
            },
        },
        $target = $("#meetups");

    $.getJSON($queries.events(), function (data) {
        $target.empty();

        var ev, date, $li, go;

        if (data.status && data.status.match(/^200/) == null) {
            $("#meetup_listing").empty();
        } else
            for (var i in data.results.reverse()) {
                ev = data.results[data.results.length - i - 1];
                date = timeConverter(ev.time);
                $li = $('<li></li>');

                $li.append($('<div style="font-weight: bold"></div>').append(ev.name));

                go = $('<div></div>')
                    .append($('<a target="_TOP" href="' + ev.event_url + '"></a>')
                        .append(date));

                if (ev.status === 'upcoming') {
                    go
                        .append(' | ')
                        .append(
                            $('<a target="_TOP" href="' + ev.event_url + '" style="background: red; color: white; text-decoration: none; font-size: smaller; font-weight: bold; padding: .3em .5em; border: white; border-radius: .3em;>RSVP</a>')
                        );
                }

                $target.append($li.append(go));
            }
    });

    function createUpcomingMarkup() {

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
