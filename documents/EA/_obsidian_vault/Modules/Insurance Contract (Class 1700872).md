---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM"
domain: "Modules"
element_id: 1700872
diagrams: 1
connections: 13
tags:
  - class
  - modules
---

# 🔷 Insurance Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM

## 📝 Notes

This entity represents an insurance contract 

	
- a contract between client and insurance company for individual insurance 
	
- joining contract between HC and insurance company for group insurance

## 🔗 Connections (9)

- → Dependency: [[Insurance Prolongation Result]]
- ← Aggregation: [[Insurance Operation Status]]
- → Dependency: [[Insurance Contract Status]]
- → Dependency: [[Insurance Subject Type (Class 1700882)]]
- ← Aggregation: [[Insurance Period (Class 1700875)]]
- ← Aggregation: [[Insurance Contract Status Transition]]
- → Dependency: [[Insurance Contract Type (Class 1700879)]]
- ← Aggregation: [[Insurance Commodity]]
- ← Aggregation: [[Insurance Custom Data (Class 1700863)]]

## 📊 Appears In (1 diagrams)

- Logical: Changes in LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Contract Code | Text |  |
| Contract Type | Insurance Contract Type |  |
| Status | Insurance Contract Status |  |
| Subject Type | Insurance Subject Type |  |
| Insurance Type | Service Type |  |
| CUID | Number |  |
| Loan Contract Code | Text |  |
| Insurance Program External Id | Text |  |
| Service Code | Text |  |
| Service Version | Number |  |
| Contract Index | Number |  |
| End Date | Date |  |
| Automatic Prolongation | boolean |  |
| Estimated Sum Insured | Financial Amount |  |
| Estimated Insurance Premium | Financial Amount |  |
| Billing Period Limit | int |  |
| Automatic Prolongation Result | Insurance Prolongation Result |  |
| {ADD}UUID | string |  |
| {ADD}Service External Id | string |  |
