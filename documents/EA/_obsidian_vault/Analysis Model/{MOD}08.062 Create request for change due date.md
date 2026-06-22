---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Access Rights"
domain: "Analysis Model"
element_id: 1862213
diagrams: 4
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.062 Create request for change due date

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Change of Due Date on request/Access Rights

## 📝 Notes

{MOD CLM-1856 /}
The use case checks service eligibility, deactivates any unprocessed loan service request  (if the user confirms a system question) and calls {ADD}08.064 Create request for change due date common to persists data from virtual Change Due Date Request into DB, generate documentation and register an asynchronous task for request processing.

## 🔗 Connections (10)

- ← Dependency: [[Create request (GUIElement 1747003)]]
- → Dependency: [[Deactivate contract early termination requests]]
- → Dependency: [[Check for collection tool services]]
- → Realisation: [[08.062 Create request for change due date]]
- → Dependency: [[Check concurrent active loan services and requests rule]]
- → Realisation: [[08.062 Create request for change due date - change fee]]
- → Dependency: [[Check chosen service for eligibility]]
- → Realisation: [[Requirement1 (Boundary 1611139)]]
- → UseCase «include»: [[{MOD}08.064 Create request for change due date common]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: CBL-5303 (CLM-1856) Create API for CHDDR request
- Custom: Create request for Change due date
- Use Case: CHDDR request creation - via GUI
