import React, { useEffect, useState } from 'react';

const ReviewAvg = ({ refetch, setRefetch }) => {
  const [loading, setLoading] = useState(false);
  const [avgReview, setAvgReview] = useState(0);

  useEffect(() => {
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://fb-app-test-kdawg.herokuapp.com'
        : 'http://localhost:4000';

    setLoading(true);
    fetch(`${baseUrl}/review-avg`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setAvgReview(data.avg);
        setRefetch(false);
      });
  }, [refetch]);

  if (loading) {
    return 'loading...';
  }

  return `yo: ${avgReview}`;
};

export default ReviewAvg;
