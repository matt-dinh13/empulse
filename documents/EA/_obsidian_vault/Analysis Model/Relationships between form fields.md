---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Create communication"
domain: "Analysis Model"
element_id: 1442208
diagrams: 3
connections: 7
tags:
  - requirement
  - analysis-model
---

# 📋 Relationships between form fields

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Communication/Manage communication/User Interface/Create communication

## 📝 Notes

Channel, type, subtype, subtype specification and subspecification
Fields are related in order of Channel (level 1) -> Type (2) -> Subtype (3) -> Subtype Specification (4) -> Subtype Subspecification (5). When user wants to fill in attributes in these fields then he has to fill in channel first, then continue with type and finally subtype. If specifications and subspecifications for chosen subtype exist in the DB, the user may fill this fields as well. Values in fields on lower level offer only values available for value selected in higher level field.
When value in higher level field is changed, then values in lower level fields are erased to empty value and set of available values is changed to values available for newly selected higher level value.
Channel, status
Fields are related in order of Channel (1) -> Status (2). All rules described in section Channel, type, subtype apply in this case as well.

Result, additional result part fields
Value selected in field Result influences which additional result part fields will be displayed. When value in Result field is changed, then additional result part fields will be regenerated. Additional fields can be of following data types:

	
- Enumeration
	
- Text
	
- Number
	
- Date
	
- DateTime
	
- Financial amount

## 🔗 Connections (7)

- ← Dependency: [[Field value for result part]]
- ← Dependency: [[Additional result fields]]
- ← Dependency: [[Type (GUIElement 1716031)]]
- ← Dependency: [[Sub type]]
- ← Dependency: [[Subtype Subspecification (GUIElement 1716024)]]
- ← Dependency: [[Subtype Specification (GUIElement 1716023)]]
- ← Dependency: [[{MOD}07.040 Create communication record manually]]

## 📊 Appears In (3 diagrams)

- Custom: Create communication
- Custom: Update communication record
- Use Case: Communication records
