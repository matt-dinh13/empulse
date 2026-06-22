---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates"
domain: "Analysis Model"
element_id: 1821051
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}DDM document

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/Tab - Direct debit mandates

## 📝 Notes

Panel containing the detailed information about the DDM document as well as the operational buttons for related operations.

Separate instance of the panel is displayed for each available DDM document from the contract.

LDM source:

	
- /Applicable when the parameter (parameter.properties) useDDMRest = TRUE.
Document[UUID=GetDDMResponse.ddmData.documentData.uuid].*

or

	
- /Applicable when the parameter (parameter.properties) useDDMRest = FALSE.
DDM->DDM_Document->Document.*


Localization code: none

## 📊 Appears In (1 diagrams)

- Custom: Tab - Direct debit mandates
