import React from 'react';
import { IntroText } from "../text/index.js"
import { SolutionText } from "../text/index.js"
import Table from "../table/index.js"
import WithColourPicker from "../colourPicker/index.js"


class Content extends React.Component {
    render(){
        return(
            <>
                <h1>My Accessibility Research Project</h1>
                <IntroText />
                <Table />
                <SolutionText />
            </>
        )
    }
}

const ContentWithColourPicker = WithColourPicker(Content)

export default ContentWithColourPicker