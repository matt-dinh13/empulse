---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Update application/Business rules"
domain: "Analysis Model"
element_id: 1817760
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Find identical document

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Update application/Business rules

## 📝 Notes

If UUID is not null, appropriate record is found.

Otherwise attributes are compared:
 

	
- document type


If exists a record where value of this attribute equals value from input, the record is considered as identical.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Find identical records]]

## 📊 Appears In (1 diagrams)

- Custom: Update application - Business rules
