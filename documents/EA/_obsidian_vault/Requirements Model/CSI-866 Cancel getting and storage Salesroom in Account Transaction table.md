---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10412 (CSI-209) BSL SNM component decommission"
domain: "Requirements Model"
element_id: 1615867
diagrams: 1
connections: 3
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-866 Cancel getting and storage Salesroom in Account Transaction table

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-10412 (CSI-209) BSL SNM component decommission

## 📝 Notes

Goal of the task is to remove filling in the AccountTransaction.placeName with Salesroom name

AccountTransaction.placeName is mandatory attribute in the database. Possible solutions:

	
- change to optional
	
- remove attribute from the table
	
- fill in the attribute with a value (e.g. 'N/A' string)


Impacted use cases:

UC 11.081 Prolong insurance contracts:
Cancel getting and storage AccountTransaction.placeName = Salesroom.Name of Salesroom where the product was selected (Get salesroom by operation, passed is Contract and operation = OFFER_CHOSEN) for remotely created contracts and where the contract was created for non-remotely created contracts.

UC 01.775 Process account EOM billing finished event
Cancel getting and storage AccountTransaction.placeName = Salesroom.Name of Salesroom related to the contract
Reason: placeName values is no longer used for calling - AccountTransactionWS.ConfirmTransaction

UC 12.630 Create request for CASH transaction without card
Cancel getting and storage AccountTransaction.placeName by salesroom name
Reason: Not used in AuthorizeTransactionWithIPVariant of AccountTransactionWS

## 📊 Appears In (1 diagrams)

- Custom: CBL-10412 (CSI-209) BSL SNM component decommission
