---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/In process/CLM/CBL-30031 (CLM-7285) Extend COMA ContractSearch API by business event query param"
domain: "Requirements Model"
element_id: 1873827
diagrams: 2
connections: 1
tags:
  - class
  - requirements-model
---

# 🔷 ContractsRequestQuery

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/In process/CLM/CBL-30031 (CLM-7285) Extend COMA ContractSearch API by business event query param

## 🔗 Connections (1)

- ← Dependency: [[Contract (Interface 1839994)]]

## 📊 Appears In (2 diagrams)

- Custom: CBL-30031 (CLM-7285) Extend COMA ContractSearch API by business event query param
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| projection | array[string] | DEFAULT |
| contractCode | array[string] |  |
| contractStatus | array[string] |  |
| customerId | array[int] |  |
| applicantId | array |  |
| drafts | boolean |  |
| sortBy | string |  |
| order | string | asc |
| pageNumber | int | 0 |
| pageSize | int | 20 |
| {ADD}businessEventType | string |  |
| {ADD}businessEventPerformedBy | string |  |
