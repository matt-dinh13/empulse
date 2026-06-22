---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Create Contract Supplement"
domain: "Modules"
element_id: 1869901
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 CreateContractSupplementRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Interface Provided/Web Services/Contract Supplement services/Create Contract Supplement

## 🔗 Connections (3)

- → Usage: [[RequestSourceId (Class 1869903)]]
- → Usage: [[SupplementTypeSpecificData (Class 1869902)]]
- ← Usage: [[ContractSupplements (Interface 1869924)]]

## 📊 Appears In (1 diagrams)

- Logical: Create Contract Supplement

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| contractCode | string |  |
| supplementId | string |  |
| typeSpecificData | SupplementTypeSpecificData |  |
| requestSource | RequestSourceId |  |
