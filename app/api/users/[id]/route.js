import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (req, {params}) => {
  try {
    await connectToDB();
    const prompts = await User.find({ _id: params.id});
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
