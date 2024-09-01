import React, { Component } from 'react';

class WarningCard extends Component {
    state = {  } 
    render() { 

        const { toggleWarningCart } = this.props; 

        return <div className="card card-warning">
        <div className="card-header card-header-warning">
            <div>
                Warnung / Hinweis
            </div>
            <div>
                <button onClick={toggleWarningCart} className='close-btn'>
                    <img src='assets/images/buttons/close-btn.png'/>
                </button>
            </div>
        </div>
        <div className="card-body">
            <blockquote className="blockquote mb-0">
                <p>Hinweis: Diese Seite stellt keinen echten Marktplatz dar.</p>
                <footer className="blockquote-footer">Dieses Projekt wurde zu Demonstrationszwecken mit React erstellt. Ein Kauf von Produkten ist nicht möglich, und es entsteht kein rechtsgültiger Vertrag.</footer>
            </blockquote>
        </div>
      </div>;
    }
}
 
export default WarningCard;