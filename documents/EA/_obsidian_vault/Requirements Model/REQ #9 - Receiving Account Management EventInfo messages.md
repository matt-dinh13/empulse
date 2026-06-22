---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)"
domain: "Requirements Model"
element_id: 1612013
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #9 - Receiving Account Management EventInfo messages

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-244 (CLM-971) Cash on card with separate limit (ALOP)

## 📝 Notes

Two AM events must be received:

	
- AUTHORIZATION eventType, která má atribut <xs:element name="cancelled" type="xs:boolean"/> nastaven na true (transaction cancellation)
	
- ADVANCED_ALOP (disbursement confirmation for our purpose)


A filtering of these events can be solved via multiple binding on the Rabbit queue - see example: https://harabbit01-hosel.cz.infra:15672/#/queues/ph00a1/am.test.eventnotification.some

The event will be identified by loanCode and AccountNumber (the same as Contract.Contract Code)

Both events will be used for ALOP request status change
Codelist EventType for check: AM.ACM_EVENTTYPE

Reference to GIT for consumed EventInfo message structure: https://git.homecredit.net/product/hss-integration/-/blob/develop/hss-services/hss-account/hss-account-oxm/src/main/resources/net/homecredit/hss/integration/account/xsd/account/v5/AccountEvent.xsd

Changes tagged in the SD as: CSI-317

## 🔗 Connections (1)

- → Generalization: [[ALOP Process description of CLM part support]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-244 (CLM-971) Cash on card with separate limit (ALOP)
