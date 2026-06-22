---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination"
domain: "Requirements Model"
element_id: 1752473
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#5 Data migration

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination

## 📝 Notes

We need to merge duplicate bank accounts in DB into one unified bank account and update all links to removed bank accounts to point at the remaining (unified) one.

In DB following tables are linked to Bank Account Id (some of them multiple times):

	
- Bank Technical Account (BSL_BANK_TECH_ACCOUNT.BANK_ACCOUNT_ID)
	
- Contract Status Transition Request for Termination (BSL_CST_REQUEST.BANK_ACCOUNT_ID)
	
- Partner Bank Account (BSL_PARTNER2BANK_ACCOUNT.BANK_ACCOUNT_ID)
	
- Salesroom Bank Account (BSL_SALESROOM2BANK_ACCOUNT.BANK_ACCOUNT_ID)
	
- Incoming Payment (as HC) (BSL_INCOMING_PAYMENT.BANK_ACCOUNT_ID) (in IN00A1 not used)
	
- DDM (composite) (BSL_DDM.BANK_ACCOUNT_ID, BSL_DDM_HISTORY.BANK_ACCOUNT_ID)
	
- Payment Channel (BSL_PAYMENT_CHANNEL.BANK_ACCOUNT_ID, BSL_PAYMENT_CHANNEL_HISTORY.BANK_ACCOUNT_ID)
	
- Outgoing Payment Order (BSL_OUTGOING_PAYMENT_ORDER.BANK_ACCOUNT_ID)
	
- Contract Bank Account (BSL_CONTRACT2BANK_ACCOUNT.BANK_ACCOUNT_ID, BSL_CONTRACT2BANK_ACCOUNT$.BANK_ACCOUNT_ID len na A,C prostrediach)
	
- Outgoing Payment File (BSL_OUTGOING_PAYMENT_FILE.BANK_ACCOUNT_ID)


More info at HSPERF-864.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination (Requirement 1752470)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1428 (CBL-3607) Cross check usage of bank account for contract origination
