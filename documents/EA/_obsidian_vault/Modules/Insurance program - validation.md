---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules"
domain: "Modules"
element_id: 1877264
diagrams: 1
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Insurance program - validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Services/Validation Rules

## 📝 Notes

If Service.ServiceType.Category = INSURANCE then get data about insurance program via GET request: /rest/v1.0/insurance-programs/(externalId) with following parameters:
- externalId = Service.InsuranceService.InsuranceProgramCode
 

	
- insurance program code
active version must exist
(MSG_INSPROGRAM_NOT_ACTIVE)
	
- service scope
if ServiceType.ServiceScope = CONTRCAT then InsuranceProgram.SubjectType must be CUSTOMER
if ServiceType.ServiceScope = COMMODITY then InsuranceProgram.SubjectType must be GOODS
(MSG_INCOMPATIBLEINSPROGRAM)
	
- service validity
Interval <Service.ValidFrom, Service.ValidTo> is inside the interval <InsuranceProgram.ValidFrom, InsuranceProgram.ValidTo>  
warning (MSG_VALID_TIME_IP_NOT_IN_INTERVAL).

## 🔗 Connections (1)

- ← Dependency: [[{MOD}ServiceParametersDto - validation]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
