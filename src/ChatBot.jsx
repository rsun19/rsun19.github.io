import React, { useState } from "react";
import useWidth from './changeWidth.js';

const ChatBot = () => {
    const [response, setResponse] = useState("This is an experimental model. Just pretend that AI is me!\nExample queries include: \"What are your experiences? or Expand on your experiences at Red Hat\"");
    const [searchTerm, setSearchTerm] = useState('');
    const { md, twoxl } = useWidth();
    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
    const handleSearchButtonClick = async () => {
        setResponse('');
        await fetchChatResponses(searchTerm);
    }

    const fetchChatResponses = async (searchTerm) => {
        try {
            const fixedSearchTerm = searchTerm.trim().replaceAll(' ', '+')
            const response = await fetch('https://www.recycleai.tech/api/chat/' + fixedSearchTerm);
            if (response.status === 200) {
                const jsonData = await response.json();
                setResponse(jsonData["response"].toString())
                } else {
                console.error('Error: Unexpected status code', response.status);
                }
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center">
                {md && <div className={'p-3 max-w-xl rounded overflow-hidden shadow-lg sm:mt-5 mt-2 text-center sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-sm'} style={{ backgroundColor: 'lightblue' }}>
                {response.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    <ul>
                        {line}
                    </ul>
                    </React.Fragment>
                ))}
                </div>}
                {!md && <div className={'p-3 w-full rounded overflow-hidden shadow-lg sm:mt-5 mt-2 text-center sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-sm'} style={{ backgroundColor: 'lightblue' }}>
                {response.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    <ul>
                        {line}
                    </ul>
                    </React.Fragment>
                ))}
                </div>}
            </div>
            <div className="flex items-center justify-center mt-5">
                <input
                    type="text"
                    className="border border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-sm"
                    placeholder="Enter in some categories"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg px-4 py-2 ml-1 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl text-sm"
                    onClick={handleSearchButtonClick}
                >
                    Send
                </button>
            </div>
        </div>
    )
};

export default ChatBot;
