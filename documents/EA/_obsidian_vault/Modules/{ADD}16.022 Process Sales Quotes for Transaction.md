---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities"
domain: "Modules"
element_id: 1872761
diagrams: 4
connections: 10
tags:
  - usecase
  - modules
---

# 🎯 {ADD}16.022 Process Sales Quotes for Transaction

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Requirement Model/CBL-27126 BREIT-82 - COMA, SUP, COS, SIR MVP Functionalities

## 📝 Notes

{ADD DOBA-78 /} --- this function mostly moved from the original UC16.020 (partial BasicPath + AW - Process Sales Quotes for Transaction and AW - Transaction Approval
The use case presents function for processing Sales Quotes of TRANSACTION type and adding them to Contract Supplement. The UC is able to process even more Sales Quotes of TRANSACTION type. Sales Quotes of other types are ignored.

## 🔗 Connections (10)

- → Dependency: [[SIR - Get Service definitions from PRC Service Catalogue (Requirement 1872723)]]
- → Dependency: [[{DEL}SIR - Create Insurance Contract in BSL.Insurance]]
- → Dependency: [[{ADD}SIR - Authorize transaction requests of the Contract Supplement via SUP]]
- → Dependency: [[{MOD}SIR - Adding Sales Quote to Contract Supplement in SUP]]
- → Dependency: [[{DEL}SIR - Create a Payment Channel for VAS in BSL Payment Channels]]
- → Dependency: [[Get Supplement definition by process type from SUP]]
- → Dependency: [[Create Contract Supplement in SUP]]
- → Dependency: [[{MOD}Determine the Loan Process type based on the provided Sales Quotes]]
- → Dependency: [[SIR - Get Insurance Program definition from INSR (Requirement 1872728)]]
- ← UseCase «invoke»: [[{MOD}16.010 Request for a loan service]]

## 📊 Appears In (4 diagrams)

- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Process Sales Quotes for Transaction
- Use Case: SIR - Processing of Account Event notifications
- Use Case: Transaction origination - Use Case Model
