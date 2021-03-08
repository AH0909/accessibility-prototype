import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                               <table>
                    <tr>
                        <th>Accessibility feature</th>
                        <th>Range of ratings</th>
                        <th>Average rating</th>
                        <th>Priority</th>
                    </tr>
                    <tr>
                        <td>Video captions</td>
                        <td>1-10</td>
                        <td>4.08</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>Video script</td>
                        <td>1-7</td>
                        <td>4.31</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Screen magnification</td>
                        <td>1-10</td>
                        <td>6.08</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>Screen reader</td>
                        <td>3-10</td>
                        <td>6.08</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>High contrasting Colour Toggle</td>
                        <td>4-10</td>
                        <td>7.46</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Ability to navigate with a keyboard</td>
                        <td>5-10</td>
                        <td>8.62</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Read only summary page</td>
                        <td>1-10</td>
                        <td>6.31</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Digital voice recorder</td>
                        <td>1-10</td>
                        <td>5.46</td>
                        <td>6</td>
                    </tr>
                    </table>
            </div>
        )
    }
}

export default Table