---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Add/Edit document (modal window)"
domain: "Analysis Model"
element_id: 1547877
diagrams: 1
connections: 0
tags:
  - class
  - analysis-model
---

# 🔷 Document attributes

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/COMMON for Application detail/User Interface Model/Add/Edit document (modal window)

## 📝 Notes

Editable list of document attributes, that can be collected in relation with respective document.

Applicable document attributes to be displayed (each such attribute is shown as a separate form field) are determined based on the selected Document type (i.e. Document_Type[.Name=value of Document type]->Document_Type_Attribute.*).

Individual records within the list are ordered according to the rules described in applicable use case:

	
- 01.103 Add client document
	
- 01.113 Edit client document
	
- 01.100 Add contract document
	
- 01.110 Edit contract document
	
- 01.102 Add DDM document
	
- 01.112 Edit DDM document


Localization code: none

## 📊 Appears In (1 diagrams)

- Custom: Add/Edit document

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Document attribute name | Document Type Attribute |  |
| Document attribute value | text |  |
