---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9554 (CLM-3032) CREL Payhol - show new tariffs in transaction history"
domain: "Requirements Model"
element_id: 1688643
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Display Transaction History Description based on additional Transactions types

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9554 (CLM-3032) CREL Payhol - show new tariffs in transaction history

## 📝 Notes

CABUS webservice AccountUIWS.GetAccountItem extends enumeration for BasicAccountItem.tariffItemTypeCode:

	
- INTEREST_IP_PH - regular interest
	
- PD_INTEREST_IP_PH - interest on arrears


Goal of this task is to:

	
- Reflect additional Tariff items in Transaction types enumeration in BSL.
	
- Add localization for additional Transaction types.
	
- Display localized description of additional Transactions types in Transaction types in the grid Transaction History, the column Description.


Note: Localizations are in an Excel file in SD folder.

## 📊 Appears In (1 diagrams)

- Custom: CBL-9554 (CLM-3032) CREL Payhol - show new tariffs in transaction history
