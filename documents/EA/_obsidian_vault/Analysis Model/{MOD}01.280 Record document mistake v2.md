---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights"
domain: "Analysis Model"
element_id: 1868302
diagrams: 9
connections: 9
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.280 Record document mistake v2

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/AccessRights

## 📝 Notes

The use case presents initial part of the record document mistake functionality. It ensures opening a form for a document mistake entering in the new TCK module.

Only if the new TCK is deployed!

## 🔗 Connections (8)

- ← Dependency: [[Record mistake (GUIElement 1863746)]]
- → Realisation: [[{ADD}01.280 Record document mistake]]
- → UseCase «invoke»: [[10.080 Create mistake ticket (Boundary 1868332)]]
- → Dependency: [[{ADD}Get business event by operation]]
- → Realisation: [[01.280 Record document mistake]]
- ← Realisation: [[Record mistake (GUIElement 1868372)]]
- ← UseCase: [[User (Actor 1880892)]]
- ← UseCase: [[TCK (Actor 1880875)]]

## 📊 Appears In (9 diagrams)

- Custom: AccessRights
- Custom: CBL-12588 (CLM-2810) REM integration - Contract detail - Registration tab
- Custom: CBL-16401 (CLM-4620) Post activation docs review - BSL - Registration tab adjustements
- Custom: CBL-7809 (CLM-2439) Registration mistake enhancement
- Custom: CBL-8652 (CLM-2697) Enhancement API ContractDocument
- Custom: Document registration panel - User interface model
- Custom: REQ #3 - Update Contract Detail GUI to use UUID instead of DOCUMENT_REF
- Custom: TCK:Record document mistake
- Use Case: Document checking within contract registration
