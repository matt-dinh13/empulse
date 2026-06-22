---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ABDA request - data mapping"
domain: "Requirements Model"
element_id: 1841428
diagrams: 2
connections: 8
tags:
  - class
  - requirements-model
---

# 🔷 AbdaOrderRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/ABDA request - data mapping

## 📝 Notes

A structure of the request for calling POST order method of the ABDA insurance company API

## 🔗 Connections (8)

- → Dependency: [[CHASSIS_NUMBER]]
- ← Usage: [[abda-service]]
- → Dependency: [[ENGINE_NUMBER]]
- → Dependency: [[BPKB_BACK]]
- → Dependency: [[BSL - Getting Financial Parameters of Contract]]
- → Dependency: [[Getting reference_number]]
- → Dependency: [[VEHICLE_INFORMATION]]
- → Dependency: [[VEHICLE_INSURANCE]]

## 📊 Appears In (2 diagrams)

- Logical: ABDA request - data mapping
- Logical: REST

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| product | string | TLO |
| name | string |  |
| contactAddress | string |  |
| permanentAddress | string |  |
| model | string |  |
| brand | string |  |
| type | string |  |
| color | string |  |
| plateNumber | string |  |
| chassisNumber | string |  |
| engineNumber | string |  |
| manufactureYear | int |  |
| insuranceStartDate | date |  |
| insuranceEndDate | date |  |
| referenceNumber | string |  |
| frontPhotoVehicleUuid | string |  |
| chassisPhotoUuid | string |  |
