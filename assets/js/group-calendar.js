'use strict';

(function initGroupCalendar() {

    var $ = jQuery;

    var $parameters_grp = {
            group_urlname: "Code-for-Fort-Collins",
            after: "-6m",
            before: "6m",
            _width: 400,
            _height: 290,
            _name: "Group Calendar",
            _description: "Lists recent and upcoming meetups for the specified group. The style is very basic so it can be easily adapted to match your site."
        },
        $queries = {
            events: function () {
                return mup_widget.api_call("/events", {
                    after: $parameters_grp.after,
                    before: $parameters_grp.before,
                    group_urlname: $parameters_grp.group_urlname,
                    page: 6,
                    desc: true
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
                date = timeConverter(ev.utc_time);
                $li = $('<li></li>');

                $li.append($('<div style="font-weight: bold"></div>').append(ev.name));

                go = $('<div></div>')
                    .append($('<a target="_TOP" href="' + ev.event_url + '"></a>')
                        .append(date));

                if (ev.status == 'upcoming') {
                    go.append(' | ')
                        .append(
                            $('<a target="_TOP" href="' + ev.event_url + '" style="background: red; color: white; text-decoration: none; font-size: smaller; font-weight: bold; padding: .3em .5em; border: white; border-radius: .3em;></a>')
                        );
                }

                $target.append($li.append(go));
            }
    });

    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000),
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            year = a.getFullYear(),
            month = months[a.getMonth()],
            date = a.getDate(),
            hour = a.getHours(),
            min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
            time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;

        return time;
    }
})();
