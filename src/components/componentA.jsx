import React from 'react';
import PropTypes from 'prop-types';
import { ComponentB } from './componentB';

const ComponentA = ({ contact, setConected }) => {
    return (
        <div>
            <h2>Name: { contact.name}</h2>
            <h2>Surname: { contact.surname }</h2>
            <h2>Email: { contact.email }</h2>
            <h2>Conected: { contact.conected ? "Online contact" : "Not available" }</h2>
            <ComponentB contact = { contact } setConected = { setConected }></ComponentB>
        </div>
    );
};

ComponentA.propTypes = {
    contact: PropTypes.object,
    setContact: PropTypes.func,
};

export { ComponentA };
