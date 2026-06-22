---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF"
domain: "Analysis Model"
element_id: 1822781
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Validation by Document Type Validation Group 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF

## 📝 Notes

Client Document is checked as follows:
For each validation defined in Document Type Validation (DTV) where DTV.RelatedTo = CLIENT and DTV.DocumentType = Document.DocumentType process validation defined by DTV.ValidationGroup.

## 🔗 Connections (2)

- ← Dependency: [[01.087 Print consent (UseCase 1821366)]]
- → Dependency: [[Document Type Validation (Class 1538245)]]

## 📊 Appears In (3 diagrams)

- Custom: Common panel for consent - product AF
- Custom: Product business rules
- Use Case: Fill in application
