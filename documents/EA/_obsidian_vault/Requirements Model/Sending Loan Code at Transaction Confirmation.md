---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25062 (CSI-3393) sending Loan Code at Transaction Confirmation"
domain: "Requirements Model"
element_id: 1821684
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 Sending Loan Code at Transaction Confirmation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/CSI/CBL-25062 (CSI-3393) sending Loan Code at Transaction Confirmation

## 📝 Notes

New global parameter TRANS_FILL_LOANCODE used in UC 13.110 Process account transaction for Transaction Supplement

	
- comma separated list of transaction types for which loanCode is filled by ContractSupplement.Code
	
- asterix value means that loanCode is filled in any case
	
- empty value means that loanCode is not filled in any case


Country setting:
ID: TRANS_FILL_LOANCODE = APOS
IN: TRANS_FILL_LOANCODE is empty
PH: TRANS_FILL_LOANCODE is empty
VN: TRANS_FILL_LOANCODE = BNPL_ECOM,VIET_QR  (current conditions hardcoded in UC13.110)

## 📊 Appears In (1 diagrams)

- Custom: CBL-25062 (CSI-3393) sending Loan Code at Transaction Confirmation
