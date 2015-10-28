/**
 * PebbleReact - Test your reaction!
 *
 * First Pebble WatchApp made by David Zhang
 */

var UI = require('ui');

var main = new UI.Card({
    title: 'PebbleReact',
    body: 'Press select to begin!'
});

var wait = new UI.Card({
    subtitle: 'Wait..'
});

var response = new UI.Card({
    subtitle: 'Click select now!'
});

var result = new UI.Card({});

main.show();

main.on('click', 'select', function(e) {
    var waitTime = parseInt(Math.random() * 5000);
    main.hide();
    wait.show();
    setTimeout(function() {
        var d = new Date();
        var preResponseTime = d.getTime();
        wait.hide();
        response.show();
        response.on('click', 'select', function(e) {
            var d2 = new Date();
            var postResponseTime = d2.getTime();
            var difference = postResponseTime - preResponseTime;
            
            result.title('Results');
            result.subtitle('Your response time is: ' + difference + 'ms');
            response.hide();
            result.show();

            result.on('click', 'select', function(e) {
                result.hide();
                main.show(); 
            });
        });
    }, waitTime);
    
});
