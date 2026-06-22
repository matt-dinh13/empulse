---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4472 (CLM-1687) PH Contract Debt Sale"
domain: "Requirements Model"
element_id: 1688713
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Add global parameters for controlling import sold contracts and their processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4472 (CLM-1687) PH Contract Debt Sale

## 📝 Notes

Importing sold contracts and their processing needs to be controlled by individual configuration, therefore goal of this task is:

Create global database parameter SaleMaxFileSize.
Initial setting for all countries: SaleMaxFileSize.Value = MaxFileSize.Value
Use this parameter instead of global database parameter MaxFileSize for controlling import file size.

Create global database parameter SaleContractStatuses.
Initial setting for all countries: If system property AllowWrittenoff4ContractSale = True then SaleMaxFileSize.Value = 'L,H' else SaleMaxFileSize.Value = 'L'.
Use this parameter instead of hardcoded list of allowed contract statuses during processing contracts for sale.

## 📊 Appears In (1 diagrams)

- Custom: CBL-4472 (CLM-1687) PH Contract Debt Sale
