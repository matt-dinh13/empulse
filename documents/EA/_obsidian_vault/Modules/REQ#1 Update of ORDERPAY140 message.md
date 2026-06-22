---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)"
domain: "Modules"
element_id: 821108
diagrams: 1
connections: 2
tags:
  - requirement
  - modules
---

# 📋 REQ#1 Update of ORDERPAY140 message

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-2350 - OBS interface - Operations on contract (REL)

## 📝 Notes

- Add value of attribute type_orderpay: YET - Disbursement to client's account due to termination (new type)
	
- Edit of LDM for KBE attribute - symbol of cash transactions should not be determined on basis of partner on which a contract is made, but on basis of recipient of payment.This change will apply to all Orderpay140 messages (both CEL and REL).

## 🔗 Connections (2)

- ← Association: [[{MOD}Processing OutgoingPaymentDto]]
- ← Realisation: [[ORDERPAY140]]

## 📊 Appears In (1 diagrams)

- Custom: BRR-2350 - OBS interface - Operations on contract (REL)
