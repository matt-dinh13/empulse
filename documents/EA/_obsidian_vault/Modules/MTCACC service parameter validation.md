---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules"
domain: "Modules"
element_id: 1851664
diagrams: 1
connections: 5
tags:
  - requirement
  - modules
---

# 📋 MTCACC service parameter validation

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog/Validation Rules

## 📝 Notes

MTCACC

	
- ACCOUNT_TYPE
must exists in list of account types from external module (Account management (AM)) by rest service call GET request: /openapi/v2/technicalService/enums/accountTypes
mandatory


	
- INSTALLMENT_PRESCRIPTION_MIN_LIMIT
equal or higher than 0 [INVALID_NUMBER]
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)
for ACCOUNT_TYPE in CURRENT_ACCOUNT fill automatically as 0


	
- MAX_CREDIT_AMOUNT
equal or higher than 0 [INVALID_NUMBER]
must be equal or higher than MIN_CREDIT_AMOUNT
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)


	
- MIN_CREDIT_AMOUNT
equal or higher than 0 [INVALID_NUMBER]
must be equal or lower than MAX_CREDIT_AMOUNT
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)


	
- MIN_INSTALLMENT_BASE
must exist in Base Type
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)
for ACCOUNT_TYPE in CURRENT_ACCOUNT fill automatically as OP


	
- MIN_INSTALLMENT_FIXED_AMMOUNT
equal or higher than 0 [INVALID_NUMBER]
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)
for ACCOUNT_TYPE in CURRENT_ACCOUNT fill automatically as 0


	
- MIN_INSTALLMENT_RATE
less than 10 and only 6 decimal places are allowed [INVALID_PERCENTAGE]
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)
for ACCOUNT_TYPE in CURRENT_ACCOUNT fill automatically as 0


	
- MIN_INSTALLMENT_ROUNDING
must exist in RoundingTypeDto
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)
for ACCOUNT_TYPE in CURRENT_ACCOUNT fill automatically as UP


	
- MIN_INSTALLMENT_ROUNDING_SCALE
value between 0 and 1,000,000,000 [INVALID_NUMBER]
only for ACCOUNT_TYPE not in (CURRENT_ACCOUNT)
for ACCOUNT_TYPE in CURRENT_ACCOUNT fill automatically as 0
	
- BILLING_DAY_CALCULATION_METHOD
must exists in Billing day calculation method [INVALID_VALUE]
mandatory[REQUIRED]
	
- DUE_DAY_OFFSET
available values 0-28, 31
mandatory [REQUIRED]
	
- FIXED_DUE_DAY
Available and mandatory only when BILLING_CALCULATION_METHOD = BY_DUE_DAY
available values 1-28 [INVALID_NUMBER]
	
- ACCOUNT_LIFESPAN 
Mandatory only for ACCOUNT_TYPE in (VIRTUAL_LIMIT)
optional for ACCOUNT_TYPE not in (VIRTUAL_LIMIT)
available values 1-999
	
- ACCOUNTING_METHOD
must exists in Accounting Method.Code [INVALID_VALUE]
mandatory [REQUIRED]
	
- CURRENCY
must exists in Currency
mandatory
For project: FLIP
	
- Tariff, currency
CURRENCY needs to be the same as Tariff.Currency assigned
For project: FLIP

## 🔗 Connections (5)

- → Dependency: [[RoundingTypeDto]]
- → Dependency: [[Billing day calculation method]]
- → Dependency: [[Accounting Method (Class 1879096)]]
- → Dependency: [[CURRENT_ACCOUNT]]
- ← Dependency: [[{MOD}Service Catalog Service - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
