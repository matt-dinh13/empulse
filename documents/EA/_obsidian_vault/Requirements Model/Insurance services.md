---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5562 (CLM-1908) Update visibilty of Sum Insured and Premium values for future insurance period"
domain: "Requirements Model"
element_id: 1750272
diagrams: 2
connections: 7
tags:
  - class
  - requirements-model
---

# 🔷 Insurance services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5562 (CLM-1908) Update visibilty of Sum Insured and Premium values for future insurance period

## 📝 Notes

The grid shows insurance services adjusted for a loan contract (Contract Insurance Service) together with related insurance contract information. 

LDM:

	
- insurance services: Contract.Contract Insurance Service
	
- insurance contract: Insurance Contract found by Contract->Contract Insurance Service.Insurance Contract Code and Contract->Code as Loan Contract Code
	
- insurance period: Insurance Contract.Insurance Period


If an insurance contract does not exist for an insurance service or if an insurance period does not exist for the insurance contract then corresponding line is shown in the grid but with empty values for attributes taken from non-existing entity.

## 📊 Appears In (2 diagrams)

- Custom: CBL-5562 (CLM-1908) Update visibilty of Sum Insured and Premium values for future insurance period
- Custom: Tab-Insurance

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service Type | Text |  |
| Service Code | Text |  |
| Service Name | Text |  |
| Insurance Status | Insurance Contract Status |  |
| Insurance Contract Code | Text |  |
| Insured From | Date |  |
| Insured To | Date |  |
| Insured Commodity | Text |  |
| Sum Insured | Financial Amount |  |
| Premium | Financial Amount |  |
| Automatic Prolongation | checkbox |  |
| Actions | Icons |  |
