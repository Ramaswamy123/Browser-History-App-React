import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class HistorySuggestions extends Component {
  state = {searchInput: '', suggestionsList: initialHistoryList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteSuggestion = id => {
    const {suggestionsList} = this.state
    const remainingItems = suggestionsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({suggestionsList: remainingItems})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.state
    // const {suggestionsList} = this.props

    const filteredSearchResult = suggestionsList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    let resultMessage
    if (filteredSearchResult.length === 0) {
      resultMessage = (
        <div className="result-container">
          <p className="result">There is no history to show</p>
        </div>
      )
    }

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="history-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              className="history-logo"
              alt="app logo"
            />
            <div className="search-input-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="search-logo"
                alt="search"
              />
              <input
                type="search"
                placeholder="Search history"
                className="input-box"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
          </div>
          <div className="suggestion-container">
            <div>
              <ul className="suggestion-box">
                {filteredSearchResult.map(eachItem => (
                  <SuggestionItem
                    suggestionItem={eachItem}
                    key={eachItem.id}
                    onDeleteSuggestion={this.onDeleteSuggestion}
                  />
                ))}
              </ul>
            </div>
            {resultMessage}
          </div>
        </div>
      </div>
    )
  }
}
export default HistorySuggestions
