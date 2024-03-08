"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [copied, setCopied] = useState();
  const router = useRouter();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="prompt_card">
      <div className=" flex justify-between items-start gap-5">
        <div className=" flex-1 flex justify-start items-center gap-5 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="profile image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className=" flex flex-col">
            <h3 className=" font-satoshi font-semibold text-gray-900">
              <Link href={(post.creator._id === session?.user.id) ? `/profile` : `/profile/${post.creator._id}`}>{post.creator.name}</Link>
            </h3>
            <p className=" font-inter text-gray-500 text-sm">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className=" copy_btn" onClick={() => handleCopy()}>
          <Image
            alt="copied logo"
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className=" font-satoshi my-4 text-gray-700 text-sm">{post.prompt}</p>
      <p
        className=" font-inter blue_gradient cursor-pointer text-sm"
        onClick={() => handleClick && handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
      {session?.user.id === post.creator._id && pathname === "/profile" && (
        <div className=" mt-5 flex-center gap-4 border-t border-gray-400 pt-3">
          <p
            className=" font-inter text-sm green_gradient cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className=" font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};
export default PromptCard;