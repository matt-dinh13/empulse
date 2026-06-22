---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP"
domain: "Requirements Model"
element_id: 1615823
diagrams: 1
connections: 5
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #2 - Registration of ALOP documents

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP

## 📝 Notes

Following functions will be added/changed in connection with ALOP contract supplement registration:

	
- The current API for ALOP document acceptation will be used for receiving an info (a flag) about manual/automatic registration. The flag will be stored in ContractSupplement object (DWH impact?)
	
- A new function for automatic registration of the contract supplements is created. The function is launched based on "contract supplement signed" event

## 🔗 Connections (1)

- → Generalization: [[General list of requirements involved in this solution design]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-13063 (CSI-631) Set up Loan Purpose & Registration process for ALOP
