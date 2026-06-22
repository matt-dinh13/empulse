---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1878820
diagrams: 2
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Get tariff items related to the account

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

This rule describes how to get tariff item data from the AP based on provided account number
Input:

	
- accountNumber


Output:

	
- TariffItems[] list



	
- System calls GET .../cabus-am/rest/ap/tariff-item-types/applicableTariffItems?accountNumber={accountNumber}&queryDate={current_date}
	
- System returns the tariffItems result. If AP component is unavailable (timeout), system returns error message of MSG_AP_NOT_AVAILABLE; e.g. AP System is not available.

## 🔗 Connections (2)

- ← Dependency: [[LoanParameters]]
- ← Dependency: [[HO_ALOP_DATA filling rules]]

## 📊 Appears In (2 diagrams)

- Custom: HO_ALOP_DATA - getting external data
- Logical: HO_ALOP_DATA
