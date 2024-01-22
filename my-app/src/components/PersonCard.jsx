import React, {useState} from 'react';

const PersonCard = (props) =>{
    const[ birthdayAge, setBirthdayage ] = useState(2);

    const {firstName, lastName, age, hairColor} = props;

    // console.log(props);
    return (
        <>
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {age}</p>
        <p>HairColor: {hairColor}</p>
        <p>Birthday age: { birthdayAge}</p>
        <button onClick={( event) => setBirthdayage(birthdayAge +1)}>Birthday button for {lastName}, {firstName}</button>
        </>
    )
}

export default PersonCard;