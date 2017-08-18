/**
 * Upcoming Meetups widget
 */

'use strict';

(function initGroupCalendar() {
    jQuery.noConflict();

    // TODO: Replace with Jordan's API key
    var $api_key = "761d3f4222312a1b646e25127b5507",
        mup_widget = {
            with_jquery: function (block) {
                block(jQuery, document.body);
            },
            api_call: function (path, params) {
                return "http://api.meetup.com" + path + "?callback=?&" + jQuery.param(jQuery.extend({
                    key: $api_key
                }, params));
            }
        },
        $ = jQuery,
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
                '<div class="col-md-3 col-sm-6 meetup-list__item">' +
                '<a href="' + event.event_url +
                '" target="_blank" class="meetup-list__heading" ' +
                'title="' + event.name + ' details">' +
                event.name +
                '</a>' +
                '<span class="meetup-list__date">' + date + '</span>' +
                '</div>';
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
