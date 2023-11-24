import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from "./Spinner";


export default function Blogs(){
    const {loading , posts} = useContext(AppContext);
    return(
        <div className=" flex flex-col w-11/12 max-w-[450px] gap-y-7 mt-16 mb-16">
            {
                loading ? 
                (<Spinner/>) : 
                (
                    posts.length ===0 ? 
                    (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    ) :
                    (
                        posts.map((post) => (
                            <div className=""
                            key={post.id}>
                                <p className="font-bold text-sm">{post.title}</p>
                                <p className="text-[13px]">
                                    By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
                                </p>
                                <p className="text-[13px]">Post on {post.date}</p>
                                <p className="text-[14px]">{post.content}</p>
                                <div className="flex gap-3">
                                    {
                                        post.tags.map((tag , index) => {
                                            return <span className="underline text-cyan-600 text-[8px]" 
                                            key={index}>{`   #${tag}`}</span>
                                        })
                                    }
                                </div>
                            </div>
                        ) )
                    )
                )
            }
        </div>
    )
}