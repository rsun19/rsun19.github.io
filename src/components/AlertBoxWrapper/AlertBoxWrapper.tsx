import React from 'react'
import AlertBox from './AlertBox';

interface AlertBoxProps {
    md: boolean
}

const AlertBoxWrapper: React.FC<AlertBoxProps> = ({ md }): React.JSX.Element => {
    return (
        <>
            {md && (
          <div
            className="alert-viewer"
            style={{
              position: "absolute",
              transform: "translateX(-50%)",
              textAlign: "center",
              marginTop: '5rem',
            }}
          >
            <AlertBox />
          </div>
        )}
        {!md && (
          <div
            className="alert-viewer"
            style={{ marginLeft: "1rem", marginRight: "1rem", paddingTop: '2rem'}}
          >
            <AlertBox />
          </div>
        )}
        </>
    );
}

export default AlertBoxWrapper;