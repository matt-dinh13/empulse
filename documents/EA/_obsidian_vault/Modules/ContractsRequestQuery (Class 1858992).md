---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/searchContracts"
domain: "Modules"
element_id: 1858992
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 ContractsRequestQuery

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Interface Provided/REST/Application Interface Model/Contracts Operations/{MOD}v1/searchContracts

## 🔗 Connections (1)

- ← Dependency: [[Contracts (Interface 1868512)]]

## 📊 Appears In (1 diagrams)

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
