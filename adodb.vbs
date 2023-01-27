function vbsDBECreateDB_create_click()
dim dbe
dim db
msgbox document.querySelector("#txtFile").value
set dbe = CreateObject("DAO.DBEngine.36")
set db = dbe.createDatabase(document.querySelector("#txtFile").value, ";LANGID=0x0411;CP=932;COUNTRY=0", 64)
db.close()
vbsDBECreateDB_create_click=false
end function
sub vbsDBECreateDB()
document.querySelector("#divDisplay").innerHTML="<form action='#' method='POST'>" & _
                                                "<label for='txtFile'>" & _
                                                "<input value='htatemplate-vbs.mdb' type='text' class='' name='txtFile' id='txtFile'>" & _
                                                "</label>" & _
                                                "<button onClick='vbsDBECreateDB_create_click()'>Create</button>" & _
                                                "</form>"
end sub

sub listTables()

Const adSchemaTables = 20

Set objConnection = CreateObject("ADODB.Connection")
Set objRecordSet = CreateObject("ADODB.Recordset")
objConnection.Open "Provider=Microsoft.Jet.OLEDB.4.0;Data Source='htatemplate-vbs.mdb'"
Set objRecordSet = objConnection.OpenSchema(adSchemaTables)
s=""
Do Until objRecordset.EOF
    s = s & "Table name: " & objRecordset.Fields.Item("TABLE_NAME") & "<br>"
    s = s & "Table type: " & objRecordset.Fields.Item("TABLE_TYPE") & "<br>"
    s = s & "<br>"
    objRecordset.MoveNext
Loop
document.querySelector("#divDisplay").innerHTML=s
end sub
