---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces"
domain: "Analysis Model"
element_id: 993670
diagrams: 1
connections: 1
tags:
  - enumeration
  - analysis-model
---

# 📝 {MOD}WriteOffStatus

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces

## 📝 Notes

{MOD PBR-565}
LCS is either to update WriteOffStatus enum to reflect current processing results, or provide Write-off Processing Result Type to WriteOffStatus mapping
{/MOD}

## 🔗 Connections (1)

- ← Dependency: [[{ADD}WriteOffItem]]

## 📊 Appears In (1 diagrams)

- Logical: LCS interface - WriteOffStatusService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| OK | string |  |
| UNKNNOWN_CONTRACT | string |  |
| ALREADY_WROTE_OFF | string |  |
| NO_DATA_FOUND | string |  |
| WRONG_STATUS | string |  |
