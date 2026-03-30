import './App.css'

function App() {
  return (
    <div className="slds-scope">
      <div className="slds-p-around_large">

        {/* Page Header */}
        <div className="slds-page-header slds-m-bottom_large">
          <div className="slds-page-header__row">
            <div className="slds-page-header__col-title">
              <div className="slds-media">
                <div className="slds-media__body">
                  <div className="slds-page-header__name">
                    <div className="slds-page-header__name-title">
                      <h1>
                        <span className="slds-page-header__title slds-truncate">
                          Salesforce Lightning Design System
                        </span>
                      </h1>
                    </div>
                  </div>
                  <p className="slds-page-header__name-meta">
                    Component playground — edit <code>src/App.jsx</code> to get started
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="slds-m-bottom_large">
          <h2 className="slds-text-heading_small slds-m-bottom_small">Badges</h2>
          <span className="slds-badge slds-m-right_x-small">Default</span>
          <span className="slds-badge slds-badge_lightest slds-m-right_x-small">Lightest</span>
          <span className="slds-badge slds-badge_success slds-m-right_x-small">Success</span>
          <span className="slds-badge slds-badge_warning slds-m-right_x-small">Warning</span>
          <span className="slds-badge slds-badge_error">Error</span>
        </div>

        {/* Buttons */}
        <div className="slds-m-bottom_large">
          <h2 className="slds-text-heading_small slds-m-bottom_small">Buttons</h2>
          <button className="slds-button slds-button_neutral slds-m-right_x-small">Neutral</button>
          <button className="slds-button slds-button_brand slds-m-right_x-small">Brand</button>
          <button className="slds-button slds-button_outline-brand slds-m-right_x-small">Outline Brand</button>
          <button className="slds-button slds-button_destructive slds-m-right_x-small">Destructive</button>
          <button className="slds-button slds-button_success">Success</button>
        </div>

        {/* Form */}
        <div className="slds-m-bottom_large">
          <h2 className="slds-text-heading_small slds-m-bottom_small">Form Elements</h2>
          <div className="slds-form slds-form_stacked" style={{ maxWidth: '400px' }}>
            <div className="slds-form-element slds-m-bottom_small">
              <label className="slds-form-element__label" htmlFor="input-text">
                <abbr className="slds-required" title="required">*</abbr>
                Text Input
              </label>
              <div className="slds-form-element__control">
                <input
                  type="text"
                  id="input-text"
                  placeholder="Enter text..."
                  className="slds-input"
                />
              </div>
            </div>
            <div className="slds-form-element slds-m-bottom_small">
              <label className="slds-form-element__label" htmlFor="select-01">Select</label>
              <div className="slds-form-element__control">
                <div className="slds-select_container">
                  <select className="slds-select" id="select-01">
                    <option>Option One</option>
                    <option>Option Two</option>
                    <option>Option Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="slds-form-element">
              <label className="slds-form-element__label" htmlFor="textarea-01">Textarea</label>
              <div className="slds-form-element__control">
                <textarea id="textarea-01" className="slds-textarea" placeholder="Add notes..."></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Alert */}
        <div className="slds-m-bottom_large">
          <h2 className="slds-text-heading_small slds-m-bottom_small">Alert</h2>
          <div className="slds-notify slds-notify_alert slds-alert_info" role="alert">
            <span className="slds-assistive-text">info</span>
            <div className="slds-notify__content">
              <h2 className="slds-text-heading_small">
                This is an informational alert built with SLDS.
              </h2>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="slds-m-bottom_large">
          <h2 className="slds-text-heading_small slds-m-bottom_small">Card</h2>
          <div className="slds-card" style={{ maxWidth: '400px' }}>
            <div className="slds-card__header slds-grid">
              <header className="slds-media slds-media_center slds-has-flexi-truncate">
                <div className="slds-media__body">
                  <h2 className="slds-card__header-title">
                    <span className="slds-text-heading_small">Sample Card</span>
                  </h2>
                </div>
              </header>
              <div className="slds-no-flex">
                <button className="slds-button slds-button_neutral">New</button>
              </div>
            </div>
            <div className="slds-card__body slds-card__body_inner">
              <p>This card is built using SLDS utility classes. Customise it to display your data.</p>
            </div>
            <footer className="slds-card__footer">
              <a className="slds-card__footer-action" href="#">View All</a>
            </footer>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
