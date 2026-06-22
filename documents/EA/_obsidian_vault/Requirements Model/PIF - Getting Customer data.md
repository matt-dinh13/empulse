---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1841420
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 PIF - Getting Customer data

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

Getting customer full name, contract address and permanent address
Call ../party-web/api/pif/customer/{ContractActivatedPayload.customerId} with projections = PARTY_ADDRESSES

What is needed to get:

	
- person -> firstName + middleName + surname (full name of the client)
	
- postalAddresses -> PERMANENT and CONTACT

## 🔗 Connections (1)

- ← Dependency: [[PIF Customer API]]

## 📊 Appears In (1 diagrams)

- Analysis: SCL After Activation Process
