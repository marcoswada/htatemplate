function testjs() {
    alert("testjs()");
}

function jsExcelAutomation() {
    var app = new ActiveXObject("Excel.Application");
    app.Visible = true;
    var wb = app.workbooks.add();
    var rng = wb.activeSheet.Range("A1").Resize(20,10);

    for(var i=0;i<20;i++) {
        for(var j=0;j<10;j++) {
            wb.ActiveSheet.Cells(i+1, j+1)=((i+1)*(j+1));
        }
    }
    wb.Charts.Add();
    wb.ActiveChart.ChartType=70; // xl3dPieExploded
    wb.ActiveChart.SetSourceData(rng, 2); // xlColumns
    wb.ActiveChart.Location(2, "Sheet1"); // xlLocationsAsObject

    for (var i=1;i<=360;i+=30) {
        wb.ActiveChart.rotation=i;
    }
    app.UserControl = true;
}
function jsDBECreateDB_create_click(){
    alert (document.querySelector("#txtFile").value);
    var dbe = new ActiveXObject("DAO.DBEngine.36");
    var db = dbe.createDatabase(document.querySelector("#txtFile").value, ";LANGID=0x0411;CP=932;COUNTRY=0", 64);
    db.close();
    return false;
}
