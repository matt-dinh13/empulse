---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Logical Data Model"
domain: "Analysis Model"
element_id: 1879961
diagrams: 1
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 Document Proof Check Type

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Document Instances/Logical Data Model

## 📝 Notes

Types of proof checks which should be done on the Document
Notice: There is missing an identifier which proof check type can be updated by user in the current implementation of the entity. The editable types are defined in the Document Proof Check Type java enumeration. All proof check types are placed in the Document Proof Check Type database table

## 🔗 Connections (2)

- ← Dependency: [[[Proof check type]]]
- ← Dependency: [[{DEL}Document Proof Check]]

## 📊 Appears In (1 diagrams)

- Logical: Document 

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ADDRESS_PROOF |  |  |
| IDENTIFICATION_PROOF |  |  |
| SMS_VERIFICATION |  |  |
| Active Flag | boolean | TRUE |
