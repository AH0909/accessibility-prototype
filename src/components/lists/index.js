import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <body>
                <h2>Useful websites</h2>
                <h4>From my research I found the following pages useful.
                Some act as fantastic examples of websites using accessibility features.
                Others show guidance and recommendations.</h4>
                <dl>
                    <dt><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) Overview</a></dt>
                    <dd> This site provides you with....</dd>
                    <br />
                    <dt><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) Overview</a></dt>
                    <dd> This site provides you with....</dd>
                    <br />  <dt><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) Overview</a></dt>
                    <dd> This site provides you with....</dd>
                    <br />  <dt><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) Overview</a></dt>
                    <dd> This site provides you with....</dd>
                    <br />  <dt><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) Overview</a></dt>
                    <dd> This site provides you with....</dd>
                    <br />  <dt><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">Web Content Accessibility Guidelines (WCAG) Overview</a></dt>
                    <dd> This site provides you with....</dd>
                    <br />
                </dl>
            </body>
        )
    }
}

export default List