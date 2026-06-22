---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2358 - OBS interface - Incoming payments (REL)"
domain: "Modules"
element_id: 821266
diagrams: 1
connections: 3
tags:
  - requirement
  - modules
---

# 📋 REQ#1 INSTALPAY126

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2358 - OBS interface - Incoming payments (REL)

## 📝 Notes

New XSD elements for JMS:

	
- PaidInstallmentMessageDto
	
- TransactionSourceIdDto 

...definded by CaBus team, for more details see 
https://subversion.homecredit.net/repos/java/HomerSelectSuite/hss-integration/trunk/hss-integration/hss-account/hss-account-oxm/src/main/resources/net/homecredit/hss/integration/account/xsd/account/v2/Accounting.xsd

New comm tables and their types:

## 🔗 Connections (1)

- ← Dependency: [[Processing PaidInstalmentMessageDto]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2358 - OBS interface - Incoming payments (REL)
