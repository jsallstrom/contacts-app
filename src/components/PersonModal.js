import React from 'react';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { editObject } from '../actions/object-actions';


import star from '../assets/star.svg';
import star_border from '../assets/star_border.svg';
import close from '../assets/close.svg';








class PersonModal extends React.Component {
   


    handleStarClick = () => {

        const newPerson = { 
            isFavourite: !this.props.selectedPerson.isFavourite
        }

        this.props.dispatch(editObject(this.props.selectedPerson.id, newPerson));

        this.props.handleClearSelectedPerson(); 
        
    }


    handleCloseClick = () => {

        this.props.handleClearSelectedPerson();        

    }



    render() {
        return(
            <div>
                
                <Modal
                    isOpen={!!this.props.selectedPerson.id}
                    onRequestClose={this.handleCloseClick}
                    contentLabel="Selected Person"
                    className="modal"
                    overlayClassName="overlay"
                >
                    
            
                    <div className="modal__top-box">
                        <div className="modal__top-box__item">
                            <h3 className="modal__title">{this.props.selectedPerson.name}</h3>
                            
                            {this.props.selectedPerson.isFavourite && <img className="modal__star" src={star} onClick={this.handleStarClick}></img>}
                            {!this.props.selectedPerson.isFavourite && <img className="modal__star" src={star_border} onClick={this.handleStarClick}></img>}
                            {/*Show empty star if not favourited and full star if it is */}
                            
                        </div>
                        <div className="modal__top-box__item">
                             <img className="modal__close" src={close} onClick={this.handleCloseClick}></img>
                        </div >
                        

                    </div>

                    <div>
                        <p className="modal__p-tag">{this.props.selectedPerson.email}</p>
                    </div>


                </Modal>


            </div>

        );
    }


} 


export default connect()(PersonModal);


