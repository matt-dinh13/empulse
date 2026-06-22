---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention"
domain: "Requirements Model"
element_id: 1878553
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 {MOD}Get subvention amount

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention

## 📝 Notes

According to provided contract ID, function gets all Item Amount from FP Subvention Item (DB entity FinParametersItem2Subvention) of Financial Parameters entity where:

	
- Subvention.Participant = 'Partner' 
	
- FP Subvention Item.ContractServiceId = null.

If there is no FP Subvention Item in the Financial Parameters,
	function returns 0 (zero)
{ADD CBL-6340 PAYM-2334}
elseif system received ContractRegistrationOutPaySE with attribute Contract_2_Commodity.Validation_Status = 'SKIPPED'
	function returns sum of Item Amount, where subvention.purpose = ALTERNATIVE
else 
                function returns sum of Item Amount, where subvention.purpose = STANDARD
{/ADD}

## 🔗 Connections (1)

- ← Dependency: [[{MOD}05.090 Generate outgoing payment for contract]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
- Use Case: Generate and Cancel outgoing payments
