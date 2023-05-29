var NavBar = function NavBar(_ref) {
    var totalCounters = _ref.totalCounters;

    return React.createElement(
        "nav",
        { className: "navbar navbar-light bg-light" },
        React.createElement(
            "div",
            { style: { fontSize: "32px" } },
            " Total ",
            React.createElement(
                "span",
                { className: "badge rounded-pill bg-secondary" },
                totalCounters
            )
        ),
        React.createElement(
            "a",
            { href: "https://react.dev" },
            React.createElement("img", {
                src: "/cwdc/14-react/counter/src/logo.svg",
                style: { height: "48px" },
                alt: "logo"
            })
        ),
        React.createElement(
            "a",
            { href: "https://getbootstrap.com/docs/5.2/getting-started/introduction/" },
            React.createElement("img", {
                src: "/cwdc/14-react/counter/src/Bootstrap_logo.svg",
                style: { height: "48px" },
                alt: "logo"
            })
        ),
        React.createElement(
            "a",
            {
                className: "navbar-brand",
                href: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
            },
            "Watch: \"React for Beginners\""
        )
    );
};
