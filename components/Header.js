import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="header">
                    <div className="text-box">
                        <h1 className="heading-primary" >
                            <span className="heading-primary-main">Radim Jurečka</span>
                            <span className="heading-primary-sub">Jeřáby a konstrukce</span>
                        </h1>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;