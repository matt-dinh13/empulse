---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/RAPINDO request mapping"
domain: "Requirements Model"
element_id: 1747811
diagrams: 1
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 RapindoResultResponse

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-19452 [SCL] (CSI-2284) ABDA Insurance Order Integration/RAPINDO request mapping

## 📝 Notes

"cert": {
    "id": 187673,
    "assetId": 200346,
    "fincoId": 10,
    "contractNo": "DMO-RAPINDO-001",
    "contractDate": "2019-09-25",
    "number": "F-DMORAPINDOC001-FD1-01",
    "effectiveAt": "2019-11-01T07:15:30.167Z",
    "expireAt": "2200-12-31T00:00:00.000Z",
    "status": "ACTIVE"
  }

## 🔗 Connections (2)

- → Dependency: [[RAPINDO_RESULT]]
- ← Dependency: [[DMS - Create document to store Rapindo result]]

## 📊 Appears In (1 diagrams)

- Logical: RAPINDO request mapping

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | int |  |
| assetId | int |  |
| fincoId | int |  |
| contractNo | string |  |
| contractDate | date |  |
| number | string |  |
| effectiveAt | dateTime |  |
| expireAt | dateTime |  |
| status | string |  |
