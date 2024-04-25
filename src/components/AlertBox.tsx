import React from 'react'

interface AlertBoxProps {
    md: boolean
}

const AlertBox: React.FC<AlertBoxProps> = ({ md }): React.JSX.Element => {
    return (
        <div>
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
            <a
              href="https://robertsrandomreviews.com/"
              target="_blank"
              className="text-center lg:px-4" rel="noreferrer"
            >
              <div
                className="p-2 bg-sky-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-bold mr-3">
                  Attention
                </span>
                <span className="font-semibold mr-2 text-left flex-auto py-1 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl">
                  Looking for my book blog? Click here!
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </a>
          </div>
        )}
        {!md && (
          <div
            className="alert-viewer"
            style={{ marginLeft: "1rem", marginRight: "1rem", paddingTop: '2rem'}}
          >
            <a
              href="https://robertsrandomreviews.com/"
              target="_blank"
              className="text-center lg:px-4" rel="noreferrer"
            >
              <div
                className="p-2 bg-sky-600 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex"
                role="alert"
              >
                <span className="flex rounded-full bg-red-600 uppercase px-2 py-1 text-xs 2xl:text-lg 4xl:text-xl 5xl:text-2xl font-bold mr-3">
                  Attention
                </span>
                <span className="font-semibold mr-2 text-left flex-auto py-1 2xl:text-2xl 4xl:text-3xl 5xl:text-4xl">
                  Looking for my book blog?
                </span>
                <svg
                  className="fill-current opacity-75 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                </svg>
              </div>
            </a>
          </div>
        )}
        </div>
    );
}

export default AlertBox;