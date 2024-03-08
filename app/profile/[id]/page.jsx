"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";

import Profile from "@components/Profile";

const AutherProfile = () => {
  const [user, setUser] = useState(null);
  const params = useParams();
  const router = useRouter();
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id}`, {
          method: "DELETE",
        });
        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const userz = await fetch(`/api/users/${params.id}`);
      const data2 = await userz.json();
      setUser(data2[0]);
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

  return (
    <Profile
      name={user?.name}
      desc={`Welcome to your ${user?.name} profile`}
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};
export default AutherProfile;
