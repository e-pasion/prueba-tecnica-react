import { useEffect, useState } from "react";
import { getData } from "../api/axios";
import Cover from "./Cover";

// eslint-disable-next-line react/prop-types
function ListCover({type}) {

        const [data,setData] = useState([]);
        const [loading,setLoading] =useState(true);
        const [error,setError] =useState(false);

        
    
        useEffect(()=>{
            getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);
        
    
        async function getMovies(){
                let data;
                try {
                    data= await getData();
                } catch (error) {
                    setLoading(false);
                    setError(true);
                }
                const entries=data.data.entries
                const filterEntries=entries.filter((entry)=>{
                    return entry.programType==type && entry.releaseYear>=2010;
                })
        
                filterEntries.sort((a,b)=>{
                        console.log(a["title"])
                        return a["title"] > b["title"]?1:-1;
                    
                })
                const result=filterEntries.slice(0,20)
                setData(result);
                setLoading(false);
                
            


        }
    
        if(loading) return <h1 className="mx-28 mt-20">Loading ...</h1>
        if(error) return <h1 className="mx-28 mt-20">Oops something went wrong ...</h1>


  return (
    <div>
                <div className=" flex flex-wrap mt-10 mx-28">
        {   
            data.map((serie)=>{
                return <Cover key={serie?.title+ data?.releaseYear} cover={serie}/>
            })
        }

        </div>

    </div>
  )
}

export default ListCover;