import React from "react";
import Card from './Card'
import Profile from "./Profile";

const Main = ({ cardsInfo, currentUser, random }) => {
    const renderCard = cardsInfo.length !== 0
    ? cardsInfo.map(({id, uid, brand, name, style, hop, yeast, malts, ibu, alcohol, blg}) => 
        <Card key={id} uid={uid} brand={brand} name={name} style={style} hop={hop} yeast={yeast} malts={malts} ibu={ibu} alcohol={alcohol} blg={blg} random={random} />
    )
    : console.log('error')

    return (
        <div className="main">
            <Profile currentUser={currentUser} />
            {renderCard}
            </div>
    )
}

export default Main;
