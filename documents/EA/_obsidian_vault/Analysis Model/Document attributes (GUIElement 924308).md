---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Person/User Interface"
domain: "Analysis Model"
element_id: 924308
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Document attributes

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/COMMON for Sales Network Management/SN Contact Person/User Interface

## 📝 Notes

This panel contains attributes of the document whose type is selected in "Document type". For each attribute there will be:

	
- label
	
- value.

The fields are visible only when "Document type" is selected.

Label:
*->Person->Person_Document->Document->Document_Type->Document_Type_Attribute.Name
Source:
*->Person->Person_Document->Document->Document_Attribute.Value

where * =

	
- Partner->Partner_Contact_Person

or

	
- Salesroom->Salesroom_Contact_Person

## 📊 Appears In (1 diagrams)

- Custom: Show Contact person detail
