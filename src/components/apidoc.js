import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";

const APIDoc = ({ doc }) => {
    const [state, setState] = useState(false);
    useEffect(() => {
        setState(true);
    }, []);
    return state ? (<SwaggerUI url={doc} />) : (<></>);
};

APIDoc.propTypes = {
    doc: PropTypes.string.isRequired
};

export default APIDoc;
