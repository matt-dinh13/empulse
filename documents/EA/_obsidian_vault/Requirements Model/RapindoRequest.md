---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/RAPINDO request mapping"
domain: "Requirements Model"
element_id: 1747812
diagrams: 1
connections: 6
tags:
  - class
  - requirements-model
---

# 🔷 RapindoRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/RAPINDO request mapping

## 📝 Notes

A structure of the request (input data) for calling RAPINDO company API

## 🔗 Connections (6)

- → Dependency: [[CHASSIS_NUMBER]]
- → Dependency: [[VEHICLE_INFORMATION]]
- → Dependency: [[BPKB_FRONT]]
- → Dependency: [[ENGINE_NUMBER]]
- → Dependency: [[BPKB_BACK]]
- → Dependency: [[Rapindo certificate claim API]]

## 📊 Appears In (1 diagrams)

- Logical: RAPINDO request mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| chassisNo | string |  |
| engineNo | string |  |
| licensePlate | string |  |
| type | string |  |
| vehicleType | string |  |
| manufactureYear | string |  |
| brand | string |  |
| bpkb | string |  |
| fuel | string |  |
| contractNo | string |  |
| contractDate | string |  |
