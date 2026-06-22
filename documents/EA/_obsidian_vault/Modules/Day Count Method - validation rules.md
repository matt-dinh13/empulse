---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface"
domain: "Modules"
element_id: 1844980
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Day Count Method - validation rules

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Type Specific Extension/RELIP/User Interface

## 📝 Notes

// Validation of Day Count Method and its combination with Installment Schedule/Plan Method

Input:
- Installment Plan Method
- Day Count Method 
 

	
- If Installment Plan Method is in (IS_ALG_AN_PRINC, IS_ALG_EQ_PRINC) then Day Count Method is in (ACT_ACT, ACT_365F, ACT_360).


	
- If Installment Plan Method is in (IS_ALG_BASIC, IS_ALG_EXTEND1) then Day Count Method = M30_360.
	
- {ADD PCG-1562}If Installment Plan Method is in (EQUAL_ANNUITY) then Day Count Method is in (ACT_ACT, ACT_365F, ACT_360, M30_360).{/ADD}

(MSG_PCG_InvalidDayCountMethod)

## 🔗 Connections (2)

- ← Dependency: [[RELIP Service - validation rules]]
- ← Dependency: [[{MOD}ProductProfileInputDto - validation rules]]

## 📊 Appears In (2 diagrams)

- Custom: Set RELIP service 
- Custom: Validation Rules
