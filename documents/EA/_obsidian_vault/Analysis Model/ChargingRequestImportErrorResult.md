---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response/ChargingRequestsImportResult"
domain: "Analysis Model"
element_id: 543327
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ChargingRequestImportErrorResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response/ChargingRequestsImportResult

## 📝 Notes

Error report:
There is need to tell user exactly which combinations of contracts (CONTRACT.CODE, CONTRACT.ID), and tariff items (TARIFF_ITEM.CODE, TARIFF_ITEM.TARIFF_ITEM_TYPE.NAME, TARIFF_ITEM.ID) are invalid. System sends user error report in this structure:

Import charging requests
File: (FILE_FEES.NAME)
Imported: (FILE_FEES.IMPORT_DATE_TIME as MM/DD/YYYY HH:MM.SS) 
System rejected import (date and time of end asynchronous job as MM/DD/YYYY HH:MM.SS), due following errors:
Order; File row number; Contract identification number; Contract code; Fee/penalty identification number; Fee/penalty type name; Fee/penalty code; Error description
ORDER; FILE_FEES.ROW_NUMBER;CONTRACT.ID;FILE_FEES.CONTRACT_CODE;TARIFF_ITEM.ID;TARIFF_ITEM.TARIFF_ITEM_TYPE.NAME;FILE_FEES.TARIFF_ITEM_CODE;ERROR_DESCRIPTION
(Where ORDER is order of error, FILE_FEES.ROW_NUMBER is row number in input file where error was detected, CONTRACT.ID  is identification number of contract which is selected by system from database, FILE_FEES.CONTRACT_CODE is unique contract code from input file,  TARIFF_ITEM.ID is identification number of tariff item which is selected by system from database, TARIFF_ITEM.TARIFF_ITEM_TYPE.NAME is name of tariff item type which is selected by system  from database, FILE_FEES.TARIFF_ITEM_CODE is unique code of tariff item from input file and ERROR_DESCRIPTION is error message from VAL_0601_Fees_File_Content_Validation.)
Example:
Import charging requests
File: 20110622_Fees.xml
Imported: 06/22/2011 22:30
System rejected import at 06/22/2011 22:31 due following errors:
Order; File row number; Contract identification number; Contract code; Fee/penalty identification number; Fee/penalty type name; Fee/penalty code; Error description 
1;36;;XXX;123;Payoff penalty;Invalid contract ID
2;38;12340;CO0012340;;;QQQ;Invalid tariff item ID
3;42;12341;CO0012341;123;Payoff penalty;POF1;Tariff item belongs to tariff which was not actual for contract deal date
-	Row 1 means: at row 36 of input file was detected invalid CONTRACT.CODE (XXX), so system cannot find CONTRACT.ID and field is empty.
-	Row 2 means: at row 38 of input file was detected invalid TARIFF_ITEM.CODE (QQQ), so system cannot find TARIFF_ITEM.ID, and TARIFF_ITEM.TARIFF_ITEM_TYPE.NAME and this fields are empty.
-	Row 3 means: at row 42 of input file are CONTRAC.CODE and TARIFF_ITEM.CODE valid, but tariff (TARIFF) of tariff item is not actual.

## 🔗 Connections (1)

- → Association: [[ChargingRequestResult (Class 543328)]]

## 📊 Appears In (1 diagrams)

- Logical: ChargingRequestsImportResult

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract ID | long |  |
| Error description | long |  |
| File fees contract code | long |  |
| File fees row number | long |  |
| File fees tariff item code | short |  |
| Order | long |  |
| Tariff item ID | long |  |
| Tariff item type name | long |  |
