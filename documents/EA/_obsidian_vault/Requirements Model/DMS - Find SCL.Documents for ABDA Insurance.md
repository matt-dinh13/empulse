---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1841426
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 DMS - Find SCL.Documents for ABDA Insurance

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

call DMS GET documents - method for finding document defined type
Input: 

	
- list of documentIds from ContractActivatedPayload.documents


Filter only Documents of following types for next processing:

	
- BPKB_BACK, VEHICLE_INFORMATION, CHASSIS_NUMBER, ENGINE_NUMBER, BPKB_FRONT, VEHICLE_INSURANCE

## 🔗 Connections (1)

- ← Dependency: [[DMS Documents API]]

## 📊 Appears In (2 diagrams)

- Analysis: SCL After Activation Process
- Logical: ABDA request - data mapping
