import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <body>
                <h2>Useful websites</h2>
                From my research I found the following pages useful.
                <dl>
                    <dt><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) Overview</a></dt>
                    <dd> This site provides you with the World Wide Web Consortium's guidleines on web accesibility; named WCAG (Web Content Accessibility Guidelines) </dd>
                    <br />
                    <dt><a href="https://www.a11yproject.com/">a11y project</a></dt>
                    <dd> The A11Y Project is a community-driven effort to make digital accessibility easier. This site provides you with open source code and information on making your applications accessible.</dd>
                    <br />  <dt><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">MDN Web documents on Accessibility</a></dt>
                    <dd> This webpage provides you with accessibility learning tutorials</dd>
                </dl>
            </body>
        )
    }
}

export default List