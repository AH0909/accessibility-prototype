import React from 'react';
  
class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.tabs = props.children
    // set index 0 as default
    this.state = {selected: this.tabs[0]}
    this.selectTab = this.selectTab.bind(this)
    this.previousTab = this.previousTab.bind(this)
    this.nextTab = this.nextTab.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyup = this.handleKeyup.bind(this)
  }
  // update to the active tab
  componentDidUpdate() {
    this.activeLink.focus()
  }

  // selected tab
  selectTab (tab) {
    this.setState({selected: tab})
  }

  // select the previous tab and update the index
  previousTab (tab) {
    const index = this.tabs.indexOf(tab)
    if (index > 0) this.selectTab(this.tabs[index - 1])
  }

  // key driven next tab
  nextTab (tab) {
    const index = this.tabs.indexOf(tab)
    if (index < this.tabs.length - 1) this.selectTab(this.tabs[index + 1])
  }

  // allow the user to click a tab
  handleClick (e, tab) {
    e.preventDefault()
    this.selectTab(tab)
  }

  // allow navigation with the keyboard
  handleKeyup (e, tab) {
    e.preventDefault()
    if (e.which === 13) this.selectTab(tab)
    else if (e.which === 37) this.previousTab(tab)
    else if (e.which === 39) this.nextTab(tab)
  }

  // redner tabs
  render () {
    return (
    <div>
      <ul role="tablist">
        {this.tabs.map((tab, i) => (
          <li key={`li_tab_${i}`} role="presentation">
            <a key={`tab_${i}`}
                id={`tab_${i}`}
                href={`#tabpanel_${i}`}
                role="tab"
                aria-controls={`tab_${i}`}
                aria-selected={tab === this.state.selected}
                tabIndex={tab === this.state.selected ? 0 : -1}
                onClick={e => this.handleClick(e, tab)}
                onKeyUp={e => this.handleKeyup(e, tab)}
                ref={link => { if (tab === this.state.selected) this.activeLink = link}}
            >{tab.props.title}</a>
          </li>
        ))}
      </ul>
      <div>
        {this.tabs.map((tab, i) => (
          React.cloneElement(tab, {
            index: i,
            isSelected: () => tab === this.state.selected
          })
        ))}
      </div>
    </div>)
  }
}
  
export default Tabs
