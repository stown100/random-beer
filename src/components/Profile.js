import React from "react";

const Profile = ({ currentUser }) => {
    return (
        <section className="profile">
        <div className="profile__block">
            <div className="profile__redact-image"><img src={currentUser.avatar} className="profile__jack"
                alt="Аватар" /><span className="profile__redact-img"></span></div>
            <div className="profile__info">
                <div className="profile__title-button">
                    <h1 className="profile__title">{currentUser.username}</h1>
                </div>
                <p className="profile__subtitle">{currentUser.phone_number}</p>
            </div>
        </div>
    </section>
    )
}

export default Profile;
