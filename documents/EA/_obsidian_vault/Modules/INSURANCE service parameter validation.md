---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules"
domain: "Modules"
element_id: 1851663
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 INSURANCE service parameter validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules

## 📝 Notes

INSURANCE

	
- AUTOMATIC_PROLONGATION
mandatory
	
- FIRST_PERIOD_DURATION
mandatory
must exists in Insurance First Period Duration
	
- FIRST_PERIOD_DURATION_OFFSET
mandatory
value in interval <0 ; 999>
	
- FIRST_PERIOD_TRIGGER
mandatory
must exists in Insurance First Period Trigger
	
- FIRST_PERIOD_TRIGGER_OFFSET
mandatory
value in interval <0 ; 999>
	
- NEXT_PERIOD_DURATION
must exists in Insurance Next Period Duration
	
- NEXT_PERIOD_DURATON_OFFSET
value in interval <0 ; 9999>
	
- INSURANCE_PROGRAM_CODE
must exists in list of Insurance programs retrieved by rule Get list of Insurance Program
	
- EARLY_TERMINATION_TERM
mandatory
must exists in Insurance Early Termination Term Type
	
- CUT_OFF_DAYS_COUNT
mandatory
value in interval <0 ; 999>
	
- CANCELLATION_OFFSET
value in interval <0 ; 9999>
	
- TERMINATION_OFFSET
value in interval <0 ; 9999>
	
- NUMBER_OF_BILLING_PERIODS
available and mandatory only when FIRST_PERIOD_DURATION = BILLING_PERIOD
value in interval <0 ; 999>


	
- LIMIT_CANCELLATION_TO_COOLING_OFF_PERIOD
mandatory


	
- INSURANCE_TYPE
must exists in Insurance type
	
- TERMINATE_ON_FULL_LOAN_REPAYMENT
mandatory

## 🔗 Connections (2)

- → Dependency: [[{ADD}Get list of Insurance Program]]
- ← Dependency: [[{MOD}Service Catalog Service - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
