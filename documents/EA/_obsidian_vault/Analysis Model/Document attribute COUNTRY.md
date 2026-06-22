---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1822831
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Document attribute COUNTRY

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

For each document of any Document_Type if there is a field to fill the country, this field is prefilled with value “current_country” (Country.IsDefault = True). If document type flag DOMESTIC of this document type is assigned, this field is non-editable. Otherwise is editable.

## 🔗 Connections (1)

- ← Dependency: [[Attribute (Object 1773455)]]

## 📊 Appears In (2 diagrams)

- Custom: Common panel for document - product AF
- Custom: Product business rules
