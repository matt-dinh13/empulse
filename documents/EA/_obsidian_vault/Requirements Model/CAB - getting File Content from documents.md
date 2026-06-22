---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process"
domain: "Requirements Model"
element_id: 1842207
diagrams: 3
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CAB - getting File Content from documents

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/SCL After Activation Process

## 📝 Notes

Get file content from CAB for specified fileUuids:

	
- frontPhotoVehicleUuid 
	
- chassisPhotoUuid 


calls CAB GET .../documents/{fileUuid}/data

## 🔗 Connections (1)

- ← Dependency: [[Request for Abda Order service]]

## 📊 Appears In (3 diagrams)

- Analysis: SCL After Activation Process
- Logical: REST
- Use Case: Analytical Model
