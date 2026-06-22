---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Create communication"
domain: "Analysis Model"
element_id: 1442207
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Prefilled fields for a new communication record

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Create communication

## 📝 Notes

When user selects to create a new record then some of fields are prefilled in a newly displayed form. Fields are prefilled according to data in form on which was selected new record creation and which fields are prefilled is influenced by selected channel.
Channel outgoing (COMMUNICATION_CHANNEL.DIRECTION = „OUT“) phone (COMMUNICATION_CHANNEL.TYPE = PHONE)

	
- Channel
	
- Type
	
- Subtype
	
- Contract number - it is prefilled only if client has only one Contract,  else empty value is preset in the field


Channel incoming (COMMUNICATION_CHANNEL.DIRECTION = „IN“) phone (COMMUNICATION_CHANNEL.TYPE = PHONE)

	
- Channel
	
- Phone number
	
- Contract number - it is prefilled only if client has only one Contract, else empty value is preset in the field


Other channels

	
- Channel


When more than one record exists, then field channel can’t be changed (i.e. after creation of new record in communication it’s not possible to change channel, not even on the first record).

## 🔗 Connections (2)

- ← Dependency: [[Create communication (Screen 1716032)]]
- ← Dependency: [[{MOD}07.040 Create communication record manually]]

## 📊 Appears In (2 diagrams)

- Custom: Create communication
- Use Case: Communication records
