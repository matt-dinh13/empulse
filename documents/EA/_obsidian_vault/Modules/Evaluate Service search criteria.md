---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Business Rules"
domain: "Modules"
element_id: 1705401
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Evaluate Service search criteria

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/Business Rules

## 📝 Notes

Service code:

	
- User must enter whole match code. System compares lower cased strings. (Service.Code)

Name:

	
- System compares lower cased strings (substring). (Service.Name)

Valid on:

	
- If this date is specified then search finds sevices where Service.ValidFrom <= entered.ValidOn and (Service.ValidTo >= entered.ValidOn or Service.ValidTo is empty)

Version activated from:

	
- If this date is specified then search finds services where Service.VersionActivationDate >= entered.VersionActivatedFrom

Version activated to:

	
- If this date is specified then search finds services where Service.VersionActivationDate <= entered.VersionActivatedTo

Service Category:

	
- If this value is specified then search finds services where Service.ServiceType.Category = entered.ServiceCategory

Service Type, Version Status:

	
- If this value is specified then search finds services where Service.value = entered.value


For search by substring is used the rule Search by substring in versioned entities in Product Catalog.

## 🔗 Connections (2)

- → Dependency: [[Search by substring in versioned entities in Product Catalog]]
- ← Dependency: [[{DEL}08.170 Search for Services]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: Search for Service
- Use Case: Manage Services
