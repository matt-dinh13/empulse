---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product"
domain: "Analysis Model"
element_id: 1822830
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 GUI rules

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/Business Rules/Product

## 📝 Notes

Following rules are used for all fields in AF:

	
- current selected field is highlighted
	
- all mandatory fields are graphical highlighted. If the user selects mandatory field and leaves the field without putting any text, an informative note appears.
	
- read only fields have gray background
	
- automatic length restriction - if a field has length restriction the user is not able to put more characters than allowed number of characters.
	
- cross validation highlighting - if the user changes value of a field that is related with other fields (cross validation) all fields that has been influenced are highlighted (yellow color).
	
- the user is able to collapse/expand all sections. If there is a form-level validation error signalized for any of all fields from a particular logical section, the section is expanded and cannot be collapsed.

## 🔗 Connections (1)

- ← Dependency: [[Product AF]]

## 📊 Appears In (1 diagrams)

- Custom: Product business rules
