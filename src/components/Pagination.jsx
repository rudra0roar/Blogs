import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Pagination (){
    const { page , handlePageChange , totalPages} = useContext(AppContext);
    return (
        <div className=" py-2 mt-6 border  rounded-md  w-full shadow-lg-inner fixed bottom-0 bg-white ">
            <div className="flex justify-between ">
                <div className="flex gap-3 justify-center">
                { page > 1 &&
                    <button className="px-1 py-2 drop-shadow-sm bg-slate-400 ml-3 rounded-md font-bold text-yellow-50"
                    onClick={() => handlePageChange(page -1)}>
                        Previous
                    </button>
                }
                { page < totalPages &&
                    (<button className="px-4 py-2 drop-shadow-sm bg-slate-400 ml-3 rounded-md font-bold text-yellow-50"
                    onClick={() => handlePageChange(page + 1)}>
                        Next
                    </button>)
                }
                </div>
                
                <p className="text-xl font-extrabold uppercase mr-2 flex items-center">
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    )
}