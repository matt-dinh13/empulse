---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Access Rights"
domain: "Analysis Model"
element_id: 1862211
diagrams: 6
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.064 Create request for change due date common

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Access Rights

## 📝 Notes

{ADD CLM-1856 /}
This technical use case creates LoanServiceRequest generated in GUI or by API (it persists data from virtual Change Due Date Request into DB).
If any service documentation is set, it is processed as well. 
At the end, an asynchronous task for request processing is registered (if no approval is needed).  

Function is moved from 08.062 Create request for change due date

## 🔗 Connections (9)

- → Dependency «invokes»: [[08.920 Evaluate collection tool service request]]
- → Dependency: [[Create contract supplement rule (Requirement 1879308)]]
- → UseCase «include»: [[{MOD}13.205 Create contract supplement documents v2]]
- → Dependency: [[Check TopUp overlap period for contract]]
- → Dependency: [[Change status of Contract Supplement]]
- → Realisation: [[{ADD}08.064 Create request for change due date common]]
- → Realisation: [[Requirement1 (Boundary 1611139)]]
- ← UseCase «include»: [[{MOD}08.062 Create request for change due date]]
- ← UseCase «include»: [[01.795 Create ContractCHDDRequest service (UseCase 1869792)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-18427 (CSI-2407) TopUp Service usage
- Custom: CBL-5303 (CLM-1856) Create API for CHDDR request
- Use Case: CHDDR request creation - externally
- Use Case: CHDDR request creation - via GUI
- Use Case: CSI-1119 Use DMS in UC 08.356 Generate service request document
