import {test} from "@playwright/test"
test("icc cricket ranking",async({page})=>{
    await page.goto('https://www.icc-cricket.com/rankings')

    let name="Steve"

    let ratings=await page.textContent(`//span[text()="${name}"]/ancestor::td[@class="w-[calc(100%-110px)] align-middle"]/preceding-sibling::td//span[@class="text-xs font-extrabold uppercase text-primary pr-2"]`)

    console.log(ratings);
    
})