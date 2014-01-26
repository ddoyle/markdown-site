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
