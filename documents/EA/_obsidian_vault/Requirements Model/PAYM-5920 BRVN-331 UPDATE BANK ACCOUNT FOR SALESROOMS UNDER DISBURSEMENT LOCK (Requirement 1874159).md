---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK"
domain: "Requirements Model"
element_id: 1874159
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/VN/PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK

## 📝 Notes

After the notification is received and is valid for SALEROOM domain, BSL calls salesroom REST API to check blockable_outpay_type.outgoing_payment_type and based on this data only block, or unblock the related outgoing payments. I.e. no check for salesroom bank account change is done.

This requirement will extend the "unblock payment" functionality with following:

	
- BSL will also receive information about bank account change
	
- Before the outgoing payment is unblocked, BSL updates bank account in the related outgoing payments with the new values.
	
- Alternatively, BSL can update bank account in the related outgoing payments always when the notification from HomeSIS is received.

## 📊 Appears In (1 diagrams)

- Custom: PAYM-5920 BRVN-331 UPDATE BANK ACCOUNT FOR SALESROOMS UNDER DISBURSEMENT LOCK
