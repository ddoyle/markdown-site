/*
 * A place to put the project specific javascript
 */


/*
 * Borrowed from
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffle(array) {
    var currentIndex = array.length
        , temporaryValue
        , randomIndex
        ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 * Set the active tab and page title for the page
 */
function set_title_and_active_tab(project_name, locator) {
    var div = $(locator);

    if (locator == '#index-tab') {
        document.title = project_name;
    }
    else {
        document.title = project_name + ' • ' + div.text();
    }

    div.addClass('active');

    return;
}

/*
 * Get the testimonials
 *
 * from - where to load the JSON from
 * converter - a markdown converter to generate HTML
 * callback - a function to call with an array of HTML testimonials once they
 *            have been loaded and turned into HTML
 */
function get_testimonials(from, converter, callback) {
    $.getJSON(from, function(data) {
        var fragments = [];

        $.each(data, function(index, value) {
            fragments.push(make_html_testimonial(value, converter));
        });

        callback(fragments);
    });
}

/*
 * Turn a testimonial read from a JSON file into an HTML string.
 *
 * The quote is assumed to be in markdown, so we are passed in a markdown
 * converter.
 */
function make_html_testimonial(value, converter) {
    return '<p>' + converter.makeHtml(value.quote) + '</p>' +
        '<p>' + value.name + ' — ' + value.attribution + '</p>';
}
