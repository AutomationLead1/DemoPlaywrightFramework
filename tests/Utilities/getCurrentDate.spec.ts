import {test} from "@playwright/test"
import { getCurrentDate } from "../../utils/typescriptUtility"

test("getCurrentDate",async()=>{

    console.log("Current Date:", getCurrentDate());

})