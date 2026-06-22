---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/VN"
domain: "Analysis Model"
element_id: 1623721
diagrams: 10
connections: 25
tags:
  - requirement
  - analysis-model
---

# 📋 Autocompletion

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Address/Validation rules/VN

## 📝 Notes

This rule is applicable only for text fields.  When character is inputted, system whisper potential values (system whisper potential values for empty fields by pressing "down arrow key" on keyboard).
There is a 300ms delay between inputting a character and starting whispering. If there is more than 50 potential values, system informs the user about it on the 51st whispered row. 
System can check entered string as a substring in potential values, e.g.:

	
- user enters "RST"
	
- system shows potential values "RSTUVW", "OPQRSTUV" and "OPQRST"

Note: Add parameter to switch searching method (country specific). If parameter is set to:

	
- true  - system looks for substring anywhere in potential value
	
- false - system checks only beginning of potential value

The whispered values are from a code list defined for the field. For a particular field (e.g. for sub-district), if the value of its master field (in this case master field for Sub-district is field Regency/City) will be from a code list, only related values from the hierarchy can be whispered. In other words, if Regency/City = "ABC" only Sub-districts "EFG" and "HIJ" will be whispered because "EFG" and "HIJ" relates to "ABC". If a value of a master field will be not from a code list, values for sub-ordinates fields cannot be whispered.
Note that a non-code-list value can be inserted into fields allowing autocompletion.

## 🔗 Connections (25)

- ← Dependency: [[Ward]]
- ← Dependency: [[District (Action 865869)]]
- ← Dependency: [[Region]]
- ← Dependency: [[Town]]
- ← Dependency: [[ZIP Code]]
- ← Dependency: [[Only codelist values can be selected (Action 1036831)]]
- ← Dependency: [[University course]]
- ← Dependency: [[ZIP code (Action 1246356)]]
- ← Dependency: [[District (Action 1246355)]]
- ← Dependency: [[Subdistrict (Action 1246357)]]
- ← Dependency: [[Town (Action 1246348)]]
- ← Dependency: [[Place of birth (Action 1463976)]]
- ← Dependency: [[Sub-disctrict]]
- ← Dependency: [[Town (Action 1501290)]]
- ← Dependency: [[Zip code (Action 1501287)]]
- ← Dependency: [[Target bank code]]
- ← Dependency: [[District (Action 1572573)]]
- ← Dependency: [[Region (Action 1572572)]]
- ← Dependency: [[ZIP code (Action 1572569)]]
- ← Dependency: [[Town (Action 1572567)]]
- ← Dependency: [[Street name (Action 1572566)]]
- ← Dependency: [[Model (GUIElement 1686238)]]
- ← Dependency: [[Manufacturer (GUIElement 1721995)]]
- ← Dependency: [[Model (GUIElement 1721992)]]
- ← Dependency: [[Name (GUIElement 1758566)]]

## 📊 Appears In (10 diagrams)

- Custom: Address validation rules - VN
- Custom: Adress validation rules - ID
- Custom: Adress validation rules - PH
- Custom: Attributes value validation rules - KZ
- Custom: Create/Update bank account for consolidation - KZ
- Custom: General business rules
- Custom: IN - Business rules
- Custom: Personal data
- Custom: Validation rules - KZ
- Custom: Validation rules KZ
