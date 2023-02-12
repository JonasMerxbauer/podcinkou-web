import { useEffect, useState } from "react";

const reviews = {
  reviews: [
    {
      reviewId:
        "AbFvOqmDfUP0EhJuYm-w3KXy3gSxYn-NS9CiDOo4tOjO4PRuq4PWUWbGkh6K-fePdKQaXi0cycFGGg",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/AOh14Ghk9qWwf0g3ocE_mVJO7lzFcdiNxyYIIlQi9bvKLw=c0x00000000-cc-rp",
        displayName: "Ihor K",
      },
      starRating: "5",
      comment: "Awesome service!",
      createTime: "2021-03-02T10:47:32.807Z",
      updateTime: "2021-03-02T10:47:32.807Z",
      reviewReply: {
        comment: "Thx :)",
        updateTime: "2021-03-02T11:03:45.142Z",
      },
      name: "accounts/108494581129006735086/locations/6394464039148850881/reviews/AbFvOqmDfUP0EhJuYm-w3KXy3gSxYn-NS9CiDOo4tOjO4PRuq4PWUWbGkh6K-fePdKQaXi0cycFGGg",
    },
    {
      reviewId:
        "AbFvOqmDfUP0EhJuYm-w3KXy3gSxYn-NS9CiDOo4tOjO4PRuq4PWUWbGkh6K-fePdKQaXi0cycFGGn",
      reviewer: {
        profilePhotoUrl:
          "https://lh3.googleusercontent.com/a-/AOh14Ghk9qWwf0g3ocE_mVJO7lzFcdiNxyYIIlQi9bvKLw=c0x00000000-cc-rp",
        displayName: "Vasya P",
      },
      starRating: "5",
      comment: "Best coffeeshop",
      createTime: "2021-03-02T10:47:32.807Z",
      updateTime: "2021-03-02T10:47:32.807Z",
      reviewReply: null,
      name: "accounts/108494581129006735086/locations/6394464039148850881/reviews/AbFvOqmDfUP0EhJuYm-w3KXy3gSxYn-NS9CiDOo4tOjO4PRuq4PWUWbGkh6K-fePdKQaXi0cycFGGg",
    },
  ],
  averageRating: 5,
  totalReviewCount: 2,
};

const Review = () => {
  const [data, setData] = useState<any>(reviews);
  const [starCount, setStarCount] = useState<{
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    count: number;
  }>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, count: 0 });

  useEffect(() => {
    const starCount = data.reviews.reduce(
      (acc: any, review: any) => {
        const rating = review.starRating;
        if (!acc[rating]) {
          acc[rating] = 0;
        }
        acc[rating] += 1;
        acc["count"] += 1;
        return acc;
      },
      { count: 0 }
    );

    setStarCount(starCount);
  }, [data]);

  return (
    <>
      <div id="reviews" className="invisible relative top-[-100px] h-0">
        <wbr />
      </div>
      <section className="bg-zinc-900">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:py-32 lg:px-8">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              Recenze zákazníků
            </h2>

            <div className="mt-3 flex items-center">
              <StarView rating={data.averageRating} />
              <p className="ml-2 text-sm text-zinc-100">
                Na základě {data.totalReviewCount} recenzí
              </p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Data recenze</h3>

              <dl className="space-y-3">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <StarBar key={i} starRating={5 - i} starCount={starCount} />
                  ))}
              </dl>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-zinc-300 bg-white py-2 px-8 text-sm font-medium text-zinc-800 hover:bg-zinc-50 sm:w-auto lg:w-full"
              >
                Napsat recenzi
              </a>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <h3 className="sr-only">Recent reviews</h3>
            {data.reviews.map((review: any) => (
              <ReviewFull key={review.reviewId} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;

const ReviewFull = ({ review }: { review: any }) => {
  return (
    <div className="flow-root">
      <div className="-my-12 divide-y divide-zinc-200">
        <div className="py-12">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt="Emily Selman."
              className="h-12 w-12 rounded-full"
            />
            <div className="ml-4">
              <h4 className="mb-1 text-sm font-bold text-zinc-100">
                {review.reviewer.displayName}
              </h4>
              <StarView rating={Number(review.starRating)} />
            </div>
          </div>

          <div className="mt-4 space-y-6 text-base italic text-zinc-300">
            <p>{review.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StarBar = ({
  starRating,
  starCount,
}: {
  starRating: number;
  starCount: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    count: number;
  };
}) => {
  return (
    <div className="flex items-center text-sm">
      <dt className="flex flex-1 items-center">
        <p className="w-3 font-medium text-zinc-100">
          {starRating}
          <span className="sr-only"> star reviews</span>
        </p>
        <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
          <svg
            className="h-5 w-5 flex-shrink-0 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            ></path>
          </svg>

          <div className="relative ml-3 flex-1">
            <div className="h-3 rounded-full border border-zinc-200 bg-zinc-100"></div>

            {starCount[starRating] && (
              <div
                style={{
                  width:
                    (starCount[starRating] / starCount["count"]) * 100 + "%",
                }}
                className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
              ></div>
            )}
          </div>
        </div>
      </dt>
      <dd className="ml-3 w-10 text-right text-sm tabular-nums text-zinc-100">
        {starCount[starRating]
          ? (starCount[starRating] / starCount["count"]) * 100 + "%"
          : "0%"}
      </dd>
    </div>
  );
};

const StarView = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center">
      <p className="sr-only">{rating} out of 5 stars</p>
      {Array(rating)
        .fill(null)
        .map((_, i) => (
          <svg
            className="h-5 w-5 flex-shrink-0 text-yellow-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            key={i}
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            ></path>
          </svg>
        ))}

      {Array(5 - rating)
        .fill(null)
        .map((_, i) => (
          <svg
            className="h-5 w-5 flex-shrink-0 text-zinc-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            key={i}
          >
            <path
              fillRule="evenodd"
              d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
              clipRule="evenodd"
            ></path>
          </svg>
        ))}
    </div>
  );
};
