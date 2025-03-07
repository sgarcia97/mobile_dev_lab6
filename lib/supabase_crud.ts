
import { supabase } from "./supabase"

const getUsers = async () => {

        try{
            const {data, error} = await supabase.from('users').select("*")
    
            if(error){
            console.error('Error',error.message)
            return
            }
    
            return data
    
        }catch(error:any){
           return 'Error fetching data:' + error.message
        }
    
}

export default getUsers