import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { getRecentPost } from "@/services/RecentPosts";
import { IPost } from "@/types";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const RecentPost = async () => {
  const { data: Posts } = await getRecentPost();
  console.log(Posts);
  return (
    <Container>
      <div className="section-title my-8">
        <h2 className="mb-2 text-center text-2xl">Recently founded Items</h2>
        <p className="text-center">
          A list of items that have been recently found and reported
        </p>
      </div>
      <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-4">
        {/* {Posts.map((item) => (
          <p>{item.title}</p>
        ))} */}

        {Posts.map((post: IPost) => (
          <Card key={post?._id} post={post} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          className="rounded-md bg-default-900 text-default-300"
          size="md"
        >
          <Link href="/found-items">See All</Link>
        </Button>
      </div>
    </Container>
  );
};

export default RecentPost;
