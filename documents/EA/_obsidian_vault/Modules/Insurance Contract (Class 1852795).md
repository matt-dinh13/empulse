---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-608 Adding InsuranceProgram identifier into InsuranceContract"
domain: "Modules"
element_id: 1852795
diagrams: 6
connections: 16
tags:
  - class
  - modules
---

# 🔷 Insurance Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/CSI-608 Adding InsuranceProgram identifier into InsuranceContract

## 📝 Notes

This entity represents an insurance contract 

	
- a contract between client and insurance company for individual insurance 
	
- joining contract between HC and insurance company for group insurance

## 🔗 Connections (16)

- → Dependency: [[Insurance Subject Type]]
- → Dependency: [[{MOD}Contract (Class 1879596)]]
- ← Aggregation: [[Insurance Commodity (Class 1852796)]]
- → Dependency: [[Insurance Contract Type]]
- → Dependency: [[Insurance Program]]
- → Dependency: [[Insurance Service (Class 1827152)]]
- → Dependency: [[Service Type (Class 1880808)]]
- ← Aggregation: [[Insurance Operation Status (Class 1852793)]]
- ← Aggregation: [[Insurance Custom Data (Class 1852792)]]
- → Dependency: [[Insurance Contract Status (Class 1852791)]]
- ← Aggregation: [[Insurance Period (Class 1852788)]]
- → Dependency: [[Insurance Prolongation Result (Class 1852787)]]
- ← Aggregation: [[Insurance Contract Status Transition (Class 1852782)]]
- ← Dependency: [[Contract Insurance Service (Class 1868564)]]
- ← Association: [[InsuranceContractCancelationSE]]
- ← Dependency: [[Offer Insurance Service]]

## 📊 Appears In (6 diagrams)

- Custom: CSI-608 Adding InsuranceProgram identifier into InsuranceContract
- Logical: Insurance Commodity domain
- Logical: Insurance Contract
- Logical: Insurance domain changes
- Logical: Offer Service
- Logical: Others

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
| Insurance Program Id | Number |  |
| {MOD}Service Code | Text |  |
| {MOD}Service Version | Number |  |
| Contract Index | Number |  |
| End Date | Date |  |
| Automatic Prolongation | boolean |  |
| Estimated Sum Insured | Financial Amount |  |
| Estimated Insurance Premium | Financial Amount |  |
| Billing Period Limit | int |  |
| Automatic Prolongation Result | Insurance Prolongation Result |  |
| {ADD}Service External Id | string |  |
