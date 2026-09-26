import {test} from "@playwright/test"
import { getRandomString } from "../../utils/typescriptUtility"

test("getRandomString",async()=>{

    console.log("Random String:", getRandomString(8));

})