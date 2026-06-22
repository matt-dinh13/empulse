---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules"
domain: "Modules"
element_id: 1877276
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 PaymentDisciplineParametersDto - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules

## 📝 Notes

PaymentDisciplineParametersDto

	
- currency
must exists in Currency


	
- dpdAmountTolerance
must be unique in Service
must fulfill Service code
	
- dpdDelayTolerance
equal or higher than 0 [INVALID_NUMBER]
	
- dpdScope
must fulfill DPD Scope Type
	
- lastDpdAmountTolerance
available only if differToleranceForLastDpd is true and must fulfill PaymentDisciplineParameters Tolerance for Last DPD - cross validation 
equal or higher than 0 [INVALID_NUMBER]
	
- lastDpdDelayTolerance
available only if differToleranceForLastDpd is true and must fulfill PaymentDisciplineParameters Tolerance for Last DPD - cross validation 
equal or higher than 0 [INVALID_NUMBER]

## 🔗 Connections (2)

- ← Dependency: [[{MOD}ServiceParametersDto - validation]]
- → Dependency: [[PaymentDisciplineParameters Tolerance for Last DPD - cross validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
