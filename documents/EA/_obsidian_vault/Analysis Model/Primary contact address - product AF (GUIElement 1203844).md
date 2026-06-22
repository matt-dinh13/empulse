---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Primary contact address - product AF"
domain: "Analysis Model"
element_id: 1203844
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Primary contact address - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Primary contact address - product AF

## 📝 Notes

LDM source:
TemporaryApplication.TempApplClientAddress.TempApplAddress.selected
where Temporary_Application.TempAppl_Client_Address.Role = PERMANENT or 
TemporaryApplication.TempApplClientAddress.TempApplAddress.selected
where Temporary_Application.TempAppl_Client_Address.Role = CONTACT

Note: LDM source is based on country setting (some countries use permanent address as primary contact address, some countries use contact address)

Localization codes: ADR_PermanentAddress or GEN_ContactAddress (based on selected address type)

## 🔗 Connections (4)

- ← Generalization: [[Primary contact address VN (GUIElement 989546)]]
- ← Generalization: [[Primary contact address IN (GUIElement 1107107)]]
- ← Generalization: [[Primary contact addres PH]]
- ← Generalization: [[Primary contact address ID (GUIElement 1466384)]]

## 📊 Appears In (1 diagrams)

- Custom: Primary contact address - product AF
