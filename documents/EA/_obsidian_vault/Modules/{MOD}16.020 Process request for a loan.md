---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model"
domain: "Modules"
element_id: 1872764
diagrams: 3
connections: 8
tags:
  - usecase
  - modules
---

# 🎯 {MOD}16.020 Process request for a loan

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model

## 📝 Notes

This use case presents function for orchestration of the loan service requests based on Sales Quotes in case when Contract and Account are missing. The request is recorded as Contract Supplement (SUP) related loan service in Contract Service (COS).
The UC is only able to process one Sales Quote of the ACCOUNT_CREATION type. If there are also another SQ of different type, it is ignored.

## 🔗 Connections (7)

- → Dependency: [[Create Contract Supplement in SUP]]
- → Dependency: [[SIR - Get Service definitions from PRC Service Catalogue (Requirement 1872723)]]
- → Dependency: [[Get Supplement definition by process type from SUP]]
- → Dependency: [[{MOD}SIR - Create Contract Service in COS]]
- → Dependency: [[Create Contract in COMA]]
- → Dependency: [[{DEL}SIR - Create Loan Service in BSL.LoanService]]
- ← Dependency «invokes»: [[{MOD}16.010 Request for a loan service]]

## 📊 Appears In (3 diagrams)

- Use Case: Account origination - Use Case Model
- Use Case: SIR - Add Contract and Account creation steps into processing - use cases
- Use Case: SIR - Process Sales Quotes for Transaction
