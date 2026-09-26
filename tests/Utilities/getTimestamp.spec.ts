import {test} from "@playwright/test"
import { getTimestamp } from "../../utils/typescriptUtility"

test("getTimestamp",async()=>{

    console.log("Timestamp:", getTimestamp());
    
})