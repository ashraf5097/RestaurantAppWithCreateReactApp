import React from 'react';

const Bottom = () => {
    return (

        <footer className="section footer-classic context-dark bg-image background footer-background-color">
            <div className="container">
                <div className="row row-30">
                    <div className="col-md-4 col-xl-5">
                        <div className="pr-xl-4">
                            <a className="brand" href="index.html">
                                <img className="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcSet="images/agency/logo-retina-inverse-280x74.png 2x" />
                            </a>
                            <p>So here under process restaurant web-application.</p>
                            <p className="rights"><span>©  </span><span className="copyright-year">2019</span><span> </span><span>Flames</span><span>. </span><span>All Rights Partially Reserved.</span></p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Contacts</h5>
                        <dl className="contact-list">
                            <dt>Address:</dt>
                            <dd>#29 9th C BTM, Bengaluru</dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>email:</dt>
                            <dd><a href="mailto:#">ashraf515139@gmail.com</a></dd>
                        </dl>
                        <dl className="contact-list">
                            <dt>phones:</dt>
                            <dd><a href="tel:#">+91 988989899</a> <span>or</span> <a href="tel:#">91 9292120120</a>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Bottom