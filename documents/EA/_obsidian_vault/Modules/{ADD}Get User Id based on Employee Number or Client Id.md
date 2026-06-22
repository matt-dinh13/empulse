---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Get registration documents/Business Rules"
domain: "Modules"
element_id: 1806875
diagrams: 4
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {ADD}Get User Id based on Employee Number or Client Id

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Get registration documents/Business Rules

## 📝 Notes

- {ADD CLM - 4707/}

Workaround rule for getting User id.

Input: Employee Number or Client Id
Output: User Id
 

	
- If Employee Number is not Null then system selects User detail from table User detail based on Employee Number else system selects based on User id.
	
- System returns User detail.Id as User Id.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}Check all registration documents]]
- ← Dependency: [[{MOD}Uncheck all registration documents]]
- ← Dependency: [[{MOD}Check registration document]]
- ← Dependency: [[{MOD}Register contract]]

## 📊 Appears In (4 diagrams)

- Custom: Business Rules
- Custom: CLM-5305 - REST API checkDocument
- Use Case: Register contract
- Use Case: Uncheck/Check
