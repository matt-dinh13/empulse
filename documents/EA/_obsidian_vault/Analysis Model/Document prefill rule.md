---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel"
domain: "Analysis Model"
element_id: 1822817
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Document prefill rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Document panel

## 📝 Notes

Inputs:

	
- CIF data in system cash


	
- Document attributes aren´t prefill when Document_Type_Attribute.Code = 'DOC_ID'.


1. SA fills field Document_Type_Attribute.Document_number for Document_Type_Attribute.Code = 'DOC_ID'.
2. System compares filled value in Document_Type_Attribute.Document_number with CifClientTO.Document_number from inputs.
3. If value of document numbers are equal then system compares validity of document, otherwise algorithm ends.
4. If Document_Type_Attribute.End_Date >= current day then system prefills ,otherwise algorithm ends.

## 🔗 Connections (2)

- ← Dependency: [[Attribute (Object 1773455)]]
- ← Dependency: [[Prefill application form]]

## 📊 Appears In (2 diagrams)

- Custom: Common panel for document - product AF
- Custom: Product business rules
