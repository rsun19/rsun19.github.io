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
                    style={{ borderBottom: "1px solid white" }}
                >
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm 2xl:text-xl 4xl:text-3xl 5xl:text-4xl text-white truncate">
                                {item.title}
                            </p>
                            <p className="text-sm 2xl:text-xl 4xl:text-3xl 5xl:text-4xl text-gray-400 truncate">
                                {item.author_name}
                            </p>
                        </div>
                        <div className="inline-flex 2xl:text-xl 4xl:text-3xl 5xl:text-4xl items-center text-base font-semibold text-white">
                            Rating: {item.rating_int}/10
                        </div>
                    </div>
                </li>
            </a>
        </>
    );
}

export default ReviewItem