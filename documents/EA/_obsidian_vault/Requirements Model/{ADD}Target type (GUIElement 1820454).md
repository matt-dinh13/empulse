---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio/LOR-9701 AF: disbursement setting in Salesroom"
domain: "Requirements Model"
element_id: 1820454
diagrams: 2
connections: 1
tags:
  - guielement
  - requirements-model
---

# 🖥️ {ADD}Target type

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-9527 Indirect Disbursement - Circular 06 and Direct Cash Loan Ratio/LOR-9701 AF: disbursement setting in Salesroom

## 📝 Notes

{ADD LOR-9701/}
Target type of the disbursement method (i.e. party receiving the money disbursement).

Other:

	
- Enumeration values are taken from setting on salesroom (according to the rule Get allowed disbursement methods for application).
	
- Based on setting:
- if there is no value, the field is hidden
- If there is only one value available for selected disbursement method, then its value is automatically pre-selected and field is disabled
- If there are more than one value available for selected disbursement method, then field is empty by default (when no value is available on the respective payment channel yet).


LDM:

	
- //LDM source for field pre-filling
API get.paymentChannels[.purpose='DI'].type
	
- //LDM for value saving
API createDraft[.purpose='DI'].targetType/ 
patchDraft[.purpose='DI'].targetType


Localization code:
CON_TargetType

## 🔗 Connections (1)

- ← Generalization: [[{ADD}Target type]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-9701 AF: disbursement setting in Salesroom
- Custom: Way of disbursement - product AF
