import React, { useEffect, useState } from "react";
import ReviewItem from "./ReviewItem";

interface Review {
    id: string;
    url: string;
    title: string;
    author_name: string;
    rating_int: string;
}

const Reviews = (): React.JSX.Element => {
    const [reviewsData, setReviewsData] = useState<Review[]>([]);
    
    useEffect(() => {
        const fetchReviewsData = async () => {
          try {
            const response = await fetch(
              "https://robertsrandomreviews.com/api/post",
            );
            if (response.status === 200) {
              const jsonData: Review[] = await response.json();
              jsonData.sort(
                (a, b) => parseInt(b.rating_int) - parseInt(a.rating_int),
              );
              setReviewsData(jsonData.slice(0, 9));
              console.log(jsonData);
            } else {
              console.error("Error: Unexpected status code", response.status);
            }
          } catch (error) {
            console.error("Error fetching reviews data:", error);
          }
        };
    
        fetchReviewsData();
      });

    return (
        <div>
            <h1
            className="text-3xl 3xl:text-4xl 4xl:text-6xl mb-5 3xl:mb-10 5xl:text-7xl"
            style={{ textAlign: "center", color: "black", marginTop: "1rem" }}
            >
            Favorite books:
            </h1>
            <div
            className="bg-zinc-800 rounded-lg"
            style={{ margin: "20px 40px 20px 40px" }}
            >
                <ul className="ml-3 mr-3 4xl:mr-5 4xl:ml-5">
                    {reviewsData.map((item) => (
                        <ReviewItem item={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Reviews
