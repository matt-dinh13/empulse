---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5108 - SAMSUNG - HA validation Integration (CBL-27715)"
domain: "Requirements Model"
element_id: 1844336
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 Requirement - Samsung's API for validating

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/PCG/PCG-5108 - SAMSUNG - HA validation Integration (CBL-27715)

## 📝 Notes

Requirement:
We are required to integrate with our existing OEM partner SAMSUNG for Serial Number validation.

Attached documentation:
https://jira.homecredit.net/jira/browse/BRIN-340

TODO:
1) Create SAMSUNG specific validation cancellation business rule
2) Update External validation cancellation business rule to include SAMSUNG specific validation cancellation business rule
3) Add new attributes to ValidateCommodityRequest
4) Add attribute UniqueReferenceNumber to ValidateCommodityResponse
5) Add attribute UniqueReferenceNumber to Commodity (Logical Data Model)
6) Add UniqueReferenceNumber condition to Use Case POST Commodity Validation
7) For REST API, add attribute UniqueReferenceNumber to CommodityDto

## 📊 Appears In (1 diagrams)

- Custom: PCG-5108 -SAMSUNG - HA validation Integration - Hosel origination
