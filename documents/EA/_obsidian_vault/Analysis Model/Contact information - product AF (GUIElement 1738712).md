---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Contact information - product AF"
domain: "Analysis Model"
element_id: 1738712
diagrams: 1
connections: 8
tags:
  - guielement
  - analysis-model
---

# 🖥️ Contact information - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Contact information - product AF

## 📝 Notes

Localization code:
GEN_Contacts

Other:
Order of fields is not fixed, but the trend is to have the order in countries AFs as similar as possible.
Each contact person has its own panel. Panels are ordered according to TempAppl Person. Order.

When AF is opened for the first time or no related person is selected, this panel contains X blocks for related person, where X is value of Application Form Parameter.MinNumberOfRelatedPersons. 
Blocks with related person types defined in parameter Application Form Parameter.MandatoryRelatedPersonTypes are preset, are mandatory and are not removable.

## 🔗 Connections (8)

- ← Generalization: [[Contract information ID]]
- ← Generalization: [[Contact information VN (GUIElement 1533632)]]
- ← Generalization: [[Contact information IN (GUIElement 1724572)]]
- → Dependency: [[{DEL}Min number of unique phones of related persons]]
- → Dependency: [[Number of related persons of each type]]
- → Dependency: [[Min number of close related persons (Action 1787165)]]
- → Dependency: [[Total number of related persons (Action 1787168)]]
- ← Generalization: [[Contact information PH (GUIElement 1813907)]]

## 📊 Appears In (1 diagrams)

- Custom: Contact information - product AF
