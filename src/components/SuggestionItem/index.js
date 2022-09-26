import './index.css'

const SuggestionItem = props => {
  const {suggestionItem,onDeleteSuggestion} = props
  const {timeAccessed, logoUrl, title, domainUrl,id} = suggestionItem

  const onClickDelete = () =>{
      onDeleteSuggestion(id)
  }

  return (
    <li className="list">
      <div className="mini-box">
        <div className="suggest-box">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
        <button className="button" type="button" testid ="delete" onClick = {onClickDelete}>
            <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
          
        />
        </button>
        
      </div>
    </li>
  )
}
export default SuggestionItem
