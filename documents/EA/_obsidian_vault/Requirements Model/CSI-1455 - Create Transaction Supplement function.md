---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction"
domain: "Requirements Model"
element_id: 1777275
diagrams: 1
connections: 4
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-1455 - Create Transaction Supplement function

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction

## 📝 Notes

Reuse the current ALOP API for any transaction supplement type
Supposed changes

Supplement definition: 

	
- the current ALOP changed to TRANSACTION_SUPPLEMENT.
	
- Transaction Type will contain following: ALOP, APOS, CHASH, POS


	
- A new action for Transaction Supplement duplicity check


API Resource name:

	
- transaction-supplement (types in request body: ALOP, APOS, CASH, POS)
	
- transaction-supplement/{type}, e.g. transaction-supplement/pos


Contract Supplement domain change

	
- Registration Way Request - the currently AUTOMATIC/MANUAL; add NO (without registration)


Changes in UC 13.100 Create Transaction Supplement service so that any of Transaction Supplement type can be created

## 🔗 Connections (1)

- → Generalization: [[VN BNPL - Document generation for BNPL transaction]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-16491 (CSI-1432) VN BNPL - Document generation for BNPL transaction
