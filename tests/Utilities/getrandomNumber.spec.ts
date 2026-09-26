import {test} from "@playwright/test"
import { getRandomNumber } from "../../utils/typescriptUtility"

test("getRandomNumber",async()=>{

    console.log(getRandomNumber(1, 100));

})