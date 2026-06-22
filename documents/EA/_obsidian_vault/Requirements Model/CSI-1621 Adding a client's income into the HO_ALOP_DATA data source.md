---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17031 (CSI-1608) VN BNPL - Additional data of Document generation for BNPL transaction"
domain: "Requirements Model"
element_id: 1684627
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1621 Adding a client's income into the HO_ALOP_DATA data source

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-17031 (CSI-1608) VN BNPL - Additional data of Document generation for BNPL transaction

## 📝 Notes

Goal of the requirement is adding a new item of client's income into the HO_ALOP_DATA data source (UC 13.205)

The required client's income is possible to obtain by calling
https://pif.vn00c1.vn.infra/party-web/api/pif/v1/customer/3202025?projections=RELATIONSHIP_DATA

The "income" value is hidden under customValues in customerPersonRelationship

## 📊 Appears In (1 diagrams)

- Custom: CBL-17031 (CSI-1608) VN BNPL - Additional data of Document generation for BNPL transaction
