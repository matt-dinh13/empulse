---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF/Additional contact - product AF"
domain: "Analysis Model"
element_id: 1019345
diagrams: 2
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Amount of necessary additional contacts

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Personal information - product AF/Contact to client - product AF/Additional contact - product AF

## 📝 Notes

This label displays information about amount of necessary additional contacts on AF (based on global parameter MinAmoutOfAdditionalContacts). 

This label is hidden if:

	
- global parameter MinAmoutOfAdditionalContacts = 0 or 
	
- (MinAmoutOfAdditionalContacts - currently added additional contacts) = 0


Localization code:
APP_MinOfAdditionalContacts

## 📊 Appears In (2 diagrams)

- Custom: Additional contact - product AF
- Custom: Additional contact ID
