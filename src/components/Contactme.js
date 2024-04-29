import React from 'react';
import '../style/Contactmestyle.scss';

const Contactme = () => {
    return (
        <div className="container mt-4">
            <div className="card border shadow">
                <div className="card-body text-center">
                    <h2 className="card-title contact-title">ME CONTACTER</h2>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="form-title">Formulaire de Contact</h3>
                            <form>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="Nom" required />
                                    <label htmlFor="name">Votre nom</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="E-mail" required />
                                    <label htmlFor="email">Votre adresse email</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="tel" className="form-control" id="phone" placeholder="Numéro de téléphone" required />
                                    <label htmlFor="phone">Votre numéro de téléphone</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="subject" placeholder="Sujet" required />
                                    <label htmlFor="subject">Sujet</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" placeholder="Message" rows="7" style={{ height: 'auto' }} required></textarea>
                                    <label htmlFor="message">Votre message</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Envoyer</button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <h3 className="info-title">Mes coordonnées</h3>
                            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
                            <p>06 20 30 40 50</p>
                            <img src="https://maps.googleapis.com/maps/api/staticmap?center=45.7786657122808,4.7963986122432525&zoom=15&size=400x300&key=YOUR_API_KEY" alt="Google Map" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contactme;