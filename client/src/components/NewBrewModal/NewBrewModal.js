import React from 'react';
import './NewBrewModal.css'

const NewBrewModal = props => (

  <div className="row">
    <div className="modal fade" id="newBrewModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Brew in Progress</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            <h1>Your brew is now in session! Check the brewing tab to update the state of your brew.</h1>

            <div className="modal-footer">
              <button type="button" data-dismiss="modal" className="btn btn-primary ingredient-submit">
                Close
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

)

export default NewBrewModal;