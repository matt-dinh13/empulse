---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1275559
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 RELIP Service Variant - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

// Validation at the moment of saving parameters of RELIP service variant

Entity RELIP Service Variant 

Transaction Type:
- mandatory, reference to Transaction Type
(MSG_RELIP_InvalidTransactionType)

Installment Plan Type:
- mandatory, reference to RELIP Installment Plan Type 
(MSG_RELIP_InvalidInstallmentPlanType)

Transaction Amount Min:
- optional, Financial Amount >= 0
(MSG_RELIP_TransactionAmountLimits)

Transaction Amount Max:
- optional, Financial Amount >= 0
(MSG_RELIP_TransactionAmountLimits)

Transaction Date From:
- optional, date
(MSG_RELIP_TransactionDateLimits)

Transaction Date To:
- optional, date
(MSG_RELIP_TransactionDateLimits)

Terms
For each Term assigned to variant check setting according to rule RELIP Service Variant Term - validation rules.

Cross-validation:

	
- Transaction Amount Min <= Transaction Amount Max (if the both values are defined)
(MSG_RELIP_TransactionAmountLimits)
	
- Transaction Date Min <= Transaction Date Max (if the both values are defined)
(MSG_RELIP_TransactionDateLimits)


	
- Combination of
- Transaction Type
- Installment Plan Type
must be defined in RELIP Service Variant Allowed Combination.
(MSG_RELIP_VariantAllowedCombination)
	
- At least one Term must be defined for variant.
(MSG_RELIP_VariantNoTerm)

## 🔗 Connections (4)

- → Dependency: [[RELIP Service Variant - allowed combination rules]]
- → Dependency: [[RELIP Service Variant - unique key]]
- → Dependency: [[RELIP Service Variant Term - validation rules]]
- ← Dependency: [[Set RELIP service variant]]

## 📊 Appears In (1 diagrams)

- Custom: Set RELIP Service Variant
