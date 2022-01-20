function myFunction() {
    // console.log('Hello World')
    /**
繳費單位、繳費日期、繳費金額、備註
*/
let ss = SpreadsheetApp.getActiveSheet();
let ws = ss.getSheetName('工作表');

//A1
let range = ws.getRange(1,1);
range.setValue('繳費單位');

//B1
range = ws.getRange(1,2);
range.setValue('繳費日期');

//C1
range = ws.getRange('C1');
range.setValue('繳費金額');

//D1
range = ws.getRange('D1');
range.setValue('備註');
}
