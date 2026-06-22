---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/IN"
domain: "Analysis Model"
element_id: 1286071
diagrams: 3
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Address rules - IN

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/IN

## 📝 Notes

Operator can fill in address in two ways:

	
- User fills in PIN (ZIP code) and moves cursor out of this field.
- System searches record in the ZIP code list based on the inputted PIN. 
- If found, system filters values for fields state (region), district, town and post office by selected ZIP code. When only one value is available for particular field, it is pre filled and field is disabled. Otherwise user has to select one from available values.
Example: after ZIP code was selected, state has only one value available (it is pre filled and disabled), district has multiple values available (it is empty and enabled), town has multiple values available (as it is dependable on district - empty and enabled)
- If not found then an error message is displayed "PIN not found - enter particular address fields", and PIN, town, state, and district are deleted.
	
- User fills in the field Post office (it is enabled when State and District is inputted) and moves cursor out of this field.
- System searches record in the ZIP code list based on the inputted Post office.
- If found then values PIN, and town are pre-filled with corresponding values from the list (if exist).


If PIN is deleted, town, state, and district are deleted too.

## 🔗 Connections (1)

- → Generalization: [[Address rules]]

## 📊 Appears In (3 diagrams)

- Custom: Adress validation rules - IN
- Custom: Business Rules
- Custom: Edit Address - IN
