---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827650
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Validate application payment channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the steps, how system validates the data of selected payment channel for their correctness and completeness.

Input:
- PaymentChannelID = unique identifier of the payment channel

Output:
- ValidationResult = result of respective payment channel validation (positive / negative)
- ErrorCode [0..n] = code of the respective error, that caused the payment channel validation to fail


Steps:

	
- System takes the PaymentChannelID from the input and validates the data of the corresponding payment channel by calling the respective REST API provided by the Payments module (i.e. POST ValidatePaymentChannelRequest) with following input parameters:
   - dataExchangeId = PaymentChannelID 

If calling the service fails due to any reason, then the whole validation fails as well - i.e. algorithm ends with negative ValidationResult and Error = 'MSG_MODULECOMMUNICATIONFAILURE' returned on the output.
	
- System receives the ValidatePaymentChannelResponse.
   a) If there is .result in ('SUCCESS', 'CHANNEL_ALREADY_VALIDATED') returned within such response, then the payment channel was successfully validated (positive ValidationResult).
   c) Otherwise the payment channel validation failed (negative ValidationResult) and respective ErrorCode (value of each returned .result) is returned on the output.

## 🔗 Connections (2)

- ← Dependency: [[{MOD}01.186 Prepare documentation]]
- ← Dependency: [[{MOD}01.187 Sign contract]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
