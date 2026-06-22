---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights"
domain: "Analysis Model"
element_id: 1755896
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 Process contracts in 2BoD queue (from contract detail)

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights

## 📝 Notes

Entry condition A: User has access right 01.210 Show contract detail (contract in FO queue)
Entry condition B: User has access right 01.210 Show contract detail (contract in BO queue)
Entry condition C: record in Contract->Application_Filling_Queue exists

If A = True AND C =True and Application_Filling_Queue.Filling_Group = FO (B is True or False)then
The user can process contract in FO queue. (System can display button Cancel contract, Release contract)

If B = True AND C =True and Application_Filling_Queue.Filling_Group =BO (A is True or False)then
The user can process contract in BO queue. (System can display button Cancel contract, Release contract)

Otherwise
The user can not process contracts in FO or BO queue. System doesn't display these buttons.

## 🔗 Connections (4)

- ← Dependency: [[Fill in application (2BoD) (GUIElement 1871794)]]
- ← Dependency: [[Cancel application (GUIElement 1871782)]]
- ← Dependency: [[Release application]]
- ← Dependency: [[{MOD}01.210 Show contract detail]]

## 📊 Appears In (3 diagrams)

- Custom: Access Rights
- Custom: Business Rules
- Custom: Contract detail
