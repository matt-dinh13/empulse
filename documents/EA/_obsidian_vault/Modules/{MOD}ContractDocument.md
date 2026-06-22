---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-19696 (CLM-2645) Findings 2022 - COMA GET document API extension"
domain: "Modules"
element_id: 1859204
diagrams: 5
connections: 4
tags:
  - class
  - modules
---

# 🔷 {MOD}ContractDocument

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Contract Management (COMA)/Requirements/CBL-19696 (CLM-2645) Findings 2022 - COMA GET document API extension

## 📝 Notes

{ADD CLM-4795/}
LDM: System gets a list of UUIDs based on Get documents for contract rule.

## 🔗 Connections (4)

- ← Dependency: [[Contract (Interface 1839994)]]
- → Dependency: [[DOCUMENT_DEFAULT]]
- ← Usage: [[Contract (Class 1859197)]]
- ← Usage: [[Contract (Class 1880089)]]

## 📊 Appears In (5 diagrams)

- Custom: CBL-19696 (CLM-2645) Findings 2022 - COMA GET document API extension
- Logical: ContractChangedEvent
- Logical: getContract
- Logical: getContractDocuments
- Logical: searchContracts

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| id | string |  |
| relation | string |  |
