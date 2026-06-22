---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office"
domain: "Requirements Model"
element_id: 1822461
diagrams: 2
connections: 0
tags:
  - guielement
  - requirements-model
---

# 🖥️ Date created from

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10618 (CLM-3352) Limitation of search function on BSL for back office

## 📝 Notes

From-date when the contract was created.

In LDM search for: 
Contract->BusinessEvent[where type = CREATE_CONTRACT].TimeOfModification

Pre-filled by 'current date' - Get system contract search criteria based on configuration[DaysSinceBE].Value

If no Contract status  is selected, then this field is disabled.

Localization code: GEN_CreatedFrom

## 📊 Appears In (2 diagrams)

- Custom: REQ #3 - Implement CRM Search
- Custom: Search for contract
