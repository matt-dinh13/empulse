---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules"
domain: "Analysis Model"
element_id: 1878873
diagrams: 3
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 {MOD}Check fee request and find corresponding tariff item

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Fees and Penalties/Charging request/Business Rules

## 📝 Notes

Input:
Fee request, which contains
- contract code (number) (ChargeFeeItemDTO.ContractNumber)
- tariff item type code (ChargeFeeItemDTO.FeeType)
- charge date (ChargeFeeItemDTO.ChargeDate)
- period start date (ChargeFeeItemDTO.penalizationStartDate)
- period end date (ChargeFeeItemDTO.penalizationEndDate)

Output:
- error code in case of unsuccessful validation
- tariff item for each request corresponding with tariff item type on input 
 

	
- If contract does not exist in the system the system adds this item to the result list with ResultCode = “OTHER ERROR” and ResultErrorText = "Invalid contract number" and algorithm ends.
	
- {ADD IS-345}If there is no installment schedule generated for the contract the system adds this item to the result list with ResultCode = “OTHER ERROR” and ResultErrorText = "No installments exist for the contract" and algorithm ends.{/ADD}
	
- If contract has not status Signed, Active, Paid-off {ADD CBL-2465 PAYM-866} or Written-off {/ADD CBL-2465 PAYM-866} system adds this item to the result list with ResultCode = "CONTRACT IN WRONG STATUS" and ResultErrorText =“Contract is in status <CONTRACT.STATUS>” and algorithm ends.
	
- If the specified tariff item type code does not exist system adds this item to the result list with ResultCode = "FEE TYPE NOT AVAILABLE" and ResultErrorText = “Invalid Tariff item type” and algorithm ends.
	
- If tariff item type is not fee or penalty (TARIFF_ITEM_TYPE.CATEGORY = "Fee" or "Penalty") system adds this item to the result list with ResultCode = "OTHER ERROR" and ResultErrorText = "Used fee type is not fee neither penalty" and algorithm ends.
	
- If charge date is in the past system adds this item to the result list with ResultCode = "OTHER ERROR" and ResultErrorText = "Due date of fee is in the past" and algorithm ends.
	
- System finds tariff according to Algorithm: Find tariff by Current Tariff Use flag (with contract as parameter).
If Is Flag on Tariff Item Type (TariffItemType, USE_CURR_TARIFF_VERSION) = true then TariffErrorText = "in currently valid tariff" else TariffErrorText = "in tariff valid at the time of contract signature".
	
- If the tariff does not contain exactly one tariff item based on received tariff item type, {DEL CBL-15418 IS-1537}system adds this item to the result list with ResultCode = "FEE TYPE NOT AVAILABLE" and ResultErrorText = "Fee is not available" + TariffErrorText (in case tariff item wasn't found) or ResultErrorText = "More than one fee of this type was found" + TariffErrorText (in case two or more tariff items were found) and algorithm ends.{/DEL CBL-15418 IS-1537} 
{ADD  CBL-15418 IS-1537} for each found tariff items get LimitAmountBase. In case there are multiple different LimitAmountBase add resultCode=“FEE TYPE NOT AVAILABLE“, resultErrorText=“All fee items don't have same Limit amount base in + TariffErrorText“ and UC ends. If limitAmountBase is null (no limit is defined) and count of tariff items > 1 add resultCode=“FEE TYPE NOT AVAILABLE“, resultErrorText=“ More than one fee of this type was found and no limit amount base was provided + TariffErrorText“ and UC ends. {/ADD  CBL-15418 IS-1537}
	
- If tariff item.AnnualRateProjection = 'PID' (Period In Days) AND 
(period start date is not defined OR period end date is not defined OR (period start date > period end date) 
system adds this item (request) to the result list with ResultCode = "OTHER_ERROR" and ResultErrorText = "Invalid Start/End of period for Fee calculation".
	
- System returns tariff item which was found as exactly one.

## 🔗 Connections (4)

- ← Dependency: [[{MOD}04.140 Charge fees]]
- → Abstraction «trace»: [[REQ#1 Adding validations to all functionalities depending on existence of an installment schedule]]
- → Dependency: [[Algorithm_ Find tariff by Current Tariff Use flag]]
- → Dependency: [[Is Flag on Tariff Item Type]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: IS-345 (CBL-1586) Interest calculation from Disbursement date
- Use Case: Fee services used by external system (Collection)
