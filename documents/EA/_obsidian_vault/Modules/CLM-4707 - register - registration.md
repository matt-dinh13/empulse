---
type: Requirement
stereotype: "FunctionalRequirement"
package: "HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-16401 (CLM-4707) Post activation docs review - REM - register - registration"
domain: "Modules"
element_id: 1806443
diagrams: 1
connections: 4
tags:
  - requirement
  - modules
---

# 📋 CLM-4707 - register - registration

> **Type**: Requirement · **Stereotype**: «FunctionalRequirement»
> **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-16401 (CLM-4707) Post activation docs review - REM - register - registration

## 📝 Notes

This API registers a contract by changing its registration status and update_date and updated_by fields in the ho.bsl_contract and ho.bsl_registration_status_trans tables.
updated_by should use ho.user_detail.id of calling user and if not found, the UC fails.

## 📊 Appears In (1 diagrams)

- Custom: CBL-16401 (CLM-4707) Post activation docs review - REM - register - registration
