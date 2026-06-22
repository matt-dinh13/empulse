---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention"
domain: "Requirements Model"
element_id: 1878549
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {ADD}Get service related subvention amount

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention

## 📝 Notes

{ADD PAYM-922 /}

According to provided contract ID, function gets all Item Amount from FP Subvention Item (DB entity FinancialParametersItem2Subvention) of Financial Parameters entity where Subvention.Participant = 'Partner' and FP Subvention Item.ContractServiceId is not null.
I there is no FP Subvention Item in the Financial Parameters,
	function returns 0 (zero)
else
	function returns sum of Item Amount

Note: Generally the sum amount of service related subventions will be a negative amount because it is a subvention from HC to a partner.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Use Case: Generate and Cancel outgoing payments
