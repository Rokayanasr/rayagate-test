import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import PostDetails from "../pages/PostDetails";

export default function AppRouter() {
  return (
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="posts/:id" element={<PostDetails />} />
            </Routes>
  )
}
