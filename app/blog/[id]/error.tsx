"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  <div>
    <h2> Something Went Wrong</h2>
    <p onClick={reset}> Try again</p>
  </div>;
}
