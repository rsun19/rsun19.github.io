import React from "react";
import ReviewItem from "./ReviewItem";
import { Review } from "./Review";
import { Card } from "@mantine/core";

interface ReviewsProps {
  reviewsData: Review[]
}

const Reviews: React.FC<ReviewsProps> = ({ reviewsData }): React.JSX.Element => {    
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
        <h1 className="text-3xl text-center pb-6">
          Favorite books:
        </h1>
        <div className="rounded-lg m-3">
          <ul className="ml-3 mr-3">
              {reviewsData.map((item) => (
                  <ReviewItem item={item} />
              ))}
          </ul>
        </div>
    </Card>
  );
}

export default Reviews
