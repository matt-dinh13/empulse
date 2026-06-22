---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-570 - OBS interface - Outgoing payments"
domain: "Modules"
element_id: 1415461
diagrams: 3
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Generating DisbursementConfirmationRequest 

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Requirements Model/BRR/Finished - HoSel 3.0/BRR-570 - OBS interface - Outgoing payments

## 📝 Notes

This business rule describes generating of JMS message DisbursementConfirmationRequest in HoSel based on message STATEMENT240.

Input:

	
- STATEMENT240


Algorithm:
        System creates JMS message with the following parameters for each STATEMENT240 message:


	
- DisbursementConfirmationRequest .paymentID = STATEMENT240.id_payout


	
- DisbursementConfirmationRequest .messageID = STATEMENT240.id


	
- DisbursementConfirmationRequest .disbursementDate = STATEMENT240.date_pay
	
- DisbursementConfirmationRequest .deliveryStatus = STATEMENT240.delivery_status


	
- DisbursementConfirmationRequest .orderNumber = STATEMENT240.order_num

## 🔗 Connections (2)

- → Dependency: [[REQ #2 Message STATEMENT240 (closed-end loand and revolving loan)]]
- ← Dependency: [[STATEMENT240]]

## 📊 Appears In (3 diagrams)

- Custom: BRR-570 - OBS interface - Outgoing payments
- Custom: Business rules
- Logical: Outgoing payments - Communication Model
