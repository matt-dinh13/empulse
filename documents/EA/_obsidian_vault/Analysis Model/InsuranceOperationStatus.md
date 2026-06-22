---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/Schema definitions"
domain: "Analysis Model"
element_id: 1856568
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 InsuranceOperationStatus

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features/Changing Insurance operation status/Interface Provided/Insurance Contract Services/Schema definitions

## 📝 Notes

A log of insurance operation status changes

## 🔗 Connections (2)

- ← Dependency: [[InsuranceContract (Class 1856488)]]
- → Dependency: [[InsuranceOperationStatusType]]

## 📊 Appears In (1 diagrams)

- Logical: InsuranceContract structures

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | InsuranceOperationStatusType |  |
| createdBy | string |  |
| creationDate | DateTime |  |
| reasonCode | string |  |
| reasonNotice | string |  |
