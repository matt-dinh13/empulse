---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case"
domain: "Analysis Model"
element_id: 1753483
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 SMS notification about DDS issues

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Statements/Use Case

## 📝 Notes

Notification is based on data selection from DWH database. Selected data will be processed by Message server.
Notification code: SMS_DDS_PROCESSING_ERROR
Recipient: Client of contract (active mobile number)
Period of selection: daily

Selected contracts:
Contracts whose direct debit statement (CONTRACT.DDM.DIRECT_DEBIT_STATEMENT) was refused by bank (DIRECT_DEBIT_STATEMENT.STATUS = 'Undebited') since the last run of DWH selection (DIRECT_DEBIT_STATEMENT.LAST_MODIFIED > last run of this DWH selection) and reason for refusal requires notification of client (DIRECT_DEBIT_STATEMENT.DDS_ERROR_REASON.NOTIFICATION_FLAG = 'True')

Content of notification:

	
- Contract number (CONTRACT.CODE)
	
- Direct debit due date (DIRECT_DEBIT_STATEMENT.DUE_DATE)
	
- Error reason code (DIRECT_DEBIT_STATEMENT.ERROR_REASON_CODE - description from enumeration)

Text of message is defined by template linked with notification code.

## 🔗 Connections (1)

- ← Dependency: [[05.260 Process DD confirmations import (UseCase 1863211)]]

## 📊 Appears In (2 diagrams)

- Use Case: Automatic import DD statements and confirmations
- Use Case: Direct Debit statements
