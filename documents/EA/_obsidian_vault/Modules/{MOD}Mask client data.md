---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Business Rules"
domain: "Modules"
element_id: 1799880
diagrams: 6
connections: 4
tags:
  - requirement
  - modules
---

# 📋 {MOD}Mask client data

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/Business Rules

## 📝 Notes

If returnedCustomer has protection flag partyRole.anonymizeYn=TRUE, all attributes in the grid for that customer (except CUID and Client' full name) will be masked by '*' symbol

{ADD CLM-4266)Hiding/masking of attributes Date of birth, Gender and Parent name is controlled by access rights linked to the use case 06.040 Search Clients.{/ADD}

{ADD CLM-5465}If system property sendBusinessUserJwtToken = true, current user's JWT token is used by PIF to take care of masking sensitive data with asterisks(*), e.g. first name and surname, in case current user's roles don't include those for unmasking (*_UNMASKED){/ADD}

## 🔗 Connections (4)

- ← Dependency: [[List of clients - Default (Object 1799959)]]
- ← Dependency: [[List of clients - KZ (Object 1799961)]]
- ← Dependency: [[List of clients - VN (Object 1799960)]]
- ← Dependency: [[{MOD}06.040 Search Clients (UseCase 1843996)]]

## 📊 Appears In (6 diagrams)

- Custom: Business Rules
- Custom: CLM-4266 - Personal data masking
- Custom: List of clients - Default
- Custom: List of clients - KZ
- Custom: List of clients - VN
- Use Case: Client Search
