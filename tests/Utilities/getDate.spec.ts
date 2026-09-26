import {test} from "@playwright/test"
import { getDate} from "../../utils/typescriptUtility"

test("getDate",async()=>{
    
    console.log("Date after 2 days:", getDate(2));

    console.log("Date before 2 days:", getDate(-2));
})