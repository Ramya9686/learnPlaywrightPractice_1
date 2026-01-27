//1 // Buttons
// click()
// dblclick()
// Rightclick()

// To click hidden element use click({ force: true})

// .should('be.visible') visible in UI
// .should('be.exist') not visible in the UI but exist (hidden elements)


//============================================================================================


//2 //editbox
// cy.get(editboxlocator).should('be.visible')
// cy.get(editboxlocator).should('be.exist')
// cy.get(editboxlocator).should('be.disabled')
// cy.get(editboxlocator).should('be.enabled')
// cy.get(editboxlocator).should('have.attr', attaname, attrvalue)
// cy.get(editboxlocator).should('have.value', 'value')
// cy.get(editboxlocator).type(text)
// cy.get(editboxlocator).clear()

//=======================================================================================

// Keyboard press
// enter
// ctlr  
// alt 
// delete

// cy.get(editboxlocator).text(text {enter})
// cy.get(editboxlocator).text(text {selectAll} {enter})
// cy.get(editboxlocator).text(text {delete})

//=============================================================================================

// 3.checkbox
// standard format to develop checkbox
// tagname - input 
// attribute - type = checkbox 

// how we can check the checkbox is 
// cy.get(checkboxlocator).check()
// cy.get(checkboxlocator).uncheck()

//assertion 
// cy.get(checkboxlocator).should('be.checked)
// cy.get(checkboxlocator).should('not.be.checked)
// cy.get(checkboxlocator).should('be.visible')
// cy.get(checkboxlocator).should('be.exist')
// cy.get(checkboxlocator).should('be.disabled')
// cy.get(checkboxlocator).should('be.enabled')
// cy.get(checkboxlocator).should('have.attr', attaname, attrvalue)
// cy.get(checkboxlocator).should('have.length', 2) // to check how many checkboxes available

//multiple checkboxes
//cy.get(checkboxlocator).check() - it will check all the checkboxes at a time 
//cy.get(checkboxlocator).uncheck() - it will uncheck all the checkboxes at a time 
// cy.get(checkboxlocator).check(['checkboxname1', 'checkboxname2']) -- attribute is value and we have to give attribute value

// If the below format is not available use click() method to check the checkboc
// tagname -> input - if it's not their
// attribute -> type = 'checkbox'  - if it's not their
// //cy.get(checkboxlocator).click()


// 4 Radio Button
// tagname - input - 
// attribute - type = 'radio'

//cy.get(checkboxlocator).check()

// for radio button uncheck is not possible, to uncheck we have to click on another radio button

// radio button and checkbox both are same only uncheck is different

// README.md file - instructions for new joiners after cloning the project what we have to follow
//=========================================================================================================================================

//5 dropdown

// standard way of develop dropdown
// tagname - select
                     // <option 
                    // <option

// 3 ways we can handle the dropdowns
// 1. Text
//cy.get(dropdownlocator).select(Text)

// 2. value
//cy.get(dropdownlocator).select(value)

// 3. Index
//cy.get(dropdownlocator).select(Index)

//======================================================================

// 6.alert

// https://the-internet.herokuapp.com/javascript_alerts

// It will click on alert popup and it will verify the popup text 
// this is for only Ok button option available

// cy.contains('click for JS Alert').click()
// cy.on('window:alert', (alert) => {
// expect (alert).to.equal('I am a JS Alert')
//   return true
// })



//   return true - will click on ok
// return false - will click on cancel


// cy.contains('click for JS confirm - click on OK').click()
// cy.on('window:alert', () => {
//   return true - will click on ok
// })


// cy.contains('click for JS confirm - click on cancel').click()
// cy.on('window:alert', () => {
// return false - will click on cancel
// })


// ramya - here we can enter our own name


// cy.contains('click for JS Prompt - click on OK').click()
// cy.window().then((ramya) => {
//     cy.stub(ramya, 'prompt').returns('text');
//     cy.contains('click for JS Prompt').click()
// })

// cy.contains('click for JS Prompt - click on Cancel').click()
// cy.window().then(($win) => {
//     cy.stub($win, 'prompt').callsfake(() => null)
//     cy.contains('click for JS Prompt').click()
// })

//===============================================================================

// How to ignore the console error

// Cypress.on("uncaught:exception", () => {
//     return false;
// })

//========================================================================
// 7. iframe 

// install iframe plugin - > cypress --Iframe
// use cy.framwloaded()- load the iframe
// use cy.iframe (pass the iframe locator)

// without installing iframe plugin
// cy.visit('url')
// cy.get(iframelocator).then($frame) =>{
    // (variable) -> let checkbox = $iframe.contents().find(checkboxlocator)
    //cy.wrap(checkbox(variablename)).click()
    
//}

// cy.wrap -> what it will do?
// it will give resolved value

//without iframe plugin also we can work with iframe

//===============================================================================

// 8. Tabs
// cypress we can't swith from one tab to another tab is not possible this is limitation of cypress
//trade-offs
//** remove target attribute */
// how to remove target attribute --- using .invoke('removeattr' 'attributename') method we have to remove target attribute
// ex : cy.get(locator).invoke('removeattr', 'target').click({force: true})
//.click({force: true}) - to click hidden element

// if you don't have target = _blank how will you work
//         cy.visit('url', {
//         onbeforeunload(win) {
    //      cy.stub(win, 'open')
//       }
//      })
// cy.get ('locator').click()
// cy.window().its('open').should('be.called')

//================================================================================
// 9. mouseactions

// hover on 
// .trigger() -> inbuilt method to hover on particular element -> mouseover on
// .trigger('mousedown') -> like this we will pass mouse events/actions
//=========================================================================================
// .rightclick() -> to clik right side or rightclick on menu
// .dblclick()
//===========================================================================================
// we have to get the locator untill where we have to scroll and use .scrollIntoView() method
// .scrollIntoView() ->  cy.get(till where we need to scroll that locator).scrollIntoView()
//============================================================================================
// drag and drop()
// source item -> which item we have to drag
// target item -> where we have to drag

// Ist  approach for drag and drop
// we have to use plugin for drag and drop

//npm istall -- cypress-drag-drop -> we have to run this command and commands.js file paste one line

// .drag() method we will use for drag and drop

//cy.get('source item locator').drag('target item locator')
//================================================================================================

//2nd approach for drag and drop

// DataTransfer() inbuilt method in JS class

// like below we will use drag and drop
// const datatransfer = new  DataTransfer()
//cy.get('source item locator').trigger('dragstart' { datatransfer})
//cy.get('target item locator').trigger('drop' { datatransfer})

//================================================================================

//Links
// cy.origin() -> we will use to navigating to multiple domains is a limitation of cypress however using cy.origin() we can work with multiple website
// how many check boxes in a page -> input[type= 'checkbox']
// how many links are their in my current web page to get the count -> tagname is - a in DOM search '//a'
// how many radio buttons are their in web page ->input[type= 'radio']
// how many table are their in web page -> //table 

// To verify how many links are their in apllication
// cy.get('a').should('have.length', enter manually seen number like 380)

// To click on particular link
// cy.get('a').contains(link text).click()
// to verify partial url -> cy.url().should('include', 'partial url')
// to verify full url -> cy.url().should('eq', 'full url')
// cy.visit('url')
// cy.get("").click() - click login button then if it's open new different url means use cy.origin()
// cy.origin('url', =>(){
    // cy.url().should('include', 'partial url')
    //})
// verify the link randomly without knowing in DOM
//cy get('a').its('length').then((elementlength) =>{
    // var lengthcount = elementlength 
    // cy.log(lengthcount)

    // expect(lengthcount).to.equal(698)
    // expect(lengthcount).to.be.within( 600, 700)
// }) 
//important
// how will you get the text
// cy.get('textlocator').then((txt) => {
//     var linktext = txt.text()
//     cy.log(linktext)
// })
//==============================================================================================
// Table
// how many table are their in web page -> //table 
// thead - > table headder
// tvody -> table body 
// tr -> row 
// td -> collum

// how many collums their in table 
// cy.get('locator').should('have.length', '4')

// how many rows their in table 
//cy.get(locator).should('have.length', '5')

// i want to verify 5th collum third row element in the table
// cy.get(locator).then((text)  =>{
//     var currentprice =  Text.text()
// expect(currentprice).to.equal("566")
// })

// within() -> inbuilt method in cypress for verifying table we use this
//============================================================================================================================

//shadow DOM elements
// shadow root library they are using for security purpase
//untill shadow root we have to take a locator and the .shadow().find(enterparticularlocator).type('ramya')
//cy.get('#shadow_host').shadow().find(enterparticularlocator).type('ramya')
//shadow()-> inbuilt method in cypress

//=========================================================================================================================

// how will you upload the file?
// any file we have to store fixture folder to upload


//file upload can be done in 2 ways
//1.plugin -> .attachfile()
//2.inbuilt method ->.selectFile()

//plugin name to upoad a file -> cypress --upload

//1.plugin -> .attachfile()
// plugin name -> cypress-file-upoad
//cy.get(locator).attachFile(filenamecopy from relative path)

//2.inbuilt method ->.selectFile()
//cy.get(locator).selectFile(filename copy from the path full path we have to enter)

// we canattach the multiple files using .attachFile() method

//==============================================================================================================

//download
//plugin -> cypress -downloadfile
//cy.downloadFile('enter url of the image', "cypress/downloads/cbd.jpg")
//cy.readFile("cypress/downloads/cbd.jpg").should("exist")

//==================================================================================================================


//multiple : true

// if we want to click on multiple element serially one by one that time we will use multiple true

// cy.get(locator).click({multiple:true})
//=================================================================================================================

//writefile
// cy.writefile -> is inbuilt method in cypress
// here we will store a dynamically generated data
// it can create json file and xml file
//cy.writefile(enter the foldername which we want to create, (ex:cypress/fixures/test.txt), 'amya' (this is the data ))
// falg: 'a+' it wii appending the data for text file
// appending the data means eralier whatever is their it don'tt want to erase and we can add new data 
//cy.writefile(enter the foldername which we want to create, (ex:cypress/fixures/test.txt), 'amya' (this is the data ), {falg: 'a+'})


//json file
// how to append the data for json -> falg: 'a+' it wii appending the data for text file
//cy.writefile(enter the foldername which we want to create, (ex:cypress/fixures/flipkart.json), {mobile: "iphone", (this is the data ), {falg: 'a+'})

//=========================================================================================================================================================================
//readfile
//cy.readFile(enter the foldername which we want to create, (ex:cypress/fixures/flipkart.json)
// before doing readfile we have to download file, downloaded file should exist then we canread the file
// cy.readFile(path(ex:cypress/fixures/flipkart.json)).should("exist")
//particulary read the particular file values -> cy.readFile(path(ex:cypress/fixures/flipkart.json)).its("username")should("eq", "Admin")
//particulary read the particular file values -> cy.readFile(path(ex:cypress/fixures/flipkart.json)).its("username")should("include", "Admin") // it will verify full 
// text we can read but images we can't read it

//===================================================================================================================================================================================

//conditional testing
//If Else condition
//cy.url().should("eq", "full url")
//cy.url().should("include", "partial url")
//cy.title().should("eq", "full title")
//cy.title().should("include", "partial title")

//===============================================================================================================================================================================================

//cy.session
//this will help us to restore session storage, local storage and coockies
// beforeEach (function () {
// cy.session("login session", () => {
//     cy.visit("end path")
//     cy.get(locator).type('admin')
//     cy.get(locator).type('admin123')
//     cy.get(locator).click()
// })
//})