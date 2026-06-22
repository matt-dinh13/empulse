---
type: Requirement
stereotype: "Epic"
package: "HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date"
domain: "Requirements Model"
element_id: 1290859
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 CBL-1586 Interest calculation from Disbursement date

> **Type**: Requirement · **Stereotype**: «Epic»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/IS/IS-345 (CBL-1586) Interest calculation from Disbursement date

## 📝 Notes

Description:
Interest and instalment schedule have to be generated after disbursement of money to client / dealer due to regulation of SBV.

From A4:
This request is to comply with legal requirement. We would like:

	
- Interest will be calculated from the Disbursement Date of the loan amount.
	
- Disbursement date will be:


	
- For CD/TW: the payment date to dealer and insurance partner (status changed from Unpaid to Paid); and 
	
- For CLX/CLW: the date when Accounting import disbursement confirmation file.


	
- Installment schedule will be generated on the Disbursement Date.
	
- Moves for principal will be generated on the Disbursement Date.
	
- Moves for interest and fee receivable will be generated on the Disbursement Date.
	
- Change synchronization of two or more contracts in classification risk group processes (SBV) from Signed Date to Disbursement Date.
	
- Contract term is defined from Disbursement date instead of Signed Date.
	
- Change the information transferred from BSL to LCS.

## 🔗 Connections (1)

- ← Generalization: [[REQ#1 Adding validations to all functionalities depending on existence of an installment schedule]]

## 📊 Appears In (1 diagrams)

- Custom: IS-345 (CBL-1586) Interest calculation from Disbursement date
