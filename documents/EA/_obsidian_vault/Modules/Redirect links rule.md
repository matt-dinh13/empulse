---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules"
domain: "Modules"
element_id: 1864809
diagrams: 2
connections: 0
tags:
  - requirement
  - modules
---

# 📋 Redirect links rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Analytical Model/COMMON for Ticketing/Business Rules

## 📝 Notes

Every redirect link values has following form:

<RELEVANT_BSL_ENVIRONMENT>/<ENTITY_INFORMATION>

Thus for contract registration the link will be following:
<RELEVANT_BSL_ENVIRONMENT>/contract-detail?contract_code=<CODE_OF_RELEVANT_CONTRACT>&tab_contractDetailTabbedPanel=contractDetailRegistrationTabPanel

Example:
https://bsl.id66a1.cz.infra/bsl/contract-detail?contract_code=3700086829&tab_contractDetailTabbedPanel=contractDetailRegistrationTabPanel
For contract package the link will be following:
<RELEVANT_BSL_ENVIRONMENT>/contract-package-detail?code=<CODE_OF_RELEVANT_CONTRACT_PACKAGE>

Example:
https://bsl.in00a1.cz.infra/bsl/contract-package-detail?code=1234568
For communication record the link will be following:
<RELEVANT_BSL_ENVIRONMENT>/crm-communication-detail?id=<ID_OF_RELEVANT_COMMUNICATION_RECORD>

	
- {ADD CLM-5007}If application parameter app.feature-flags.communicationThroughClcModule = 1:

- then external communication id and system will be used in the redirect URL, e.g.: https://bsl.in00a1.cz.infra/bsl/crm-communication-detail?id=CR16110&system=<SYSTEM_OF_COMMUNICATION_RECORD_ORIGIN>
- else:{/ADD}
Example:
https://bsl.in00a1.cz.infra/bsl/crm-communication-detail?id=4567892

For supplement the link will be following:

<RELEVANT_BSL_ENVIRONMENT>/crm-supplement-detail?code=<CODE_OF_RELEVANT_SUPPLEMENT>
Example:
https://bsl.in00a1.cz.infra/bsl/supplement-detail?code=1234568

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Ticketing - Ticket management
