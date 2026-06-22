---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Secondary contact address - product AF"
domain: "Analysis Model"
element_id: 1107118
diagrams: 1
connections: 4
tags:
  - guielement
  - analysis-model
---

# 🖥️ Secondary contact address - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Secondary contact address - product AF

## 📝 Notes

This panel is visible only if "Permanent address is different from contact address" is checked.

LDM source:
TemporaryApplication.TempApplClientAddress.TempApplAddress.selected
where Temporary_Application.TempAppl_Client_Address.Role = PERMANENT or 
TemporaryApplication.TempApplClientAddress.TempApplAddress.selected
where Temporary_Application.TempAppl_Client_Address.Role = CONTACT

Note: LDM source is based on country setting (some countries use permanent address as secondary contact address, some countries use contact address)

Secondary address type must be different from primary address type

Localization codes: ADR_PermanentAddress or GEN_ContactAddress (based on selected address type)

## 🔗 Connections (4)

- ← Generalization: [[Secondary contact address VN (GUIElement 989065)]]
- ← Generalization: [[Secondary contact address IN (GUIElement 1107114)]]
- ← Generalization: [[Secondary contact address PH (GUIElement 1351537)]]
- ← Generalization: [[Secondary contact address ID (GUIElement 1352387)]]

## 📊 Appears In (1 diagrams)

- Custom: Secondary contact address - product AF
