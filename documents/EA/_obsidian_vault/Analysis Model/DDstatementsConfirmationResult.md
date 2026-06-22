---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response"
domain: "Analysis Model"
element_id: 543339
diagrams: 2
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 DDstatementsConfirmationResult

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Automatic Import response

## 📝 Notes

Import direct debit statement confirmations
File: <<imported file name>>
Imported: <<date and time of import>>
Import status: <<import status>>
<<additional info>>

<<imported file name>> - name of imported file (i.e. DirectDebitStatementConfirmations.xml); mandatory
<<date and time of import>> - date and time of import execution (i.e. 30.12.2011 14:33:22 – date format depends on defined locales); mandatory
<<import status>> status of import (successful, partially successful or failed); mandatory
<<additional info>> - additional information in case when import is not fully successful; optional

If import was partially successful, then message to user will contain information about name and location of file with unprocessed records.

Returned message examples:
Import direct debit statement confirmations
File: DirectDebitStatementConfirmations_2011_12_10.xml
Imported: 11.12.2011 12:33:01
Import status: successful

Import direct debit statement confirmations
File: DirectDebitStatementConfirmations_2011_12_11.xml
Imported: 12.12.2011 09:12:44
Import status: Failed
File size 123.4 MB is greater than allowed maximum 100 MB.

Import direct debit statement confirmations
File: DirectDebitStatementConfirmations_2011_12_12.xml
Imported: 13.12.2011 18:06:21
Import status: Failed
Corresponding active DDM does not exist for direct debit statement on line 76.

Import direct debit statement confirmations
File: DirectDebitStatementConfirmations_2011_12_13.xml
Imported: 14.10.2011 13:47:24
Import status: Partially successful
Some DD statement confirmations weren't processed correctly. All unprocessed direct debit statement confirmations were moved to the new file DirectDebitStatementConfirmations_2011_12_13_unprocessed.xml which is stored in /user/homerselect/wrongDDSstatements. Rest of direct debit statement confirmations was processed correctly.

## 🔗 Connections (1)

- ← Dependency «use»: [[ResultAutomaticImportIncomingPaymentsWS]]

## 📊 Appears In (2 diagrams)

- Logical: Automatic Import response
- Logical: DDstatementsConfirmationResult

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| File name | Text |  |
| Import status | Text |  |
| Imported | Date |  |
| Message | Text |  |
