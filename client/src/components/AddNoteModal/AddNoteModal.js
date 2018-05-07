import React from 'react';
import './AddNoteModal.css'

const AddNoteModal = props => (

    <div className="row">
      <div className="modal fade" id="addNoteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add Note to Recipe</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
  
              <form>
                <div className="form-group">
                  <textarea name="commentBody" onChange={props.onChange} value={props.value} className="form-control" id="note" placeholder="Add a new note" />
                </div>
              </form>
  
              <div className="modal-footer">
                  <button type="button" onClick={props.submitOnClick} data-dismiss="modal" className="btn btn-primary ingredient-submit">
                    Add Note
                    </button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
  
            </div>
          </div>
        </div>
      </div>
    </div>

)

export default AddNoteModal;