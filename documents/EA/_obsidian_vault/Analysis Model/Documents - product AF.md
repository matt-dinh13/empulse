---
type: GUIElement
stereotype: "form"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Documents - product AF"
domain: "Analysis Model"
element_id: 825300
diagrams: 1
connections: 6
tags:
  - guielement
  - analysis-model
---

# 🖥️ Documents - product AF

> **Type**: GUIElement · **Stereotype**: «form»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Documents - product AF

## 📝 Notes

When panel Other documents is empty, whole section must be hidden. Empty means:

	
- no possibility to add document (combobox and button "Add Document" are hidden) 
	
- there is no previously created documents that could be displayed in this panel

Consequently whole section Documents will be hidden.

Localization code:
DOC_Documents

## 🔗 Connections (6)

- ← Generalization: [[Documents IN]]
- ← Generalization: [[Documents VN (GUIElement 743235)]]
- ← Generalization: [[Documents ID]]
- → Dependency: [[Document distribution in AF]]
- → Dependency: [[Min number of documents (Action 1787175)]]
- ← Generalization: [[Documents PH]]

## 📊 Appears In (1 diagrams)

- Custom: Documents - product AF
