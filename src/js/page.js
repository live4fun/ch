var Page = {
    $win: $(window),
    $doc: $(document),
    $html: $('html'),
    $body: $('body'),

    setState: _setState,
    toggleState: _toggleState,
    delState: _delState,
    hasState: _hasState
};

function _setState(name, value) {
    var newClass = _buildClass(name, value);
    var oldClass = Page.$html
        .attr('class')
        .split(/\s+/)
        .filter(function (className) {
            return className.indexOf(name) > -1;
        })
        .pop();

    Page.$html
        .removeClass(oldClass)
        .addClass(newClass);

    if (name === 'slide') {
        Page.slide = value;
    }

    return Page;
}

function _toggleState(name, value) {
    var className = _buildClass(name, value);

    Page.$html.toggleClass(className);

    return Page;
}

function _delState(name, value) {
    var className = _buildClass(name, value);

    Page.$html.removeClass(className);

    return Page;
}

function _hasState(name, value) {
    var className = _buildClass(name, value);

    return Page.$html.hasClass(className);
}

function _buildClass(name, value) {
    return ['page', name, value]
        .filter(Boolean)
        .join('_');
}
