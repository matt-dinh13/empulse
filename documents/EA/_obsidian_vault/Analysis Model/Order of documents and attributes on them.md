---
type: Requirement
stereotype: "Algorithm"
package: "HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules"
domain: "Analysis Model"
element_id: 1878897
diagrams: 7
connections: 10
tags:
  - requirement
  - analysis-model
---

# 📋 Order of documents and attributes on them

> **Type**: Requirement · **Stereotype**: «Algorithm»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Business Rules

## 📝 Notes

Order of documents
Default order for displayed documents is defined by their attribute DOCUMENT_TYPE.SORT_ORDER.  If the ordering value is identical for two or more Document_Types, then it’s ordered by DOCUMENT_TYPE.NAME.

Order of document attributes
Order of attributes is defined by the attribute DOCUMENT_TYPE_ATTRIBUTE.SORT_ORDER. If the ordering value is identical for two or more Document_Type_Attributes, then it’s ordered by DOCUMENT_TYPE_ATTRIBUTE.NAME.

## 🔗 Connections (10)

- ← Dependency: [[{MOD}01.081 Fill in application - 1SP]]
- ← Dependency: [[01.200 Add to contract package (UseCase 1759983)]]
- ← Dependency: [[{MOD}01.082 Fill in application - 1BoD]]
- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- ← Dependency: [[{MOD}01.110 Edit contract document]]
- ← Dependency: [[01.102 Add DDM document (UseCase 1880252)]]
- ← Dependency: [[{MOD}01.113 Edit client document]]
- ← Dependency: [[01.112 Edit DDM document (UseCase 1880248)]]
- ← Dependency: [[01.103 Add client document (UseCase 1880236)]]
- ← Dependency: [[{MOD}01.100 Add contract document]]

## 📊 Appears In (7 diagrams)

- Custom: Common Business Rules for Contract Management
- Use Case: Contract tracking
- Use Case: Edit client documents
- Use Case: Edit contract documents
- Use Case: Edit DDM documents
- Use Case: Fill in application - 1SP
- Use Case: Fill in application - 2SP
