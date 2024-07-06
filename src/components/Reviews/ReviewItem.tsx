import React from "react";

interface Review {
    url: string,
    id: string,
    title: string,
    author_name: string,
    rating_int: string
}

interface ReviewItemProps {
    item: Review
}

const ReviewItem: React.FC<ReviewItemProps> = ({ item }): React.JSX.Element => {
    return(
        <>
            <a target="_blank" href={item.url} key={item.id} rel="noreferrer">
                <li
                    className="pb-3 pt-3 4xl:pt-5 4xl:pb-5"
                    style={{ borderBottom: "1px solid black" }}
                >
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                            <p className="text-xl text-black truncate">
                                {item.title}
                            </p>
                            <p className="text-xl text-gray-400 truncate">
                                {item.author_name}
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-black">
                            Rating: {item.rating_int}/10
                        </div>
                    </div>
                </li>
            </a>
        </>
    );
}

export default ReviewItem