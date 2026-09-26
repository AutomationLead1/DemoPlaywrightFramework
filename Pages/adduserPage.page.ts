import { Page, Locator } from '@playwright/test';

class AddUserPage {
    page:Page
    linkAdduser:Locator
    btnUploadPhoto:Locator
    txtFirstName:Locator
    txtLastName:Locator
    txtEmailId:Locator
    txtMobileNumber:Locator
    ddRole:Locator
    linkSocialProfile:Locator
    txtBio:Locator
    rdoActive:Locator
    rdoInactive:Locator
    chkReadUser:Locator
    chkCreateUser:Locator
    chkEditUsers:Locator
    chkDeleteUser:Locator
    btnCreateUser:Locator
    btnClear:Locator
    btnCancel:Locator

    constructor(page:Page){
        this.page=page
        this.linkAdduser=page.locator("#nav-link-add-user")
        this.btnUploadPhoto=page.locator("#profileImageInputLabel")
        this.txtFirstName=page.locator('#firstName')
        this.txtLastName=page.locator('#lastName')
        this.txtEmailId=page.locator('#emailId')
        this.txtMobileNumber=page.locator("#mobileNumber")
        this.ddRole=page.locator("#roleId")
        this.linkSocialProfile=page.locator('#socialLink')
        this.txtBio=page.locator("#bio")
        this.rdoActive=page.locator('#status-active')
        this.rdoInactive=page.locator('#status-inactive')
        this.chkReadUser=page.locator("#perm-read")
        this.chkCreateUser=page.locator("#perm-write")
        this.chkEditUsers=page.locator('#perm-edit')
        this.chkDeleteUser=page.locator('#perm-delete')
        this.btnCreateUser=page.locator('#submit-button')
        this.btnClear=page.locator('#reset-button')
        this.btnCancel=page.locator('#cancel-button')

    }

    async addUser(
        image: string,
        firstName: string,
        lastName: string,
        email: string,
        mobile: string,
        role: string,
        socialProfile: string,
        bio: string
    ) {
    
        await this.linkAdduser.click()
        await this.btnUploadPhoto.setInputFiles(image)
    
        await this.txtFirstName.fill(firstName)
        await this.txtLastName.fill(lastName)
        await this.txtEmailId.fill(email)
        await this.txtMobileNumber.fill(mobile)
    
        await this.ddRole.selectOption({ label: role })
    
        await this.linkSocialProfile.fill(socialProfile)
        await this.txtBio.fill(bio)
    
        await this.rdoActive.check()
    
        await this.chkCreateUser.check()
        await this.chkReadUser.check()
    
        await this.btnCreateUser.click()
    }
}
export default AddUserPage