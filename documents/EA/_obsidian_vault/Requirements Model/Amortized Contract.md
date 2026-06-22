---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4872 (CLM-1732) Manual Write Off Reason From DWH to BSL"
domain: "Requirements Model"
element_id: 1839630
diagrams: 3
connections: 4
tags:
  - class
  - requirements-model
---

# 🔷 Amortized Contract

> **Type**: Class
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4872 (CLM-1732) Manual Write Off Reason From DWH to BSL

## 📝 Notes

The entity keeps data of contracts intended to write-off.

Writting-off is processed in batch only.
Association to Data Processed Batch is mandatory.

## 🔗 Connections (4)

- → Association: [[Data Processed Batch]]
- → Dependency «use»: [[Amortization Request Type]]
- ← Aggregation: [[Amortized Installment Part]]
- → Dependency «use»: [[Processing Amortization Status Type]]

## 📊 Appears In (3 diagrams)

- Custom: CBL-4872 (CLM-1732) Manual Write Off Reason From DWH to BSL
- Logical: Contract Write-off domain model
- Logical: Data for Write-off downloading from DWH - domain model (obsolete)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amortization Date | Date |  |
| Amortization Request Type | Amortization Request Type |  |
| Contract Code | Contract code |  |
| Exclusion Reason | string |  |
| Processing Status | Processing Amortization Status Type |  |
| {ADD}Reason | string |  |
