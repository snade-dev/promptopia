import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    name: {
        type: String,
        required: [true, "Name is required"],
        unique:  [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
        required: [true, "Image is required"],
    },
    })

    export default models.User || model("User", userSchema);