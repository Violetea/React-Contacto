import PropTypes from "prop-types";

const ComponentB = ({ setConected }) => {

    const changeState = () => {
       setConected((prevState) =>{
            return {
                ...prevState,//spread operator
                conected: !prevState.conected
            };
       });   
    }

    return (
        <div>
            <button onClick={ changeState }>Change State</button>
        </div>
    );
};

ComponentB.propTypes = {
    setContact: PropTypes.func,
};

export { ComponentB };