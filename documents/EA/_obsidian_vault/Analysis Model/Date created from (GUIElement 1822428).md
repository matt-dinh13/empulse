---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model"
domain: "Analysis Model"
element_id: 1822428
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Date created from

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract search/User Interface Model

## 📝 Notes

From-date when the contract was created.

In LDM search for: 
Contract->BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification

Pre-filled by 'current date' subtracted by SEARCH_TIME_INTERVAL (global parameter)  days.

Localization code: GEN_CreatedFrom

## 🔗 Connections (2)

- → Dependency: [[Contract custom search criteria restrictions]]
- → Dependency: [[Contract search - time interval]]

## 📊 Appears In (1 diagrams)

- Custom: Search for contract
