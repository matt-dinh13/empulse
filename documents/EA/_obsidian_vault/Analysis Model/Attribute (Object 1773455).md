---
type: Object
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1773455
diagrams: 1
connections: 5
tags:
  - object
  - analysis-model
---

# 🔸 Attribute

> **Type**: Object
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

GUI fields for each document depend on parameterization. See :

	
- Initial state of document attribute
	
- Update state of document attribute

Note that validations of documents' fields also depend on parameterization of documents (see document Validation rules).

## 🔗 Connections (5)

- → Dependency: [[{MOD}Update state of document attribute]]
- → Dependency: [[Document prefill rule]]
- → Dependency: [[{DEL}01.060 Invoke external identity check]]
- → Dependency: [[Document attribute COUNTRY]]
- → Dependency: [[{MOD}Initial state of document attribute]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for document - product AF

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Name | Text |  |
| Value | text |  |
