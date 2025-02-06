import mongoose from "mongoose";
// import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  name: {type:String, required: true},
  email: {type:String, required: true},
  password: {type:String, required: true},
  role: {type:String, enum: ["admin", "employee"],required: true},
  profileImage: {type: String},
  createAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now},
})

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next(); // Only hash if the password is new/changed
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

const User = mongoose.model("User", userSchema)
export default User