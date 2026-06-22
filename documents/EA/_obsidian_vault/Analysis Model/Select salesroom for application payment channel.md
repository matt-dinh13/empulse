---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels"
domain: "Analysis Model"
element_id: 1827645
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Select salesroom for application payment channel

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/COMMON for Contract origination/Business Rules/Operations with application payment channels

## 📝 Notes

This object describes the steps, how system selects an applicable salesroom to be used on the application's payment channel.

Input:
- ApplicationCode = unique identifier of the application (associated with the payment channel)
- PaymentChannelType = type of the payment channel
- SalesroomCode = code of the salesroom (collected in a direct relation with the payment channel)

Output:
- SalesroomCode = code of the salesroom to be used on the application's payment channel

Steps:

	
- System takes the parameters from the input and selects the salesroom to be used on the particular application's payment channel according to the following logic:

   - If the PaymentChannelType = 'PBA', then Salesroom[.Code=SalesroomCode] is used.
   - If the PaymentChannelType = 'SBA' and Temporary_Application/Contract[identified by ApplicationCode].Created_Remotely = FALSE, then salesroom where the user is currently logged in is used.
   - If the PaymentChannelType = 'SBA' and Temporary_Application/Contract[identified by ApplicationCode].Created_Remotely = TRUE and the global parameter CurrentSalesroomForSBA = TRUE, then salesroom where the user is currently logged in is used.
   - If the PaymentChannelType = 'SBA' and Temporary_Application/Contract[identified by ApplicationCode].Created_Remotely = TRUE and the global parameter CurrentSalesroomForSBA = FALSE, then salesroom got according to the rule Get salesroom by operation with Operation = 'APPLICATION_CREATED' on the input is used.
   - Otherwise no salesroom is used (i.e. SalesroomCode is null).
.
	
- System takes the code (Salesroom.Code) of the respective salesroom (selected within the previous step) and returns it as SalesroomCode to the calling object.
	
- Algorithm ends.

## 🔗 Connections (3)

- ← Dependency: [[Update application payment channel]]
- ← Dependency: [[Create application payment channel]]
- → Dependency: [[Get salesroom by operation]]

## 📊 Appears In (1 diagrams)

- Custom: Operations with application payment channels
