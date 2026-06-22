---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878876
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Charging request content validation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

Input parameters:

	
- Contract
	
- Tariff Item Code



	
- System checks if the related contract exists in the system, else system adds “Invalid Contract” error code to the error report and moves to next item.
System checks if the related contract is of CEL type, else system adds “Invalid Contract” error code to the error report and moves to next item.


	
- {ADD IS-345}If there is no installment schedule generated for the contract the system adds "No installment schedule generated for provided contract number" error code to the error report and moves to next item.{/ADD}


	
- System checks if the specified tariff item code exists, else system adds “Invalid Tariff item” error code to the error report and moves to next item.
	
- System checks if the specified tariff item belongs to a tariff (TARIFF) which exists in the system, else system adds “Invalid Tariff” error code to the error report and moves to next item.
	
- System checks if  the specified tariff item belongs to a tariff (TARIFF) which is in relation with product (PRODUCT) which belongs to the related contract, else system adds “Invalid relation between Tariff item and Contract” code to the error report and moves to next item. Note that more than one tariff can be found. A particular tariff is then selected in steps 6 and 7.
	
- System checks if contract has status Signed, Active or Paid-off, else system adds “Contract is in status <CONTRACT.STATUS>” code to the error report and moves to next item.
	
- If the related tariff_item_type has the current_tariff_use_flag sets to true (TARIFF_ITEM.TARIFF_ITEM_TYPE.CURRENT_TARIFF_USE_FLAG = true), system checks if the tariff_item exists in the last version of tariff assigned to the contract and is not assigned to any tarif_item_group, else system adds error code with ChargingRequest_E07_NAME message (e.g. “Fee is not defined in tariff version actual for contract”) to the error report and moves to next item.
	
- If the related tariff_item_type has the current_tariff_use_flag sets to false (TARIFF_ITEM.TARIFF_ITEM_TYPE.CURRENT_TARIFF_USE_FLAG = false), system checks if the tariff_item exists in the version of tariff assigned to the contract on contract origination and is not assigned to any tarif_item_group, else system adds error code with ChargingRequest_E08_NAME message (e.g. “Fee is not defined in tariff version used for contract origination”) to the error report and moves to next item.
	
- System checks if tariff item is fee, or penalty type (TARIFF_ITEM.TARIFF_ITEM_CATEGORY = 'fee' or TARIFF_ITEM.TARIFF_ITEM_CATEGORY = 'penalty'), else system adds “Tariff item is not fee, or penalty type, but <TARIFF_ITEM.TARIFF_ITEM_CATEGORY.NAME>“ error code to the error report.
	
- If Charged To Due Date value is provided from the input, check if a standard installment with this due date for the contract exists and is active.
- If not, system adds an error code with ChargingRequest_E09_NAME message (e.g."Related standard installment does not exist") to the error report.
	
- If file.CHARGE_DATE is not NULL then check file.CHARGE_DATE >= current date. If not, system adds "Due date of fee cannot be in the past" error code to the error report
	
- End validation

## 🔗 Connections (2)

- ← Dependency: [[04.110 Process charging requests]]
- → Abstraction «trace»: [[REQ#1 Adding validations to all functionalities depending on existence of an installment schedule]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: IS-345 (CBL-1586) Interest calculation from Disbursement date
- Use Case: Charging request
