import path from "path";
import {test} from "@playwright/test"
import { readJson } from "../../utils/JSONutility";

const data = readJson(path.join(__dirname,"../../test-data/testdata.json"));

test("json utils",async()=>{
    
console.log(data.username);
console.log(data.password);
})